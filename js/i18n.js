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
            nav: { inicio: "Inicio", productos: "Productos", aplicacion: "Aplicaciones", nosotros: "Nosotros", consultas: "Consultas" },
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
                    titulo: "Aplicaciones VasTech",
                    subtitulo: "Cada producto utiliza una aplicación adaptada a su tipo de análisis deportivo.",
                    cta: "Ver aplicaciones",
                },
                contenido: {
                    titulo: "Elegí la aplicación para tu Mosquito",
                },
                intro: {
                    nombre: "Aplicaciones VasTech",
                    descripcion: "Mosquito Gym + Bosco se comercializa como un único producto y utiliza una sola aplicación. Mosquito Básquet funciona con una aplicación separada y Mosquito Pádel contará con su propia aplicación.",
                    importante: "Importante",
                    i1: "Gym y Bosco forman un único producto y utilizan la misma aplicación.",
                    i2: "Básquet funciona con una aplicación independiente.",
                    i3: "Pádel tendrá una aplicación independiente próximamente.",
                },
                gym_bosco: {
                    nombre: "Mosquito Gym + Bosco",
                    descripcion: "Mosquito Gym + Bosco se vende como una única solución que incluye ambos módulos. Desde una misma aplicación podés controlar las evaluaciones de fuerza, movimiento y saltabilidad.",
                    para: "Con esta solución podés",
                    i1: "Analizar ejercicios de fuerza con el módulo Gym.",
                    i2: "Realizar evaluaciones de salto con el módulo Bosco.",
                    i3: "Controlar y gestionar todas las sesiones desde el celular.",
                    boton_auto: "Descargar según mi dispositivo",
                },
                basquet: {
                    nombre: "Mosquito Básquet",
                    descripcion: "Mosquito Básquet cuenta con una aplicación propia, separada de Gym + Bosco, pensada específicamente para el análisis técnico del tiro y la gestión de sesiones de lanzamiento.",
                    para: "Esta aplicación se utiliza para",
                    i1: "Gestionar sesiones de tiro.",
                    i2: "Seleccionar el tipo de análisis.",
                    i3: "Consultar los videos y resultados registrados.",
                    boton_auto: "Descargar según mi dispositivo",
                },
                padel: {
                    nombre: "Mosquito Pádel",
                    descripcion: "Mosquito Pádel funciona con una aplicación propia, desarrollada específicamente para el análisis de golpes y correcciones técnicas dentro de la cancha.",
                    estado: "Estado de la aplicación",
                    disponibilidad: "Próximamente disponible para Android y iPhone.",
                    consultar: "Consultar por Mosquito Pádel",
                },
                botones: {
                    android: "Google Play",
                    ios: "App Store",
                },
            },
            productos: {
                titulo: "Productos",
                subtitulo: "Mosquito está disponible en soluciones específicas para gimnasio y saltabilidad, básquet y pádel.",
                listado: "Productos",
                gym_bosco: {
                    tagline: "Análisis integral de fuerza, movimiento y saltabilidad en una sola solución.",
                    descripcion: "Mosquito Gym y Mosquito Bosco se comercializan juntos como un único producto. La solución combina el análisis de ejercicios de fuerza con la evaluación del salto vertical, utilizando video, métricas y correcciones técnicas desde un mismo sistema.",
                    modulo_gym: "Módulo Gym",
                    gym1: "Analiza movimientos de fuerza a partir de video",
                    gym2: "Detecta repeticiones automáticamente",
                    gym3: "Mide tiempos de fase concéntrica",
                    gym4: "Evalúa alineaciones posturales y técnica de ejecución",
                    modulo_bosco: "Módulo Bosco",
                    bosco1: "Mide tiempo de vuelo, altura de salto y velocidad inicial",
                    bosco2: "Analiza profundidad de rodilla e inclinación de tronco",
                    bosco3: "Evalúa alineación tobillo–rodilla–cadera",
                    bosco4: "Detecta asimetrías y control postural",
                    gestion: "Gestión y seguimiento",
                    s1: "Guarda videos y resultados de las evaluaciones",
                    s2: "Mantiene un historial por usuario",
                    s3: "Permite exportar datos para seguimiento y análisis",
                    cta: "Consultar Mosquito Gym + Bosco",
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
                padel: {
                    tagline: "Análisis técnico de golpes de pádel desde el celular.",
                    descripcion: "Sistema de análisis por video pensado para registrar y revisar golpes de pádel. Permite seleccionar el tipo de golpe que se desea evaluar, grabar la ejecución y visualizar el video para trabajar sobre correcciones técnicas específicas.",
                    que_hace: "Qué hace",
                    q1: "Permite seleccionar el tipo de golpe que se quiere analizar",
                    q2: "Registra la ejecución mediante video desde la aplicación",
                    q3: "Permite detener y revisar la sesión inmediatamente",
                    q4: "Organiza el análisis según el gesto técnico seleccionado",
                    feedback: "Correcciones y revisión",
                    f1: "Reproducción del video dentro de la aplicación",
                    f2: "Correcciones específicas según el tipo de golpe",
                    f3: "Apoyo visual para entrenadores y deportistas",
                    gestion: "Gestión de sesiones",
                    g1: "Creación y selección de usuarios",
                    g2: "Inicio y detención de sesiones desde el celular",
                    g3: "Consulta de las grabaciones realizadas",
                    cta: "Consultar Mosquito Pádel",
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
                    producto_gym_bosco: "Mosquito Gym + Bosco",
                    producto_basquet: "Mosquito Básquet",
                    producto_padel: "Mosquito Pádel",
                    producto_combo: "Combo",
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
            nav: { inicio: "Home", productos: "Products", aplicacion: "Apps", nosotros: "About Us", consultas: "Contact" },
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
                    titulo: "VasTech Apps",
                    subtitulo: "Each product uses an app adapted to its type of sports analysis.",
                    cta: "View apps",
                },
                contenido: {
                    titulo: "Choose the app for your Mosquito",
                },
                intro: {
                    nombre: "VasTech Apps",
                    descripcion: "Mosquito Gym + Bosco is sold as one product and uses a single app. Mosquito Basketball uses a separate app, and Mosquito Padel will have its own app.",
                    importante: "Important",
                    i1: "Gym and Bosco form one product and use the same app.",
                    i2: "Basketball works with an independent app.",
                    i3: "Padel will have an independent app soon.",
                },
                gym_bosco: {
                    nombre: "Mosquito Gym + Bosco",
                    descripcion: "Mosquito Gym + Bosco is sold as one solution that includes both modules. From the same app, you can control strength, movement, and jump assessments.",
                    para: "With this solution you can",
                    i1: "Analyze strength exercises with the Gym module.",
                    i2: "Perform jump assessments with the Bosco module.",
                    i3: "Control and manage every session from your phone.",
                    boton_auto: "Download for my device",
                },
                basquet: {
                    nombre: "Mosquito Basketball",
                    descripcion: "Mosquito Basketball has its own app, separate from Gym + Bosco, specifically designed for shot technique analysis and shooting session management.",
                    para: "This app is used for",
                    i1: "Managing shooting sessions.",
                    i2: "Selecting the type of analysis.",
                    i3: "Viewing recorded videos and results.",
                    boton_auto: "Download for my device",
                },
                padel: {
                    nombre: "Mosquito Padel",
                    descripcion: "Mosquito Padel works with its own app, specifically developed for stroke analysis and technical corrections on court.",
                    estado: "App status",
                    disponibilidad: "Coming soon for Android and iPhone.",
                    consultar: "Ask about Mosquito Padel",
                },
                botones: {
                    android: "Google Play",
                    ios: "App Store",
                },
            },
            productos: {
                titulo: "Products",
                subtitulo: "Mosquito is available in specific solutions for gym and jump performance, basketball, and padel.",
                listado: "Products",
                gym_bosco: {
                    tagline: "Integrated strength, movement, and jump-performance analysis in one solution.",
                    descripcion: "Mosquito Gym and Mosquito Bosco are sold together as one product. The solution combines strength-exercise analysis with vertical-jump assessment, using video, metrics, and technical corrections from the same system.",
                    modulo_gym: "Gym module",
                    gym1: "Analyzes strength movements from video",
                    gym2: "Automatically detects repetitions",
                    gym3: "Measures concentric phase timing",
                    gym4: "Evaluates postural alignment and execution technique",
                    modulo_bosco: "Bosco module",
                    bosco1: "Measures flight time, jump height, and initial velocity",
                    bosco2: "Analyzes knee depth and trunk inclination",
                    bosco3: "Evaluates ankle–knee–hip alignment",
                    bosco4: "Detects asymmetries and postural control",
                    gestion: "Management and tracking",
                    s1: "Stores videos and assessment results",
                    s2: "Keeps a history for each user",
                    s3: "Allows data export for tracking and analysis",
                    cta: "Ask about Mosquito Gym + Bosco",
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
                padel: {
                    tagline: "Technical padel stroke analysis from your phone.",
                    descripcion: "A video analysis system designed to record and review padel strokes. It lets users select the stroke they want to assess, record the execution, and watch the video to work on specific technical corrections.",
                    que_hace: "What it does",
                    q1: "Lets users select the type of stroke they want to analyze",
                    q2: "Records the execution through video from the app",
                    q3: "Allows the session to be stopped and reviewed immediately",
                    q4: "Organizes the analysis according to the selected technical movement",
                    feedback: "Corrections and review",
                    f1: "Video playback inside the app",
                    f2: "Specific corrections according to the selected stroke",
                    f3: "Visual support for coaches and athletes",
                    gestion: "Session management",
                    g1: "User creation and selection",
                    g2: "Starting and stopping sessions from the phone",
                    g3: "Reviewing recorded sessions",
                    cta: "Ask about Mosquito Padel",
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
                    producto_gym_bosco: "Mosquito Gym + Bosco",
                    producto_basquet: "Mosquito Basketball",
                    producto_padel: "Mosquito Padel",
                    producto_combo: "Bundle",
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
            nav: { inicio: "Início", productos: "Produtos", aplicacion: "Aplicativos", nosotros: "Sobre nós", consultas: "Contato" },
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
                    titulo: "Aplicativos VasTech",
                    subtitulo: "Cada produto utiliza um aplicativo adaptado ao seu tipo de análise esportiva.",
                    cta: "Ver aplicativos",
                },
                contenido: {
                    titulo: "Escolha o aplicativo para o seu Mosquito",
                },
                intro: {
                    nombre: "Aplicativos VasTech",
                    descripcion: "Mosquito Gym + Bosco é comercializado como um único produto e utiliza um só aplicativo. Mosquito Basquete utiliza um aplicativo separado e Mosquito Padel terá seu próprio aplicativo.",
                    importante: "Importante",
                    i1: "Gym e Bosco formam um único produto e utilizam o mesmo aplicativo.",
                    i2: "Basquete funciona com um aplicativo independente.",
                    i3: "Padel terá um aplicativo independente em breve.",
                },
                gym_bosco: {
                    nombre: "Mosquito Gym + Bosco",
                    descripcion: "Mosquito Gym + Bosco é vendido como uma única solução que inclui os dois módulos. Pelo mesmo aplicativo, você pode controlar avaliações de força, movimento e saltabilidade.",
                    para: "Com esta solução você pode",
                    i1: "Analisar exercícios de força com o módulo Gym.",
                    i2: "Realizar avaliações de salto com o módulo Bosco.",
                    i3: "Controlar e gerenciar todas as sessões pelo celular.",
                    boton_auto: "Baixar para o meu dispositivo",
                },
                basquet: {
                    nombre: "Mosquito Basquete",
                    descripcion: "Mosquito Basquete conta com um aplicativo próprio, separado do Gym + Bosco, desenvolvido especificamente para análise técnica do arremesso e gestão das sessões.",
                    para: "Este aplicativo é utilizado para",
                    i1: "Gerenciar sessões de arremesso.",
                    i2: "Selecionar o tipo de análise.",
                    i3: "Consultar vídeos e resultados registrados.",
                    boton_auto: "Baixar para o meu dispositivo",
                },
                padel: {
                    nombre: "Mosquito Padel",
                    descripcion: "Mosquito Padel funciona com um aplicativo próprio, desenvolvido especificamente para análise de golpes e correções técnicas dentro da quadra.",
                    estado: "Estado do aplicativo",
                    disponibilidad: "Em breve para Android e iPhone.",
                    consultar: "Consultar sobre Mosquito Padel",
                },
                botones: {
                    android: "Google Play",
                    ios: "App Store",
                },
            },
            productos: {
                titulo: "Produtos",
                subtitulo: "Mosquito está disponível em soluções específicas para academia e saltabilidade, basquete e padel.",
                listado: "Produtos",
                gym_bosco: {
                    tagline: "Análise integrada de força, movimento e saltabilidade em uma única solução.",
                    descripcion: "Mosquito Gym e Mosquito Bosco são comercializados juntos como um único produto. A solução combina a análise de exercícios de força com a avaliação do salto vertical, utilizando vídeo, métricas e correções técnicas no mesmo sistema.",
                    modulo_gym: "Módulo Gym",
                    gym1: "Analisa movimentos de força a partir de vídeo",
                    gym2: "Detecta repetições automaticamente",
                    gym3: "Mede o tempo da fase concêntrica",
                    gym4: "Avalia alinhamentos posturais e técnica de execução",
                    modulo_bosco: "Módulo Bosco",
                    bosco1: "Mede tempo de voo, altura do salto e velocidade inicial",
                    bosco2: "Analisa profundidade do joelho e inclinação do tronco",
                    bosco3: "Avalia alinhamento tornozelo–joelho–quadril",
                    bosco4: "Detecta assimetrias e controle postural",
                    gestion: "Gestão e acompanhamento",
                    s1: "Salva vídeos e resultados das avaliações",
                    s2: "Mantém um histórico por usuário",
                    s3: "Permite exportar dados para acompanhamento e análise",
                    cta: "Consultar Mosquito Gym + Bosco",
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
                padel: {
                    tagline: "Análise técnica de golpes de padel pelo celular.",
                    descripcion: "Sistema de análise por vídeo desenvolvido para registrar e revisar golpes de padel. Permite selecionar o tipo de golpe que será avaliado, gravar a execução e visualizar o vídeo para trabalhar correções técnicas específicas.",
                    que_hace: "O que faz",
                    q1: "Permite selecionar o tipo de golpe que será analisado",
                    q2: "Registra a execução em vídeo pelo aplicativo",
                    q3: "Permite encerrar e revisar a sessão imediatamente",
                    q4: "Organiza a análise conforme o movimento técnico selecionado",
                    feedback: "Correções e revisão",
                    f1: "Reprodução do vídeo dentro do aplicativo",
                    f2: "Correções específicas conforme o tipo de golpe",
                    f3: "Apoio visual para treinadores e atletas",
                    gestion: "Gestão de sessões",
                    g1: "Criação e seleção de usuários",
                    g2: "Início e encerramento das sessões pelo celular",
                    g3: "Consulta das gravações realizadas",
                    cta: "Consultar Mosquito Padel",
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
                    producto_gym_bosco: "Mosquito Gym + Bosco",
                    producto_basquet: "Mosquito Basquete",
                    producto_padel: "Mosquito Padel",
                    producto_combo: "Combo",
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
