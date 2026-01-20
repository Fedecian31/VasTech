document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS) AOS.init();

  const form = document.getElementById("contactoForm");
  const statusEl = document.getElementById("form-status");

  const fields = {
    nombre_apellido: document.getElementById("nombre_apellido"),
    mail: document.getElementById("mail"),
    pais: document.getElementById("pais"),
    provincia: document.getElementById("provincia"),
    ciudad: document.getElementById("ciudad"),
    institucion: document.getElementById("institucion"),
    producto: document.getElementById("producto"),
    mensaje: document.getElementById("mensaje"),
  };

  const errors = {
    nombre_apellido: document.getElementById("nombre_apellidoError"),
    mail: document.getElementById("mailError"),
    pais: document.getElementById("paisError"),
    provincia: document.getElementById("provinciaError"),
    ciudad: document.getElementById("ciudadError"),
    institucion: document.getElementById("institucionError"),
    producto: document.getElementById("productoError"),
    mensaje: document.getElementById("mensajeError"),
  };

  // Mensaje al volver del PHP (?ok=1 / ?err=1)
  const params = new URLSearchParams(window.location.search);
  if (params.has("ok")) {
    statusEl.textContent = "✅ Enviado. Te respondemos a la brevedad.";
    statusEl.style.color = "green";
  } else if (params.has("err")) {
    statusEl.textContent = "❌ No se pudo enviar. Probá de nuevo o escribinos por WhatsApp.";
    statusEl.style.color = "red";
  }

  function showError(el, errEl, msg) {
    errEl.textContent = msg;
    errEl.style.display = "block";
    el.classList.add("input-error");
    el.classList.remove("input-ok");
  }

  function showOk(el, errEl) {
    errEl.style.display = "none";
    el.classList.remove("input-error");
    el.classList.add("input-ok");
  }

  const hasLetters = (s) => /[A-Za-zÁÉÍÓÚáéíóúÑñ]/.test(s);

  function validText(v, min) {
    const t = (v || "").trim();
    return t.length >= min && hasLetters(t);
  }

  function validEmail(v) {
    const e = (v || "").trim();
    if (!e.includes("@")) return false;
    if (/\s/.test(e)) return false;
    const parts = e.split("@");
    if (parts.length !== 2) return false;
    const domain = parts[1];
    if (!domain.includes(".")) return false;
    if (domain.startsWith(".") || domain.endsWith(".")) return false;
    if (domain.includes("..")) return false;
    return true;
  }

  function validMessage(v) {
    const m = (v || "").trim();
    if (m.length < 10) return false;
    const letters = m.match(/[A-Za-zÁÉÍÓÚáéíóúÑñ]/g) || [];
    return letters.length >= 3;
  }

  function validateAll() {
    let ok = true;

    if (!validText(fields.nombre_apellido.value, 3)) {
      showError(fields.nombre_apellido, errors.nombre_apellido, "Ingresá tu nombre y apellido (mínimo 3 caracteres).");
      ok = false;
    } else showOk(fields.nombre_apellido, errors.nombre_apellido);

    if (!validEmail(fields.mail.value)) {
      showError(fields.mail, errors.mail, "Mail inválido. Debe tener “@” y un dominio válido.");
      ok = false;
    } else showOk(fields.mail, errors.mail);

    if (!validText(fields.pais.value, 2)) {
      showError(fields.pais, errors.pais, "Ingresá un país válido.");
      ok = false;
    } else showOk(fields.pais, errors.pais);

    if (!validText(fields.provincia.value, 2)) {
      showError(fields.provincia, errors.provincia, "Ingresá una provincia válida.");
      ok = false;
    } else showOk(fields.provincia, errors.provincia);

    if (!validText(fields.ciudad.value, 2)) {
      showError(fields.ciudad, errors.ciudad, "Ingresá una ciudad válida.");
      ok = false;
    } else showOk(fields.ciudad, errors.ciudad);

    if (!validText(fields.institucion.value, 2)) {
      showError(fields.institucion, errors.institucion, "Ingresá el nombre de la institución.");
      ok = false;
    } else showOk(fields.institucion, errors.institucion);

    if (!fields.producto.value) {
      showError(fields.producto, errors.producto, "Elegí una opción del desplegable.");
      ok = false;
    } else showOk(fields.producto, errors.producto);

    if (!validMessage(fields.mensaje.value)) {
      showError(fields.mensaje, errors.mensaje, "Escribí un mensaje válido (mínimo 10 caracteres).");
      ok = false;
    } else showOk(fields.mensaje, errors.mensaje);

    return ok;
  }

  // Validación “en vivo”
  Object.entries(fields).forEach(([k, el]) => {
    const errEl = errors[k];
    if (!el || !errEl) return;

    const ev = (el.tagName === "SELECT") ? "change" : "input";
    el.addEventListener(ev, () => {
      // no spamear status
      statusEl.textContent = "";
      statusEl.style.color = "";
      validateAll();
    });
  });

  form.addEventListener("submit", (e) => {
    statusEl.textContent = "";
    statusEl.style.color = "";

    if (!validateAll()) {
      e.preventDefault();
      statusEl.textContent = "❌ Revisá los campos marcados antes de enviar.";
      statusEl.style.color = "red";

      // foco al primero roto
      const order = [
        fields.nombre_apellido, fields.mail, fields.pais, fields.provincia,
        fields.ciudad, fields.institucion, fields.producto, fields.mensaje
      ];
      const firstBad = order.find(x => x.classList.contains("input-error"));
      if (firstBad) firstBad.focus();
      return;
    }

    statusEl.textContent = "Enviando… 🚀";
    statusEl.style.color = "green";
  });
});
