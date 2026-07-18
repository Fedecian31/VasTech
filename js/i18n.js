/* ======================================================
   i18n – VasTech (FULL + BANDERAS + ESTABLE)
   - ES / EN / PT
   - Dropdown con banderas (data-lang)
   - Botón con bandera activa (#current-lang-flag)
   - Persistencia con localStorage
   - Sin loops / sin cuelgues
====================================================== */

(function () {
    "use strict";

    const DEFAULT_LANG = "es";

    const langFlags = {
        es: "🇪🇸",
        en: "🇺🇸",
        pt: "🇧🇷",
    };

    /* =========================
       TRADUCCIONES (COMPLETO)
    ========================= */
    const translations = {
        es: {
            nav: { inicio: "Inicio", productos: "Productos", aplicacion: "Aplicación", nosotros: "Nosotros", consultas: "Consultas" },
            hero: {
                subtitulo: "Entrená con precisión",
                descripcion: "Dejá de corregir a ciegas. Convertí correcciones en progreso medible.",
                cta: "Consultas",
                vermas: "Ver más",
            },
            mosquito: {
                titulo: "¿Por qué elegir el Mosquito?",
                b1_titulo: "Grabación inteligente",
                b1_desc: "Capturá el ejercicio justo después de ejecutarlo para evaluar con calma y mejorar con precisión.",
                b2_titulo: "Configuración personalizada",
                b2_desc: "Definí cuándo empieza la grabación y cuánto dura según tu tipo de entrenamiento.",
                b3_titulo: "Feedback visual diferido",
                b3_desc: "Revisá tu técnica justo después de entrenar y detectá oportunidades de mejora sin distracciones.",
                cta: "Conocé el producto",
            },
            app: {
                hero: {
                    titulo: "Aplicación VasTech",
                    subtitulo: "Controlá Mosquito desde tu celular y hacé que el entrenamiento sea más simple, rápido y práctico.",
                    cta: "Descargar aplicación",
                },
                contenido: {
                    titulo: "Una forma más simple de usar Mosquito",
                    nombre: "App VasTech",
                    descripcion: "La aplicación permite controlar Mosquito desde el celular para iniciar, pausar y gestionar el uso del sistema sin depender del mouse o teclado. Está pensada para entrenadores, profesores y deportistas que necesitan una experiencia más ágil durante la sesión.",
                    que_podes_hacer: "Qué podés hacer",
                    q1: "Controlar el sistema desde el celular",
                    q2: "Usar Mosquito de forma más cómoda durante el entrenamiento",
                    q3: "Reducir interrupciones entre ejercicios o evaluaciones",
                    q4: "Acceder rápidamente a una experiencia pensada para el uso deportivo",
                },
                botones: {
                    auto: "Descargar según mi dispositivo",
                    android: "Google Play",
                    ios: "App Store",
                },
            },
            productos: {
                titulo: "Productos",
                subtitulo: "Mosquito está disponible en distintas versiones según el tipo de entrenamiento.",
                listado: "Productos",
                gym: {
                    tagline: "Evaluación de fuerza y movimiento en ejercicios de gimnasio.",
                    descripcion:
                        "Sistema de análisis por video para ejercicios de fuerza que permite evaluar técnica, rangos articulares y control postural, sin sensores ni equipamiento adicional.",
                    que_hace: "Qué hace",
                    q1: "Analiza movimientos de fuerza a partir de video",
                    q2: "Detecta repeticiones automáticamente",
                    q3: "Mide tiempos de fase concéntrica",
                    q4: "Evalúa alineaciones posturales clave durante el ejercicio",
                    feedback: "Correcciones y feedback",
                    f1: "Correcciones visuales en tiempo real",
                    f2: "Detección de desalineaciones",
                    f3: "Registro de técnica repetición por repetición",
                    gestion: "Gestión y seguimiento",
                    g1: "Guarda videos corregidos",
                    g2: "Historial por usuario",
                    g3: "Exportación de datos",
                    cta: "Consultar Mosquito Gym",
                },
                basquet: {
                    tagline: "Análisis técnico automático del tiro en contexto real.",
                    descripcion: "Sistema de evaluación del tiro en tiempo real mediante visión por computadora.",
                    que_hace: "Qué hace",
                    q1: "Detecta inicio y cierre del tiro",
                    q2: "Discrimina piques y acciones no válidas",
                    q3: "Identifica el lado dominante",
                    q4: "Evalúa gesto lateral y frontal",
                    feedback: "Feedback tiro por tiro",
                    f1: "Postura inicial",
                    f2: "Armado 90/90",
                    f3: "Secuencia piernas–brazos",
                    f4: "Altura de suelta",
                    f5: "Follow-through",
                    entrega: "Qué entrega",
                    e1: "Puntajes objetivos por lanzamiento",
                    e2: "Correcciones visuales",
                    e3: "Comparación entre sesiones",
                    cta: "Consultar Mosquito Básquet",
                },
                bosco: {
                    tagline: "Análisis de saltabilidad con base científica.",
                    descripcion: "Sistema integral para evaluar el salto vertical combinando análisis de video y modelos físicos.",
                    mide: "Qué mide",
                    m1: "Tiempo de vuelo",
                    m2: "Altura del salto",
                    m3: "Velocidad inicial (V0)",
                    analisis: "Análisis técnico",
                    a1: "Profundidad de rodilla",
                    a2: "Inclinación de tronco",
                    a3: "Alineación tobillo–rodilla–cadera",
                    a4: "Asimetrías",
                    resultados: "Resultados y seguimiento",
                    r1: "Informes en video",
                    r2: "Registros históricos",
                    r3: "Exportación de datos",
                    cta: "Consultar Mosquito Bosco",
                },
            },
            nosotros: {
                hero: {
                    titulo: "Quiénes Somos",
                    subtitulo: "Un equipo apasionado por la innovación y el desarrollo tecnológico.",
                    cta: "Ver Producto",
                },
                sobre: {
                    titulo: "Sobre VasTech",
                    p1: "En VasTech decidimos combinar nuestra pasión por el deporte y la tecnología para crear herramientas que hagan una diferencia real en el entrenamiento diario.",
                    p2: "Mosquito es el primer paso de ese camino: una solución práctica y accesible para grabar, analizar y medir gestos deportivos en tiempo real.",
                    p3: "Diseñado desde la experiencia real de entrenar, corregir y superarse. Porque creemos que el progreso se construye con información clara y herramientas simples.",
                },
                valores: {
                    titulo: "Nuestros valores",
                    mision: "Misión",
                    mision_desc: "Impulsar el rendimiento deportivo acercando tecnología útil, accesible y fácil de usar para entrenadores y deportistas.",
                    vision: "Visión",
                    vision_desc: "Ser parte del crecimiento de quienes buscan superarse cada día, llevando innovación a cada espacio de entrenamiento.",
                },
            },
            contacto: {
                hero: {
                    titulo: "Consultas",
                    subtitulo: "¿Tenés una duda o querés trabajar con nosotros? Escribinos.",
                    cta_productos: "Productos",
                },
                form: {
                    titulo: "Consultas",
                    intro: "¿Querés más información? ¡Escribinos!",
                    nombre_label: "Nombre y apellido:",
                    mail_label: "Mail:",
                    pais_label: "País:",
                    provincia_label: "Provincia:",
                    ciudad_label: "Ciudad:",
                    institucion_label: "Institución:",
                    producto_label: "Información sobre el producto:",
                    producto_placeholder: "Seleccioná una opción",
                    mensaje_label: "Mensaje:",
                    enviar: "Enviar",
                },
                errores: {
                    nombre: "Ingresá tu nombre y apellido (mínimo 3 caracteres).",
                    mail: "Mail inválido. Debe tener “@” y un dominio válido.",
                    pais: "Ingresá un país válido.",
                    provincia: "Ingresá una provincia válida.",
                    ciudad: "Ingresá una ciudad válida.",
                    institucion: "Ingresá el nombre de la institución.",
                    producto: "Elegí una opción del desplegable.",
                    mensaje: "Escribí un mensaje válido (mínimo 10 caracteres).",
                },
            },
            footer: {
                contacto: "Contacto",
                telefono: "Teléfono: +54 9 3482 374489",
                email: "Email: info@vastech.com.ar",
                direccion: "Dirección: Habegger 2055, Reconquista",
                copy: "© 2025 VasTech® | CUIT: 20-35114665-7",
                sobre: "Sobre VasTech",
                descripcion: "En VasTech buscamos ayudarte a mejorar tu rendimiento con la mejor tecnología y asesoramiento.",
            },
            ui: { anterior: "Anterior", siguiente: "Siguiente" },
        },

        en: {
            nav: { inicio: "Home", productos: "Products", aplicacion: "App", nosotros: "About Us", consultas: "Contact" },
            hero: {
                subtitulo: "Train with precision",
                descripcion: "Stop correcting blindly. Turn feedback into measurable progress.",
                cta: "Contact",
                vermas: "See more",
            },
            mosquito: {
                titulo: "Why choose Mosquito?",
                b1_titulo: "Smart recording",
                b1_desc: "Capture the exercise right after execution to review calmly and improve with precision.",
                b2_titulo: "Custom configuration",
                b2_desc: "Set when recording starts and how long it lasts based on your training.",
                b3_titulo: "Delayed visual feedback",
                b3_desc: "Review your technique right after training and spot improvements without distractions.",
                cta: "Discover the product",
            },
            app: {
                hero: {
                    titulo: "VasTech App",
                    subtitulo: "Control Mosquito from your phone and make training simpler, faster, and more practical.",
                    cta: "Download app",
                },
                contenido: {
                    titulo: "A simpler way to use Mosquito",
                    nombre: "VasTech App",
                    descripcion: "The app lets you control Mosquito from your phone to start, pause, and manage the system without relying on a mouse or keyboard. It is designed for coaches, trainers, and athletes who need a smoother experience during training.",
                    que_podes_hacer: "What you can do",
                    q1: "Control the system from your phone",
                    q2: "Use Mosquito more comfortably during training",
                    q3: "Reduce interruptions between exercises or assessments",
                    q4: "Quickly access a sport-focused experience",
                },
                botones: {
                    auto: "Download for my device",
                    android: "Google Play",
                    ios: "App Store",
                },
            },
            productos: {
                titulo: "Products",
                subtitulo: "Mosquito is available in different versions depending on your training type.",
                listado: "Products",
                gym: {
                    tagline: "Strength and movement assessment for gym exercises.",
                    descripcion:
                        "Video-based analysis system for strength exercises that evaluates technique, joint range, and posture—no sensors or extra equipment required.",
                    que_hace: "What it does",
                    q1: "Analyzes strength movements from video",
                    q2: "Automatically detects repetitions",
                    q3: "Measures concentric phase timing",
                    q4: "Evaluates key postural alignments during the exercise",
                    feedback: "Corrections and feedback",
                    f1: "Real-time visual corrections",
                    f2: "Misalignment detection",
                    f3: "Technique tracking rep by rep",
                    gestion: "Management and tracking",
                    g1: "Stores corrected videos",
                    g2: "User history",
                    g3: "Data export",
                    cta: "Ask about Mosquito Gym",
                },
                basquet: {
                    tagline: "Automatic shot technique analysis in real context.",
                    descripcion: "Real-time shot evaluation system using computer vision.",
                    que_hace: "What it does",
                    q1: "Detects shot start and release",
                    q2: "Filters bounces and invalid actions",
                    q3: "Identifies dominant side",
                    q4: "Evaluates lateral and frontal technique",
                    feedback: "Shot-by-shot feedback",
                    f1: "Initial stance",
                    f2: "90/90 setup",
                    f3: "Leg–arm sequence",
                    f4: "Release height",
                    f5: "Follow-through",
                    entrega: "What it delivers",
                    e1: "Objective scores per shot",
                    e2: "Visual corrections",
                    e3: "Session comparison",
                    cta: "Ask about Mosquito Basketball",
                },
                bosco: {
                    tagline: "Science-based jump performance analysis.",
                    descripcion: "Integrated system to evaluate vertical jump combining video analysis and physics models.",
                    mide: "What it measures",
                    m1: "Flight time",
                    m2: "Jump height",
                    m3: "Initial velocity (V0)",
                    analisis: "Technical analysis",
                    a1: "Knee depth",
                    a2: "Trunk inclination",
                    a3: "Ankle–knee–hip alignment",
                    a4: "Asymmetries",
                    resultados: "Results and tracking",
                    r1: "Video reports",
                    r2: "Historical records",
                    r3: "Data export",
                    cta: "Ask about Mosquito Bosco",
                },
            },
            nosotros: {
                hero: { titulo: "Who We Are", subtitulo: "A team passionate about innovation and technology.", cta: "View Product" },
                sobre: {
                    titulo: "About VasTech",
                    p1: "At VasTech, we combine sport and technology to create tools that make a real difference in everyday training.",
                    p2: "Mosquito is the first step: a practical and accessible solution to record, analyze, and measure sports performance.",
                    p3: "Designed from real training experience—because we believe progress is built with clear information and simple tools.",
                },
                valores: {
                    titulo: "Our values",
                    mision: "Mission",
                    mision_desc: "Boost sports performance by bringing useful, affordable and easy-to-use technology to coaches and athletes.",
                    vision: "Vision",
                    vision_desc: "Be part of the growth of those who strive to improve every day, bringing innovation to every training space.",
                },
            },
            contacto: {
                hero: { titulo: "Contact", subtitulo: "Have a question or want to work with us? Write to us.", cta_productos: "Products" },
                form: {
                    titulo: "Contact",
                    intro: "Want more information? Write to us!",
                    nombre_label: "Full name:",
                    mail_label: "Email:",
                    pais_label: "Country:",
                    provincia_label: "State / Province:",
                    ciudad_label: "City:",
                    institucion_label: "Institution:",
                    producto_label: "Product information:",
                    producto_placeholder: "Select an option",
                    mensaje_label: "Message:",
                    enviar: "Send",
                },
                errores: {
                    nombre: "Enter your full name (minimum 3 characters).",
                    mail: "Invalid email. It must include “@” and a valid domain.",
                    pais: "Enter a valid country.",
                    provincia: "Enter a valid state/province.",
                    ciudad: "Enter a valid city.",
                    institucion: "Enter the institution name.",
                    producto: "Choose an option from the dropdown.",
                    mensaje: "Write a valid message (minimum 10 characters).",
                },
            },
            footer: {
                contacto: "Contact",
                telefono: "Phone: +54 9 3482 374489",
                email: "Email: info@vastech.com.ar",
                direccion: "Address: Habegger 2055, Reconquista",
                copy: "© 2025 VasTech® | CUIT: 20-35114665-7",
                sobre: "About VasTech",
                descripcion: "At VasTech we help you improve performance with the best technology and coaching support.",
            },
            ui: { anterior: "Previous", siguiente: "Next" },
        },

        pt: {
            nav: { inicio: "Início", productos: "Produtos", aplicacion: "Aplicativo", nosotros: "Sobre nós", consultas: "Contato" },
            hero: {
                subtitulo: "Treine com precisão",
                descripcion: "Pare de corrigir às cegas. Transforme feedback em progresso mensurável.",
                cta: "Contato",
                vermas: "Ver mais",
            },
            mosquito: {
                titulo: "Por que escolher o Mosquito?",
                b1_titulo: "Gravação inteligente",
                b1_desc: "Capture o exercício logo após a execução para avaliar com calma e melhorar com precisão.",
                b2_titulo: "Configuração personalizada",
                b2_desc: "Defina quando a gravação começa e quanto tempo dura de acordo com o seu treino.",
                b3_titulo: "Feedback visual diferido",
                b3_desc: "Revise sua técnica logo após o treino e encontre oportunidades de melhoria sem distrações.",
                cta: "Conheça o produto",
            },
            app: {
                hero: {
                    titulo: "Aplicativo VasTech",
                    subtitulo: "Controle o Mosquito pelo celular e torne o treinamento mais simples, rápido e prático.",
                    cta: "Baixar aplicativo",
                },
                contenido: {
                    titulo: "Uma forma mais simples de usar o Mosquito",
                    nombre: "App VasTech",
                    descripcion: "O aplicativo permite controlar o Mosquito pelo celular para iniciar, pausar e gerenciar o sistema sem depender de mouse ou teclado. Foi pensado para treinadores, professores e atletas que precisam de uma experiência mais ágil durante a sessão.",
                    que_podes_hacer: "O que você pode fazer",
                    q1: "Controlar o sistema pelo celular",
                    q2: "Usar o Mosquito de forma mais confortável durante o treino",
                    q3: "Reduzir interrupções entre exercícios ou avaliações",
                    q4: "Acessar rapidamente uma experiência pensada para o uso esportivo",
                },
                botones: {
                    auto: "Baixar conforme meu dispositivo",
                    android: "Google Play",
                    ios: "App Store",
                },
            },
            productos: {
                titulo: "Produtos",
                subtitulo: "Mosquito está disponível em diferentes versões conforme o tipo de treinamento.",
                listado: "Produtos",
                gym: {
                    tagline: "Avaliação de força e movimento para exercícios de academia.",
                    descripcion:
                        "Sistema de análise por vídeo para exercícios de força que avalia técnica, amplitude articular e postura—sem sensores ou equipamento adicional.",
                    que_hace: "O que faz",
                    q1: "Analisa movimentos de força a partir de vídeo",
                    q2: "Detecta repetições automaticamente",
                    q3: "Mede o tempo da fase concêntrica",
                    q4: "Avalia alinhamentos posturais durante o exercício",
                    feedback: "Correções e feedback",
                    f1: "Correções visuais em tempo real",
                    f2: "Detecção de desalinhamentos",
                    f3: "Registro técnico repetição por repetição",
                    gestion: "Gestão e acompanhamento",
                    g1: "Salva vídeos corrigidos",
                    g2: "Histórico por usuário",
                    g3: "Exportação de dados",
                    cta: "Consultar Mosquito Gym",
                },
                basquet: {
                    tagline: "Análise automática da técnica de arremesso em contexto real.",
                    descripcion: "Sistema de avaliação de arremessos em tempo real por visão computacional.",
                    que_hace: "O que faz",
                    q1: "Detecta início e final do arremesso",
                    q2: "Filtra quicadas e ações inválidas",
                    q3: "Identifica o lado dominante",
                    q4: "Avalia técnica lateral e frontal",
                    feedback: "Feedback arremesso por arremesso",
                    f1: "Postura inicial",
                    f2: "Configuração 90/90",
                    f3: "Sequência pernas–braços",
                    f4: "Altura de liberação",
                    f5: "Follow-through",
                    entrega: "O que entrega",
                    e1: "Pontuações objetivas por arremesso",
                    e2: "Correções visuais",
                    e3: "Comparação entre sessões",
                    cta: "Consultar Mosquito Basquete",
                },
                bosco: {
                    tagline: "Análise científica de saltabilidade.",
                    descripcion: "Sistema integrado para avaliar o salto vertical combinando análise de vídeo e modelos físicos.",
                    mide: "O que mede",
                    m1: "Tempo de voo",
                    m2: "Altura do salto",
                    m3: "Velocidade inicial (V0)",
                    analisis: "Análise técnica",
                    a1: "Profundidade do joelho",
                    a2: "Inclinação do tronco",
                    a3: "Alinhamento tornozelo–joelho–quadril",
                    a4: "Assimetrias",
                    resultados: "Resultados e acompanhamento",
                    r1: "Relatórios em vídeo",
                    r2: "Registros históricos",
                    r3: "Exportação de dados",
                    cta: "Consultar Mosquito Bosco",
                },
            },
            nosotros: {
                hero: { titulo: "Quem somos", subtitulo: "Uma equipe apaixonada por inovação e tecnologia.", cta: "Ver produto" },
                sobre: {
                    titulo: "Sobre a VasTech",
                    p1: "Na VasTech, combinamos esporte e tecnologia para criar ferramentas que fazem diferença no treino do dia a dia.",
                    p2: "Mosquito é o primeiro passo: uma solução prática e acessível para gravar, analisar e medir desempenho.",
                    p3: "Projetado a partir da experiência real de treino—porque acreditamos que progresso vem de informação clara e ferramentas simples.",
                },
                valores: {
                    titulo: "Nossos valores",
                    mision: "Missão",
                    mision_desc: "Impulsionar o desempenho esportivo com tecnologia útil, acessível e fácil de usar.",
                    vision: "Visão",
                    vision_desc: "Acompanhar quem busca evoluir todos os dias, levando inovação a cada espaço de treino.",
                },
            },
            contacto: {
                hero: { titulo: "Contato", subtitulo: "Tem alguma dúvida ou quer trabalhar conosco? Escreva para nós.", cta_productos: "Produtos" },
                form: {
                    titulo: "Contato",
                    intro: "Quer mais informações? Fale com a gente!",
                    nombre_label: "Nome completo:",
                    mail_label: "Email:",
                    pais_label: "País:",
                    provincia_label: "Estado:",
                    ciudad_label: "Cidade:",
                    institucion_label: "Instituição:",
                    producto_label: "Informações sobre o produto:",
                    producto_placeholder: "Selecione uma opção",
                    mensaje_label: "Mensagem:",
                    enviar: "Enviar",
                },
                errores: {
                    nombre: "Informe seu nome completo (mínimo 3 caracteres).",
                    mail: "Email inválido. Deve conter “@” e um domínio válido.",
                    pais: "Informe um país válido.",
                    provincia: "Informe um estado válido.",
                    ciudad: "Informe uma cidade válida.",
                    institucion: "Informe o nome da instituição.",
                    producto: "Selecione uma opção no menu.",
                    mensaje: "Escreva uma mensagem válida (mínimo 10 caracteres).",
                },
            },
            footer: {
                contacto: "Contato",
                telefono: "Telefone: +54 9 3482 374489",
                email: "Email: info@vastech.com.ar",
                direccion: "Endereço: Habegger 2055, Reconquista",
                copy: "© 2025 VasTech® | CUIT: 20-35114665-7",
                sobre: "Sobre a VasTech",
                descripcion: "Na VasTech, ajudamos você a melhorar o desempenho com a melhor tecnologia e suporte.",
            },
            ui: { anterior: "Anterior", siguiente: "Próximo" },
        },
    };

    /* =========================
       HELPERS
    ========================= */
    function getNested(obj, path) {
        return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
    }

    function updateFlag(lang) {
        const el = document.getElementById("current-lang-flag");
        if (!el) return false;

        const next = langFlags[lang] || "🌍";
        // ✅ clave para NO LOOP: solo cambia si es distinto
        if (el.textContent !== next) el.textContent = next;

        return true;
    }

    function applyTranslations(lang) {
        const pack = translations[lang];
        if (!pack) return;

        document.querySelectorAll("[data-i18n]").forEach((node) => {
            const key = node.dataset.i18n;
            const value = getNested(pack, key);
            if (value !== undefined && value !== null) node.textContent = value;
        });
    }

    function setLanguage(lang) {
        const safeLang = translations[lang] ? lang : DEFAULT_LANG;
        localStorage.setItem("lang", safeLang);

        applyTranslations(safeLang);
        document.documentElement.setAttribute("lang", safeLang);
        updateFlag(safeLang);
    }

    function init() {
        const saved = localStorage.getItem("lang") || DEFAULT_LANG;
        setLanguage(saved);

        // Delegación: clicks en banderas del dropdown
        document.addEventListener("click", (e) => {
            const btn = e.target.closest("[data-lang]");
            if (!btn) return;
            setLanguage(btn.dataset.lang);
        });

        // Reintentos por timing
        if (!updateFlag(saved)) {
            setTimeout(() => updateFlag(localStorage.getItem("lang") || DEFAULT_LANG), 120);
            setTimeout(() => updateFlag(localStorage.getItem("lang") || DEFAULT_LANG), 350);
            setTimeout(() => updateFlag(localStorage.getItem("lang") || DEFAULT_LANG), 900);
        }

        // Observer seguro (sin characterData): si alguien agrega/reemplaza el botón, re-aplicamos bandera
        const observer = new MutationObserver(() => {
            const current = localStorage.getItem("lang") || DEFAULT_LANG;
            updateFlag(current);
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    document.addEventListener("DOMContentLoaded", init);
})();
