export default {
  global: {
    componenteFormativo: 'Construcción aplicación web',
    descripcionCurso:
      'En este componente formativo se realizará una aplicación web completa (<em>Backend y Frontend</em>). Se utilizarán tecnologías del lado del servidor como Node.js, MongoDB, Express y del lado del cliente AngularJS y Materialize. La aplicación consumirá un <em>API REST</em> con el propósito de hacer el registro de empleados en una empresa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/f1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/f2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/f3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/f4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/f5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Construcción del Backend de la aplicación web',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Instalación y configuración de herramientas de Node.js',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Desarrollo del index.js',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Configuración e instalación de la base de datos MongoDB',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Configuración de database.js ',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Configuración de las rutas del proyecto con Node.js ',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Desarrollo de controladores para la <em>API REST</em>',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo:
              'Realización de pruebas de la <em>API REST</em> con <em>Postman</em>',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Construcción del Front-end de la aplicación <em>web</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Instalación y configuración de AngularJS',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Generación de código con ng',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Incorporación de materialize al proyecto <em>web</em>',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Configuración de app.component.html',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Configuración de los módulos app.modules.ts',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Configuración del modelo empleado.ts',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Creación del servicio empleado.service.ts',
            hash: 't_2_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.8',
            titulo: 'Desarrollo del componente empleados.components.ts',
            hash: 't_2_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.9',
            titulo: 'Desarrollo de la interfaz HTML empleados.component.html',
            hash: 't_2_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.10',
            titulo:
              'Probando la aplicación completa. Proyecto <em>web</em> terminado',
            hash: 't_2_10',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Paradigmas, estándares y costos asociados al desarrollo de <em>software</em>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Descripción <em>Backend</em> y <em>Fron-end</em>',
      referencia:
        'EDteam.(2020). ¿Qué es <em>Backend</em> y <em>Front-end?</em> (guía completa) ',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Instalación MongoDB',
      referencia:
        'MongoDB. (2021). <em>Install MongoDB Community Edition on Windows.</em> ',
      tipo: 'Instalador',
      link:
        'https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/',
    },
    {
      tema: 'Instalación Node.js y Express',
      referencia: 'Coding, G. (2020). Cómo instalar Node.js en Windows 10 ',
      tipo: 'Video',
      link: 'https://youtu.be/BgtB31gXkoA',
    },
    {
      tema: 'Guía de instalación Angular CLI',
      referencia: 'Angular. (2021). <em>Installing Angular CLI.</em>',
      tipo: 'Página web',
      link: 'https://angular.io/cli',
    },
    {
      tema: 'Guía de instalación Postman',
      referencia:
        'Limitless Minds. (2019).  Instalación Postman y prueba de los métodos GET',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=440yQGvINkk ',
    },
    {
      tema: 'Guía de Materialize',
      referencia:
        'Materializecss. (2021). <em>Getting Started - Materialize</em>.',
      tipo: 'Página web',
      link: 'https://materializecss.com/getting-started.html ',
    },
    {
      tema: 'Guía extensión VS Code y MongoDB',
      referencia:
        'Developer Soapbox. (2020). How to use Visual Studio Code as your MongoDB IDE',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wM7NJtQ0F6U',
    },
    {
      tema: 'Proyecto web',
      referencia: 'GitLab. (2021). Gestion-empleados.',
      tipo: 'Software',
      link: 'https://gitlab.com/jonathanga/gestion-empleados',
    },
  ],
  glosario: [
    {
      termino: '<em>Async</em>',
      significado:
        'cuando se llama a una función <em>async</em>, se devuelve un elemento de tipo promesa o promise. Cuando la función <em>async</em> devuelve un valor, la promesa resolverá con el valor devuelto. Si la función <em>async</em> genera una excepción o algún valor, la promesa se rechazará con el valor generado.',
    },
    {
      termino: '<em>Await</em>',
      significado:
        'una función async puede contener una expresión <em>await</em>, de hecho es una buena práctica.  Para lo cual pausa la ejecución de la función asíncrona y espera la resolución de la promesa pasada y, a continuación, reanuda la ejecución de la función async y devuelve el valor resuelto.',
    },
    {
      termino: 'CDN',
      significado:
        'Una red de distribución de contenido. Es un tipo de sistema informático en red, el cual consiste en distribuir o repartir parte de la información en diferentes servidores. De esta forma el usuario recibe el contenido de la página del servidor más cercano.',
    },
    {
      termino: '<em>Middleware</em>',
      significado:
        'una <em>middleware</em> en Node.js es un bloque de código completo que se ejecuta entre la petición que hace el usuario (<em>request</em>) hasta que la petición llega al servidor.',
    },
    {
      termino: '<em>Promise</em>',
      significado:
        'el objeto <em>promise</em> (promesa) es usado para computaciones asíncronas. Así que una promesa representa un valor que puede estar disponible ahora o más adelante.',
    },
  ],
  referencias: [
    {
      referencia:
        'Felipe. (2021). Paradigmas de programación: qué son y sus diferentes tipos. Hosting Plus Colombia.',
      link:
        'https://www.hostingplus.com.co/blog/paradigmas-de-programacion-que-son-y-sus-diferentes-tipos',
    },
    {
      referencia:
        'Ghimire, B. (2021). Los 12 mejores editores de código y texto para desarrolladores web. Geekflare. ',
      link: 'https://geekflare.com/es/code-text-editors',
    },
    {
      referencia:
        'Prachi, D. (2022). Costo y características para desarrollar software para startups. Cisin. ',
      link:
        'https://www.cisin.com/coffee-break/es/enterprise/cost-and-features-to-develop-software-for-startups.html',
    },
    {
      referencia:
        'Universia. (2022). Los lenguajes de programación más usados en la actualidad. Universia.',
      link:
        'https://www.universia.net/es/actualidad/empleo/lenguajes-programacion-mas-usados-actualidad-1136443.html',
    },
    {
      referencia: 'Vortexbird. (2017). Nodemon.',
      link: 'https://vortexbird.com/nodemon/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Santiago Muñoz de la Rosa',
        cargo: 'Experto temático',
        centro:
          'Centro de Teleinformática y Producción Industrial - Regional Cauca',
      },
      {
        nombre: 'Gustavo Santis Mancipe',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Luis Eyder Ortiz',
        cargo: 'Experto temático',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Javier Ricardo Luna Pineda',
        cargo: 'Diseñador instruccional',
        centro: 'Centro De La Industria, La Empresa Y Los Servicios',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor Metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología -Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
