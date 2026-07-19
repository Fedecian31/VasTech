<?php
// procesar_formulario.php

declare(strict_types=1);

// ============== CONFIG ==============
$DESTINO = "info@vastech.com.ar";
$ASUNTO_BASE  = "Nuevo mensaje desde VasTech (Contacto)";

// From del mismo dominio (mejor para entregabilidad)
$FROM_DOMAIN = "no-reply@vastech.com.ar";

// ============== HELPERS ==============
function clean_one_line(string $s): string {
    $s = trim($s);
    $s = str_replace(["\r", "\n"], " ", $s);
    return $s;
}

function clean_multiline(string $s): string {
    $s = trim($s);
    $s = str_replace(["\r\n", "\r"], "\n", $s);
    return $s;
}

function fail_redirect(): void {
    header("Location: contacto.html?err=1");
    exit;
}

function ok_redirect(): void {
    header("Location: contacto.html?ok=1");
    exit;
}

// ============== METHOD CHECK ==============
if (($_SERVER["REQUEST_METHOD"] ?? "") !== "POST") {
    fail_redirect();
}

// ============== BASIC ANTI-SPAM (honeypot) ==============
if (!empty($_POST["empresa"] ?? "")) {
    fail_redirect();
}

// ============== INPUTS ==============
$nombre_apellido = clean_one_line((string)($_POST["nombre_apellido"] ?? ""));
$mail            = clean_one_line((string)($_POST["mail"] ?? ""));
$pais            = clean_one_line((string)($_POST["pais"] ?? ""));
$provincia       = clean_one_line((string)($_POST["provincia"] ?? ""));
$ciudad          = clean_one_line((string)($_POST["ciudad"] ?? ""));
$institucion     = clean_one_line((string)($_POST["institucion"] ?? ""));
$producto        = clean_one_line((string)($_POST["producto"] ?? ""));
$mensaje         = clean_multiline((string)($_POST["mensaje"] ?? ""));

// ============== VALIDATION ==============
if (
    $nombre_apellido === "" || $mail === "" || $pais === "" || $provincia === "" ||
    $ciudad === "" || $institucion === "" || $producto === "" || $mensaje === ""
) {
    fail_redirect();
}

if (mb_strlen($nombre_apellido) > 100) fail_redirect();
if (mb_strlen($mail) > 120) fail_redirect();
if (mb_strlen($pais) > 60) fail_redirect();
if (mb_strlen($provincia) > 60) fail_redirect();
if (mb_strlen($ciudad) > 60) fail_redirect();
if (mb_strlen($institucion) > 120) fail_redirect();
if (mb_strlen($mensaje) > 3000) fail_redirect();

if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) fail_redirect();

if (mb_strlen(trim($mensaje)) < 10) fail_redirect();

// Producto permitido
$productos_validos = [
    "mosquito_gym_bosco" => "Mosquito Gym + Bosco",
    "mosquito_basquet"   => "Mosquito Básquet",
    "mosquito_padel"     => "Mosquito Pádel",
    "combo"              => "Combo",
];

if (!array_key_exists($producto, $productos_validos)) {
    fail_redirect();
}

$producto_legible = $productos_validos[$producto];

// ============== EMAIL BUILD ==============
$fecha = date("Y-m-d H:i:s");
$ip    = $_SERVER["REMOTE_ADDR"] ?? "desconocida";
$ua    = $_SERVER["HTTP_USER_AGENT"] ?? "desconocido";

$asunto_final = $ASUNTO_BASE . " - " . $producto_legible;

$body  = "Nuevo mensaje desde el formulario de contacto (VasTech)\n\n";
$body .= "Fecha: $fecha\n";
$body .= "Interés: $producto_legible\n\n";
$body .= "---- Datos ----\n";
$body .= "Nombre y apellido: $nombre_apellido\n";
$body .= "Mail: $mail\n";
$body .= "País: $pais\n";
$body .= "Provincia: $provincia\n";
$body .= "Ciudad: $ciudad\n";
$body .= "Institución: $institucion\n\n";
$body .= "---- Mensaje ----\n";
$body .= $mensaje . "\n\n";
$body .= "---- Técnico ----\n";
$body .= "IP: $ip\n";
$body .= "User-Agent: $ua\n";

$headers = [];
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";
$headers[] = "From: VasTech <{$FROM_DOMAIN}>";
$headers[] = "Reply-To: {$mail}";
$headers[] = "X-Mailer: PHP/" . phpversion();

$headers_str = implode("\r\n", $headers);

// Encode subject UTF-8
$subject_encoded = "=?UTF-8?B?" . base64_encode($asunto_final) . "?=";

$sent = @mail($DESTINO, $subject_encoded, $body, $headers_str);

if ($sent) ok_redirect();
fail_redirect();