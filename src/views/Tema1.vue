<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Activos de información 

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          p.mb-4 Hoy en día, la información se considera uno de los recursos de mayor valor dentro de una organización, ya que sobre ella se toman decisiones, se diseñan estrategias y se garantiza la continuidad de los procesos. Por esta razón, la información se reconoce como un activo, ya sea tangible o intangible, capaz de generar conocimiento, respaldar procesos y contribuir al logro de los objetivos organizacionales. Dado su valor, requiere un tratamiento especial para evitar alteraciones, pérdidas o usos indebidos que podrían ocasionar daños económicos, legales o reputacionales, afectando gravemente a la empresa.
          .ap.p-4.mb-0
            .row.justify-content-center.align-items-center.mb-0
              p.mb-0 Según la #[b Agencia Nacional Digital (AND) de Colombia,] un activo de información es todo recurso que tiene valor para la organización y que está relacionado con el ciclo de vida de la información, ya sea porque la contiene, la genera, la procesa, la almacena o la gestiona (AND, 2020a).
        .col-lg-4
          img(src='@/assets/curso/tema1/1.png', alt=' ')

      
      p.mb-5 #[b La norma ISO/IEC 27001] amplía esta definición, indicando que un activo de información no se limita únicamente a los datos digitales. También incluye:


      .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-left")
        .col-lg-3.col-md-6.mb-lg-0.mb-md-4.mb-0.pe-lg-0
          .ap9.p-4.h-100
            img.mb-4.img-a.img-t(src='@/assets/curso/tema1/2.svg')
            h4.mb-4.text-center Elementos físicos
            p.mb-0.text-center Infraestructura tecnológica o arquitectónica.
        .col-lg-3.col-md-6.mb-lg-0.mb-md-4.mb-0.pe-lg-0.ps-lg-0
          .ap10.p-4.h-100
            img.mb-4.img-a.img-t(src='@/assets/curso/tema1/3.svg')
            h4.mb-4.text-center Elementos lógicos
            p.mb-0.text-center Bases de datos, software y aplicaciones.
        .col-lg-3.col-md-6.mb-lg-0.mb-md-4.mb-0.pe-lg-0.ps-lg-0
          .ap9.p-4.h-100
            img.mb-4.img-a.img-t(src='@/assets/curso/tema1/4.svg')
            h4.mb-4.text-center Elementos humanos
            p.mb-0.text-center Usuarios y su conocimiento.
        .col-lg-3.col-md-6.mb-lg-0.mb-md-4.mb-0.ps-lg-0
          .ap10.p-4.h-100
            img.mb-4.img-a.img-t(src='@/assets/curso/tema1/5.svg')
            h4.mb-4.text-center Elementos intangibles
            p.mb-0.text-center Reputación, marca o propiedad intelectual.


      .row.justify-content-center.align-items-center.mb-0
        .col-lg-4
          .ap1.p-4.mb-0
            p.mb-0.my-lg-2.mb-lg-3 Dado el valor que cada activo puede representar para la organización, es fundamental #[b identificarlos, clasificarlos y valorarlos] dentro de un sistema de gestión de seguridad de la información. Esto permite aplicar #[b controles que garanticen su confidencialidad, integridad y disponibilidad,] protegiéndolos frente a riesgos.
        .col-lg-3
          img.mb-4.mb-lg-0.img-t(src='@/assets/curso/tema1/6.svg')
        .col-lg-5
          img.mb-2.img-t(src='@/assets/curso/tema1/7.svg')
          p.mb-0 Con el tiempo, las organizaciones comenzaron a considerar la información no solo desde una perspectiva operativa, sino también estratégica. Hoy, elementos como correos electrónicos, políticas internas, manuales de procesos, bases de datos e incluso la experiencia de los trabajadores se han convertido en activos críticos que deben protegerse para asegurar la continuidad del negocio y mantener la confianza de los interesados.


      separador
      #t_1_1.titulo-segundo.mb-5
        h2 1.1 Tipologías de activos

      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4
          img(src='@/assets/curso/tema1/8.png', alt=' ')
        .col-lg-8
          p.mb-4 Los activos de información pueden ser presentados de diferentes formas en una organización, por lo tanto, una buena clasificación ayuda en la gestión y protección de los mismos. Reconocer su tipología permite saber y entender que hay que proteger, cómo se deben controlar, y qué valor estratégico aportan a los procesos; lo que facilita su identificación, protección y gestión adecuada dentro de la empresa. 
          .ap.p-4.mb-0
            .row.justify-content-center.align-items-center.mb-0
              p.mb-0 En la gestión de la seguridad de la información, los activos de información pueden ser clasificados desde diferentes perspectivas, de tal manera que se facilite su administración y protección; por ejemplo según su naturaleza o función.


      p.mb-5 En este caso, se tomará de base la clasificación con la cual trabaja la AND (AND, 2020b), la cual se explica a continuación: 


      .row.justify-content-center.align-items-start.mb-5
          .col-lg-8.mb-lg-0.mb-5
            AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
              .row.align-items-center(titulo="Activos de información")
                .col-lg-12
                  p.mb-0 Es todo dato, documento, registro o conocimiento que posee valor para la organización, ya sea en formato físico o digital. Estos activos incluyen bases de datos, reportes, manuales, correspondencia oficial, entre otros. Algunos tienden a confundirlo con los activos organizacionales, por eso hay que tener en cuenta que su diferencia radica en que este activo se centra en el contenido informativo que respalda decisiones y operaciones, no en la estructura o el sistema que lo gestiona.
              .row.align-items-center(titulo="Activos tecnológicos y/o digitales")
                .col-lg-12
                  p.mb-0 Son todos los dispositivos tecnológicos que soportan el trabajo y la gestión de la información y las demás operaciones de la empresa. Dentro de estas se encuentra el #[em hardware], el #[em software], las redes de comunicación y plataformas digitales como intranet, VPN o servicios FTP, páginas web entre otras.
              .row.align-items-center(titulo="Activos de infraestructura física")
                .col-lg-11
                  p.mb-0 Es toda la parte física de la empresa, desde sus instalaciones mismas, oficinas, hasta redes eléctricas y demás recursos materiales que sirven de soporte físico para que se realicen los procesos que permiten el desarrollo y continuidad del negocio.
              .row.align-items-center(titulo="Activos organizacionales")
                .col-lg-11
                  p.mb-0 Es el conjunto de procesos, metodologías, políticas, procedimientos, y servicios de la empresa, que permiten la ejecución ordenada y eficiente de todas las actividades que se desarrollan dentro de la organización, como la visión, la misión, la normativa y los modelos de gestión, entre otros. A diferencia del activo de información, no se enfoca en los datos o contenidos específicos, sino en el marco institucional y administrativo que orienta el funcionamiento de la organización. 
              .row.align-items-center(titulo="Activos de recursos humanos")
                .col-lg-11
                  p.mb-0 Lo conforman las personas que están vinculadas a la empresa, ya sea de manera temporal o permanente, como los empleados de planta y los contratistas. Representan un activo clave por sus conocimientos, habilidades, experiencias, responsabilidades, cargos y funciones que desempeñan dentro de la empresa, lo cual influye directamente en la continuidad y seguridad de los procesos.  
          .col-lg-4
            img(src='@/assets/curso/tema1/9.png', alt=' ')


      p.mb-5 Para entender mejor cómo se identifican y clasifican los activos de información en diferentes contextos, a continuación se presentan ejemplos aplicados en tres tipos de organizaciones, relacionando los activos relevantes asociados a la gestión de una institución prestadora de salud, una corporación educativa y una finca agropecuaria: 

      

      .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
        .col-lg-12(alt='La tabla presenta ejemplos de distintos tipos de activos en PYMES de sectores de salud, educación y agropecuario, incluyendo información, tecnología, infraestructura, organización y recursos humanos. Cada categoría refleja los recursos críticos que permiten el funcionamiento, la continuidad y la competitividad de la empresa. Esta clasificación facilita la identificación y gestión de los activos estratégicos según su naturaleza y valor para la organización.')
          .titulo-sexto.mb-2
            h5 Tabla 1.
            | #[em Ejemplos de activos en PYMES]
          .row.fondo1.justify-content-center.align-items-center.p-2.mb-0(data-aos="fade-down")
            .col-lg-12.px-lg-5.px-4.mb-0 
              .tabla-a.tab3
                table
                  thead
                    tr
                      th Tipología
                      th IPS ManoSana
                      th Escuela Armando López Sierra
                      th Finca La Costa
                  tbody
                    tr
                      td.left #[b Activos de información]
                      td.left Historias clínicas electrónicas, consentimientos informados digitalizados, reportes epidemiológicos enviados al Ministerio de Salud, nómina de empleados.
                      td.left Bases de datos académicas (calificaciones, matrículas), actas de consejo académico, repositorios de investigación, información de egresados.
                      td.left Registros de vacunación de ganado, certificados de calidad, contratos de venta agrícola, facturación electrónica.
                    tr
                      td.left #[b Activos tecnológicos y/o digitales]
                      td.left HIS #[em (Hospital Information System)], PACS para imágenes diagnósticas, #[em firewalls] médicos, tablets para registro en cama de hospitalización.
                      td.left LMS #[em (Moodle)], sistema académico (SIA), servidores para aulas virtuales, #[em software] antiplagio, sistema de #[em backup] institucional.
                      td.left #[em Software] ERP agropecuario, sensores #[em IoT] de humedad, GPS en tractores, drones para fumigación, sistema de respaldo en la nube.
                    tr
                      td.left #[b Activos de infraestructura física]
                      td.left Centros de datos clínicos, consultorios con red eléctrica redundante, salas de cirugía, cámaras de videovigilancia internas.
                      td.left Centros de datos, laboratorios de física y química, biblioteca física, cableado estructurado de red, sistema contra incendios.
                      td.left Bodegas de almacenamiento de fertilizantes, tanques de agua, corrales certificados, sistemas de riego presurizado, cercas de seguridad perimetral.
                    tr
                      td.left #[b Activos organizacionales]
                      td.left Protocolos de atención en urgencias, plan de continuidad de negocio hospitalario, acuerdos de confidencialidad con proveedores de TI, convenios con EPS.
                      td.left Reglamento estudiantil, plan de calidad educativa, manual de convivencia, política institucional de uso de TIC, convenios con universidades extranjeras.
                      td.left Plan de buenas prácticas agrícolas (BPA), normas de bioseguridad, contratos con proveedores, plan de gestión de residuos agroindustriales.
                    tr
                      td.left #[b Activos de recursos humanos]
                      td.left Médicos especialistas, personal de urgencias, técnicos de laboratorio clínico, personal de seguridad hospitalaria, proveedores externos de esterilización.
                      td.left Docentes de planta y cátedra, personal de biblioteca, coordinadores de sistemas, contratistas de mantenimiento tecnológico.
                      td.left Ingeniero agrónomo, veterinarios, trabajadores de campo, personal administrativo, operadores de maquinaria agrícola.

 
      
      separador
      #t_1_2.titulo-segundo.mb-5
        h2 1.2 Procedimientos para su registro y valoración

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3
          img(src='@/assets/curso/tema1/10.png', alt=' ')
        .col-lg-9
          p.mb-4 El registro y la valoración de activos de información son procedimientos complementarios y fundamentales para la gestión de la seguridad de la información en una organización. El registro permite identificar, documentar y mantener actualizada la información sobre los activos que contienen, procesan o respaldan datos relevantes para la actividad comercial, incluyendo su ubicación, responsables de uso y administración, así como su valor para la organización. A partir de este conocimiento, la valoración busca determinar la importancia o criticidad de cada activo, estableciendo prioridades para su protección y gestión. Esta valoración se basa en el análisis del impacto que podría generar la pérdida, alteración o divulgación no autorizada de la información, considerando los tres principios esenciales de la seguridad: confidencialidad, integridad y disponibilidad.
          .ap2.p-4.mb-0
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-10
                p.mb-0 La ISO/IEC 27001:2022, en el control A.5.9 (Gestión de inventario de la información y otros activos asociados), establece que toda organización debe contar con un inventario actualizado de activos de información, debidamente documentado y vinculado a los procesos de negocio (Cane, 2025).
              .col-lg-2
                img.img-t.img-a(src='@/assets/curso/tema1/11.svg', alt=' ')


      p.mb-5 A continuación, se presentan una serie de pasos para registrar y valorar los activos de información, aunque estos procedimientos pueden realizarse de manera conjunta o separada, según lo determine cada organización:


      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          LineaTiempoD.color-secundario.activo
            .row.justify-content-center.align-items-center.mb-0(numero="<b>1</b>" titulo="<b>Identificación del activo</b>")
              .col-lg-12
                p.mb-0 Asignar un nombre claro y único al activo de información. Ubicarlo dentro de una categoría general o tipología.
            .row.justify-content-center.align-items-center.mb-0(numero="<b>2</b>" titulo="<b>Descripción del activo</b>")
              .col-lg-12
                p.mb-0 Incluir una breve explicación que permita comprender de qué se trata y cuál es su función dentro de la empresa.
            .row.justify-content-center.align-items-center.mb-0(numero="<b>3</b>" titulo="<b>Asignación de responsable</b>")
              .col-lg-12
                p.mb-0 Definir la persona, área o dependencia responsable del activo. Registrar también un custodio que administre operativamente. Esto asegura trazabilidad y claridad de responsabilidades.
            .row.justify-content-center.align-items-center.mb-0(numero="<b>4</b>" titulo="<b>Ubicación del activo</b>")
              .col-lg-12
                p.mb-0 Especificar la localización física (ejemplo: sala de servidores, archivo central) o lógica (ejemplo: nube, repositorio digital).
            .row.justify-content-center.align-items-center.mb-0(numero="<b>5</b>" titulo="<b>Usuarios asociados</b>")
              .col-lg-12
                p.mb-0 Identificar quiénes hacen uso del activo (roles, áreas o perfiles). Ejemplo: área contable y área de auditoría interna.
            .row.justify-content-center.align-items-center.mb-0(numero="<b>6</b>" titulo="<b>Relaciones con otros activos</b>")
              .col-lg-12
                p.mb-0 Documentar dependencias o vínculos con otros activos. Ejemplo: el sistema de facturación depende del servidor de base de datos.
            .row.justify-content-center.align-items-center.mb-0(numero="<b>7</b>" titulo="<b>Registro en formato oficial</b>")
              .col-lg-12
                p.mb-0 Consolidar toda la información en una plantilla estandarizada. Se puede usar como referencia el formato del MINTIC (2025), ajustándolo según las necesidades de la organización.
            .row.justify-content-center.align-items-center.mb-0(numero="<b>8</b>" titulo="<b>Campos para el registro</b>")
              .col-lg-12
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-shield
                    p.mb-3 #[b Código o identificador único:] diferencia cada activo, evita duplicidad y pérdida de trazabilidad.
                  li.d-flex.mb-2
                    i.fas.fa-shield
                    p.mb-3 #[b Nombre del activo:] referencia rápida para entender de qué se trata.
                  li.d-flex.mb-2
                    i.fas.fa-shield
                    p.mb-3 #[b Descripción breve:] aclara alcance y uso del activo.
                  li.d-flex.mb-2
                    i.fas.fa-shield
                    p.mb-3 #[b Tipo de activo:] clasificación básica (información, software, hardware, servicios).
                  li.d-flex.mb-2
                    i.fas.fa-shield
                    p.mb-3 #[b Ubicación:] física o lógica, clave para recuperación y auditorías.
                  li.d-flex.mb-2
                    i.fas.fa-shield
                    p.mb-3 #[b Propietario del activo:] persona o área responsable de uso, custodia y actualización.
                  li.d-flex.mb-2
                    i.fas.fa-shield
                    p.mb-3 #[b Área usuaria / dependencias:] quién hace uso del activo y su impacto organizacional.
                  li.d-flex.mb-2
                    i.fas.fa-shield
                    p.mb-3 #[b Fecha de registro o última actualización:] mantiene el inventario vigente y evita obsolescencia.
        .col-lg-4
          img.d-none.d-lg-block(src='@/assets/curso/tema1/12.png', alt='', data-aos="fade-right")



      .row.justify-content-center.align-items-center.mb-5
        .col-lg-1
          img(src='@/assets/curso/tema1/13.svg', alt=' ')
        .col-lg-11
          p.mb-4 Dado que pueden presentarse confusiones al momento de clasificar los activos dentro de determinadas tipologías o categorías, ya que estas pueden variar según la referencia utilizada, en la siguiente tabla se presenta una equivalencia que sirve como guía. De esta manera, se ofrecen bases para ubicar los activos de manera adecuada o, en su defecto, realizar los ajustes necesarios cuando se trabaje con tipologías que presenten diferencias:


      .row.fondo1.justify-content-center.align-items-center.p-2.mb-5
        .col-lg-12.px-lg-5.px-4.mb-0 
          .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
            .col-lg-12
              .titulo-sexto.mb-2(alt='Tabla con ocho pasos para el trazo del rectángulo base del patrón infantil, que incluye fórmulas o medidas, descripción del trazado y la función correspondiente en la construcción del patrón básico superior.')
                h5 Tabla 2.
                | #[em Equivalencia de tipologías de activos de información]
              .tabla-a.tab5
                table
                  thead
                    tr
                      th AND (Agencia Nacional Digital de Colombia)
                      th MINTIC (Ministerio de Tecnologías de la Información y las Comunicaciones)
                      th ISO/IEC 27001 
                        span.fw-normal (Mohan, 2024)
                      th MAGERIT v3 
                        span.fw-normal (MINHAP, 2012)
                  tbody
                    tr
                      td.left Activos de información
                      td.left Información.
                      td.left Información.
                      td.left Información o datos, soportes de información.
                    tr
                      td.left Activos tecnológicos y/o digitales.
                      td.left #[em Software, hardware.]
                      td.left #[em Software, hardware, servicios.]
                      td.left #[em Software,] aplicaciones, equipos informáticos, redes de comunicación.
                    tr
                      td.left Activos de infraestructura física.
                      td.left Equipamiento auxiliar, soporte.
                      td.left Oficinas.
                      td.left Equipamiento auxiliar, instalaciones.
                    tr
                      td.left Activos organizacionales.
                      td.left Procesos.
                      td.left Activos intangibles.
                      td.left Servicios.
                    tr
                      td.left Activos de recursos humanos.
                      td.left Recurso humano, otros.
                      td.left Personas.
                      td.left Personal.



      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-5
          img.mb-0(src='@/assets/curso/tema1/14.png', alt=' ')
        .col-lg-7
          p.mb-3 Después de tener el registro, se realiza una valoración de los activos de información, determinando qué tan importante son y qué impacto tendría para la empresa el perderlos, dañarlos o que sean revisados por personas no autorizadas. Con la valoración también se busca responder preguntas como las siguientes:
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7
              ul.lista-ul.mb-0
                li.d-flex.mb-1
                  i.fas.fa-shield
                  p.mb-2 ¿Qué tan valioso es el activo para la empresa?
                li.d-flex.mb-1
                  i.fas.fa-shield
                  p.mb-2 ¿Qué tan vulnerable es el activo?
                li.d-flex.mb-0
                  i.fas.fa-shield
                  p.mb-0 ¿Qué nivel de protección necesita?
            .col-lg-5 
              img(src='@/assets/curso/tema1/15.png', alt=' ')
             


      p.mb-5 A continuación, los factores de análisis en la valoración de activos de información:




      .row.justify-content-center.mb-5(data-aos="fade-down")
        .col-md-6.col-lg-4.col-12.mb-4
          .tarjeta-avatar
            img.width(src='@/assets/curso/tema1/16.svg' alt='')
            .tarjeta.ap3
              .p-4.my-4
                h4.mb-3.text-center Confidencialidad
                p.mb-0.text-center Evalúa qué tan grave sería que la información del activo se haga pública o caiga en manos equivocadas. Ejemplo: datos financieros, historias clínicas.
      
        .col-md-6.col-lg-4.col-12.mb-4
          .tarjeta-avatar
            img.width(src='@/assets/curso/tema1/17.svg' alt='')
            .tarjeta.ap3
              .p-4.my-4
                h4.mb-3.text-center Integridad
                p.mb-0.text-center Determina el impacto si la información se altera, se manipula o pierde precisión. Ejemplo: un informe de inventario puede causar pérdidas económicas.
  
        .col-md-6.col-lg-4.col-12.mb-4
          .tarjeta-avatar
            img.width(src='@/assets/curso/tema1/18.svg' alt='')
            .tarjeta.ap3
              .p-4.my-4
                h4.mb-3.text-center Disponibilidad
                p.mb-0.text-center Analiza qué tan crítico es que el activo esté siempre disponible cuando se necesita. Ejemplo: un sistema de pagos de una tienda en línea debe funcionar 24 / 7 todo el año.


      p.mb-5 Las empresas pueden usar escalas simples para que el proceso de valoración sea más sencillo, tales como:



      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-12
          .tarjeta--container.row.mb-5
            .col-lg-4.col-md-6.tarjeta.color-primario.tar1.p-lg-5.p-4.mb-lg-0.mb-4.mb-md-4
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img.mb-3.img-t(src='@/assets/curso/tema1/19.svg', alt='Texto que describa la imagen')          
              h2.text-center.mb-4 Alta (3 puntos)
              p.mb-4 La pérdida o daño podría causar un impacto crítico en la organización. 
              p.mb-0 Ejemplo: caída de un sistema financiero.
            .col-lg-4.col-md-6.tarjeta.color-acento-botones.tar2.p-lg-5.p-4.mb-lg-0.mb-4.mb-md-4
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img.mb-2.img-t(src='@/assets/curso/tema1/20.svg', alt='Texto que describa la imagen')          
              h2.text-center.mb-4 Media (2 puntos)
              p.mb-4 La pérdida o daño podría afectar las operaciones, pero se puede afrontar con alternativas de recuperación. 
              p.mb-0 Ejemplo: base de datos de proveedores.
            .col-lg-4.col-md-6.offset-md-3.offset-lg-0.tarjeta.color-acento-contenido.tar3.p-lg-5.p-4
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img.mb-0.img-t(src='@/assets/curso/tema1/21.svg', alt='Texto que describa la imagen')          
              h2.text-center.mb-4 Baja (1 punto)
              p.mb-4 La pérdida o daño no afecta significativamente a la empresa. 
              p.mb-0 Ejemplo: documentos de referencia pública.



      .row.justify-content-center.mb-5(data-aos="fade-down")
        .col-lg-4
          img(src='@/assets/curso/tema1/22.png', alt=' ')
        .col-lg-8
          p.mb-0 De esta forma, es posible sumar o promediar los valores obtenidos para priorizar los activos más sensibles o aquellos que podrían verse más impactados, generando mayores consecuencias para la empresa. Asimismo, es importante considerar que se pueden incluir otros parámetros de valoración y que las escalas pueden variar, ya sea aplicando un enfoque cuantitativo o cualitativo. No obstante, este aspecto se abordará con mayor detalle en el apartado correspondiente a la gestión de riesgos de la información. 


      
      p.mb-5 A continuación, se presenta un ejemplo de registro de activos basado en la IPS ManoSana, utilizada anteriormente para ilustrar otros temas tratados en esta sección:



      .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
        .col-lg-12(alt='La tabla presenta un registro detallado de los activos de información de la IPS ManoSana, incluyendo su tipología, descripción, responsable y ubicación. Este inventario permite gestionar de manera organizada la seguridad y disponibilidad de la información y los recursos críticos. Así, la institución puede garantizar la continuidad de sus procesos y proteger sus activos estratégicos.')
          .titulo-sexto.mb-4
            h5 Tabla 3.
            | #[em Registro de activos de información de la IPS ManoSana]
          .row.fondo1.justify-content-center.align-items-center.p-2.mb-5(data-aos="fade-down")
            .col-lg-12.px-lg-5.px-4.mb-0 
              .tabla-a.tab5
                table
                  thead
                    tr
                      th ID
                      th Activo
                      th Tipología 
                      th Descripción breve 
                      th Propietario o Responsable
                      th Ubicación 
                      th Fecha / actualización 
                  tbody
                    tr
                      td.left A - 001.
                      td.left Historias clínicas electrónicas.
                      td.left Información.
                      td.left Base de datos con información sensible de pacientes.
                      td.left Coordinador de historia clínica.
                      td.left Servidor principal - Sede central.
                      td.left 31/08/2025.
                    tr
                      td.left A - 002.
                      td.left #[em Software] de gestión hospitalaria (HOSPI-SOFT).
                      td.left Tecnológicos y/o digitales.
                      td.left Sistema para citas, facturación y control de pacientes.
                      td.left Área de sistemas.
                      td.left Nube privada contratada (AWS).
                      td.left 31/08/2025.
                    tr
                      td.left A - 003.
                      td.left Servidores y equipos de red.
                      td.left Tecnológicos y/o digitales.
                      td.left Equipos que soportan el sistema de información y la red interna.
                      td.left Jefe de tecnología.
                      td.left Sala de servidores - sede principal.
                      td.left 31/08/2025.
                    tr
                      td.left A - 004.
                      td.left Planta eléctrica de respaldo.
                      td.left Infraestructura física.
                      td.left Provee energía en caso de fallas eléctricas.
                      td.left Área de mantenimiento.
                      td.left Patio posterior - sede principal.
                      td.left 31/08/2025.
                    tr
                      td.left A - 005.
                      td.left Infraestructura de red física (cableado, #[em switches]).
                      td.left Infraestructura física.
                      td.left Conectividad de datos en todas las áreas de la IPS.
                      td.left Área de sistemas.
                      td.left Toda la sede.
                      td.left 31/08/2025.
                    tr
                      td.left A - 006.
                      td.left Manuales de procedimientos clínicos.
                      td.left Organizacionales.
                      td.left Documentación de protocolos médicos y administrativos.
                      td.left Comité de calidad.
                      td.left Oficina de Calidad.
                      td.left 31/08/2025.
                    tr
                      td.left A - 007.
                      td.left Políticas de seguridad de la información.
                      td.left Organizacionales.
                      td.left Normas internas para el manejo seguro de la información.
                      td.left Comité de seguridad informática.
                      td.left Intranet corporativa.
                      td.left 31/08/2025.
                    tr
                      td.left A - 008.
                      td.left Médicos especialistas.
                      td.left Recursos humanos.
                      td.left Profesionales de la salud encargados de atención directa a pacientes.
                      td.left Coordinador médico.
                      td.left Consultorios.
                      td.left 31/08/2025.
                    tr
                      td.left A - 009.
                      td.left Personal administrativo.
                      td.left Recursos humanos.
                      td.left Personal encargado de procesos de facturación, contabilidad y archivo.
                      td.left Jefe administrativo.
                      td.left Oficinas administrativas.
                      td.left 31/08/2025.
                    tr
                      td.left A - 010.
                      td.left Equipo de soporte técnico.
                      td.left Recursos humanos.
                      td.left Encargados de mantenimiento y soporte a usuarios.
                      td.left Jefe de tecnología.
                      td.left Área de Sistemas.
                      td.left 31/08/2025.}

                      












  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
