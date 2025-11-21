export default {
  global: {
    Name:
      'Gestión de activos de información y análisis de riesgos en seguridad de la información',
    Description:
      'Este componente formativo se centra en la gestión de activos de información y el análisis de riesgos, considerados elementos esenciales para el control de la seguridad en las organizaciones. Mediante la identificación, clasificación y valoración de los activos, se fortalece la comprensión de su relevancia estratégica y de las vulnerabilidades asociadas. Además, se promueve la detección de amenazas y la aplicación de metodologías para la evaluación de riesgos, integrando procedimientos técnicos con marcos de referencia nacionales e internacionales. De este modo, el aprendiz adquiere competencias para implementar controles adecuados, alineados con las necesidades de la organización, y fomenta una cultura de seguridad integral, basada en la reflexión y la aplicación práctica en el contexto productivo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Activos de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipologías de activos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Procedimientos para su registro y valoración',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Seguridad de la información ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Principio de confidencialidad',
            hash: 't_1_1',
          },
          {
            numero: '2.2',
            titulo: 'Principio de integridad',
            hash: 't_1_1',
          },
          {
            numero: '2.3',
            titulo: 'Principio de disponibilidad',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de riesgos de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Criterios de identificación',
            hash: 't_1_1',
          },
          {
            numero: '3.2',
            titulo: 'Análisis de riesgos',
            hash: 't_1_1',
          },
          {
            numero: '3.3',
            titulo: 'Valoración y priorización de riesgos',
            hash: 't_1_1',
          },
        ],
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: 'Activos de información',
      referencia:
        'DNP. (2023). Manual para la identificación de activos de información. DNP.',
      tipo: 'PDF',
      link:
        'https://colaboracion.dnp.gov.co/CDT/DNP/SIG/M-PG-13%20Manual%20para%20la%20identificación%20de%20activos%20de%20información.Pu.pdf',
    },
    {
      tema: 'Activos de información',
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones - MINTIC. (2024). Registro de activos de información.',
      tipo: 'Página web',
      link:
        'https://www.mintic.gov.co/portal/inicio/Atencion-y-Servicio-a-la-Ciudadania/Transparencia/135888:Registro-de-Activos-de-Informacion',
    },
    {
      tema: 'Tipologías de activos',
      referencia:
        'AND. (2020). Guía de gestión y clasificación de activos de información.',
      tipo: 'PDF',
      link:
        'https://and.gov.co/sites/default/files/2022-05/Guia_De_Gestion_y_clasificacion_de_activos_de_informacon.pdf',
    },
    {
      tema: 'Tipologías de activos',
      referencia:
        'DIAN. (2023). Gestión de riesgos de seguridad de la información.',
      tipo: 'PDF',
      link:
        'https://www.dian.gov.co/atencionciudadano/LMDP/Informacion-Innovacion-y-Tecnologia/Seguridad-de-la-Informacion/Cartillas/CT-IIT-0132.pdf',
    },
    {
      tema: 'Gestión de riesgos de la información',
      referencia:
        'Global Quality Corp. (2022). ISO 27001: Gestión de riesgos de seguridad de la información en 3 minuto.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=1i-J3FtJYQg',
    },
    {
      tema: 'Gestión de riesgos de la información',
      referencia:
        'Tapiero, H., & Suárez, H. (2017). Modelo de gestión de riesgos de la seguridad de la información en empresas del sector asegurador utilizando la norma ISO/IEC 27005.',
      tipo: 'PDF',
      link:
        'https://repository.udistrital.edu.co/server/api/core/bitstreams/dd0380aa-2a69-4f7b-a6a5-661a35229468/content',
    },
    {
      tema: 'Gestión de riesgos de la información',
      referencia: 'Duque, G. (2023). Análisis de riesgo.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=GOiH0CBJxmM',
    },
  ],
  glosario: [
    {
      termino: 'Activos de información',
      significado:
        'Elementos que poseen valor para una organización, como datos, software, hardware, personas o servicios. Identificarlos y clasificarlos es fundamental para su protección dentro del sistema de seguridad.',
    },
    {
      termino: 'Análisis de riesgo',
      significado:
        'Es el proceso sistemático de identificar amenazas y vulnerabilidades que pueden afectar los activos de información. Incluye la evaluación de la probabilidad de ocurrencia y el impacto potencial, proporcionando información clave para tomar decisiones sobre medidas de mitigación.',
    },
    {
      termino: 'CIA (Confidencialidad, Integridad, Disponibilidad)',
      significado:
        'Principios fundamentales de la seguridad de la información que aseguran que los datos sean accesibles solo por personas autorizadas, no sean alterados indebidamente y estén disponibles cuando se necesiten.',
    },
    {
      termino: 'Controles de seguridad',
      significado:
        'Son las medidas, técnicas, administrativas y físicas implementadas para proteger los activos de información. Su objetivo es prevenir incidentes, detectar irregularidades y mitigar impactos, asegurando la confidencialidad, integridad y disponibilidad de los datos.',
    },
    {
      termino: 'Gestión de riesgos',
      significado:
        'Conjunto de procesos que permite identificar, analizar, valorar, tratar y monitorear riesgos, con el fin de minimizar su impacto en la seguridad de la información y los objetivos organizacionales.',
    },
    {
      termino: 'Normativa',
      significado:
        'Conjunto de leyes, estándares técnicos y buenas prácticas que orientan a las organizaciones en el diseño, implementación y cumplimiento de políticas de seguridad de la información.',
    },
    {
      termino: 'Prioridad de activos',
      significado:
        'Es la clasificación de los activos de información según su importancia o criticidad para la organización. Permite enfocar los esfuerzos de protección y asignar recursos de manera eficiente, garantizando que los activos más críticos reciban la atención necesaria para su resguardo.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Posibilidad de que una amenaza aproveche una vulnerabilidad para causar daño a los activos de información, afectando la confidencialidad, integridad o disponibilidad de los mismos. Su análisis permite tomar decisiones informadas.',
    },
    {
      termino: 'Seguridad de la información',
      significado:
        'Disciplina que implementa medidas para proteger los datos de una organización, garantizando que se mantengan confidenciales, íntegros y disponibles ante cualquier tipo de amenaza.',
    },
    {
      termino: 'Valoración de riesgo',
      significado:
        'Consiste en asignar un nivel de importancia o gravedad a los riesgos identificados, considerando su probabilidad y el impacto que tendrían sobre los activos. Esta valoración facilita priorizar acciones preventivas o correctivas para minimizar los efectos negativos sobre la organización.',
    },
  ],
  referencias: [
    {
      referencia:
        'AND. (2020a). Guía de gestión y clasificación de activos de información. https://and.gov.co/sites/default/files/2022-05/Guia_De_Gestion_y_clasificacion_de_activos_de_informacon.pdf',
      link: '',
    },
    {
      referencia:
        'AND. (2020b). Guía de gestión y clasificación de activos de información. https://and.gov.co/sites/default/files/2022-05/Guia_De_Gestion_y_clasificacion_de_activos_de_informacon.pdf',
      link: '',
    },
    {
      referencia:
        'Cane, T. (2025). ISO 27001:2022 annex A 5.9 – inventory of information and other associated assets. ISMS.Online. https://www.isms.online/iso-27001/annex-a/5-9-inventory-of-information-other-associated-assets-2022/',
      link: '',
    },
    {
      referencia:
        'Ministerio de hacienda y administraciones públicas. (2012). MAGERIT - versión 3.0. https://es.slideshare.net/slideshow/magerit-v3-libro2catalogo-de-elementosesnipo630121718/128115305',
      link: '',
    },
    {
      referencia:
        'MINTIC. (2025). Registro de Activos de Información. https://mintic.gov.co/portal/inicio/Atencion-y-Servicio-a-la-Ciudadania/Transparencia/135888:Registro-de-Activos-de-Informacion',
      link: '',
    },
    {
      referencia:
        'Mohan, V. (2024). ISO 27001 Annex A.8: Asset management explained. Sprinto. https://sprinto.com/blog/iso-27001-annex-a-8-asset-management/',
      link: '',
    },
    {
      referencia:
        'Novaseguridad. (2021). La seguridad de la información y sus 3 pilares fundamentales. Novasep. https://www.novaseguridad.com.co/seguridad-de-la-informacion-principios/',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Armando Javier López Sierra',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lillibeth Liseth Celis Pardo',
          cargo: 'Desarrolladora <em>full stack</em> Junior',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
