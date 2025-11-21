<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión de riesgos de la información

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-4 La gestión de riesgos de la información es un proceso sistemático mediante el cual la organización identifica, analiza, valora y controla los riesgos que pueden afectar sus activos de información. Su objetivo principal es proteger los activos de manera proporcional a su importancia y vulnerabilidad, ya que no es factible aplicar medidas a todos los activos de igual forma. Este enfoque permite priorizar los recursos, asegurar la continuidad operativa, garantizar la confiabilidad de la información y mantener la alineación con los objetivos estratégicos y la normativa vigente.
        p.mb-4 Gracias a este proceso, la organización puede:
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .lista-ol--cuadro__vineta
              span 1
            | Identificar  amenazas y vulnerabilidades que puedan comprometer la confidencialidad, integridad y disponibilidad de los activos.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 2
            | Evaluar el impacto potencial de incidentes sobre los procesos, recursos y reputación de la organización.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 3
            | Definir controles y medidas de mitigación que reduzcan la probabilidad de ocurrencia o el efecto de los riesgos.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 4
            | Optimizar la inversión en seguridad, priorizando los riesgos más críticos.
      .col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/tema3/6.png")
 
   
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-4.p-md-4.p-lg-5.mb-0(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/7.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 La gestión de riesgos de la información requiere priorizar los activos a proteger, debido a los costos, recursos y esfuerzos logísticos que implica su implementación. Por esta razón, muchas organizaciones se concentran primero en los activos más críticos. Además, a medida que la empresa es más grande y estructurada, cuenta con mayores capacidades para establecer un sistema integral de gestión de la información.
 
 
    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1 Criterios de identificación
 
   
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        img(src="@/assets/curso/tema3/8.svg")
      .col-lg-10
        p.mb-0 La identificación de riesgos de la información es un procedimiento importante dentro de la gestión de la seguridad, al permitir reconocer o identificar las amenazas, vulnerabilidades y posibles impactos que puedan afectar o estén afectando los activos de la información en una organización. Por ejemplo, volviendo a una de las empresas con la que se ha venido trabajando para explicar mejor, se puede decir que la IPS ManoSana adquiere especial relevancia ya que maneja información sensible, relacionada con la salud de sus pacientes, lo cual exige criterios claros y aplicables para que se garanticen la confidencialidad, integridad y disponibilidad de los datos.
   
    p.mb-5 A continuación, se presenta una tabla que enseña más a profundidad como se pueden trabajar los principales criterios de identificación de riesgos, describiendo cada uno de ellos y fortaleciendo el tema con un ejemplo mediante situaciones simuladas adaptadas a la realidad de la empresa.
 
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12(alt='La tabla presenta los principales criterios para la identificación de riesgos de información, incluyendo su descripción y ejemplos prácticos en la IPS ManoSana. Cada criterio guía la evaluación de activos, amenazas, vulnerabilidades y el impacto potencial, permitiendo priorizar acciones de mitigación. Este enfoque sistemático asegura la protección de los activos críticos y la continuidad de los procesos organizacionales.')
        .titulo-sexto.mb-4
          h5 Tabla 7.  
          | #[em Lista de criterios de identificación con descripción y ejemplos]
 
        .tabla-a.tab1.mb-0
          table
            thead
              tr
                th Criterio
                th Descripción
                th Ejemplos en IPS ManoSana
            tbody
              tr
                td.tl #[b Establecimiento del contexto]
                td.tl Historias clínicas electrónicas, consentimientos informados digitalizados, reportes epidemiológicos enviados al Ministerio de Salud, nómina de empleados.
                td.tl La IPS define que el análisis de riesgos abarcará historias clínicas electrónicas, sistemas de citas y base de datos de pacientes, asignando la responsabilidad al área de TI y dirección médica.
             
              tr
                td.tl #[b Identificación de activos]
                td.tl Registrar todos los activos de información que la organización considera valiosos y críticos.
                td.tl Se elabora un inventario con historias clínicas electrónicas, software de gestión hospitalaria, servidores, personal médico y contratos con aseguradoras.
             
              tr
                td.tl #[b Identificación de amenazas]
                td.tl Reconocer eventos o acciones (naturales, técnicas o humanas) que puedan afectar los activos.
                td.tl Se identifican amenazas como ciberataques (ransomware), incendios en sala de servidores o errores humanos en actualización de datos de pacientes.
             
              tr
                td.tl #[b Identificación de vulnerabilidades]
                td.tl Detectar debilidades o faltas de control que los activos puedan tener frente a las amenazas.
                td.tl Se evalúa la falta de doble autenticación en acceso a historias clínicas y la ausencia de copias de respaldo semanales como vulnerabilidades críticas.
             
              tr
                td.tl #[b Evaluación de probabilidad e impacto]
                td.tl Evaluar la probabilidad de que las amenazas se materialicen y el impacto que generarán.
                td.tl Se estima la probabilidad media de phishing al personal administrativo y un impacto alto si ocurre, ya que comprometería datos sensibles de pacientes y la operación clínica.
 
 
    separador
    #t_3_2.titulo-segundo.mb-5
      h2 3.2 Análisis  de riesgos
 
   
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .ap8.mb-lg-5.mb-4
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5
              img(src="@/assets/curso/tema3/9.svg")
            .col-lg-7.p-4
              p.mb-0 El análisis de riesgos constituye la fase en la que se estudian con detalle las amenazas y vulnerabilidades identificadas previamente, con el fin de determinar su nivel de impacto y la probabilidad de ocurrencia. En una IPS como ManoSana. Este proceso permite priorizar los riesgos que afectan directamente la confidencialidad, integridad y disponibilidad de la información clínica de los pacientes, así como los procesos administrativos y financieros.
        p.mb-0 Para realizar el análisis, se deben considerar tres elementos importantes:
      
      .col-lg-3
        img(src="@/assets/curso/tema3/10.png")
  
 
    .row.justify-content-center.align-items-stretch.mb-5
      .col-md-6.col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/11.svg' alt='')
          .tarjeta.ap3
            .p-4.my-4
              h4.mb-4.text-center Probabilidad
              p.mb-0.text-center Medir la posibilidad de que un riesgo ocurra (alta, media o baja).
      .col-md-6.col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/12.svg' alt='')
          .tarjeta.ap3
            .p-4.my-4
              h4.mb-4.text-center Impacto
              p.mb-0.text-center Valorar el efecto que tendría ese riesgo en la organización (operativo, legal, económico, reputacional).
      .col-md-6.col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/13.svg' alt='')
          .tarjeta.ap3
            .p-4.my-4
              h4.mb-4.text-center Nivel de riesgo
              p.mb-0.text-center Combinación de probabilidad e impacto que define si el riesgo es aceptable, tolerable o requiere un tratamiento urgente.
 
 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img(src='@/assets/curso/tema3/14.png' alt='')
      .col-lg-8
        p.mb-4 En la IPS ManoSana, por ejemplo, un ataque de #[em ransomware] tendría una probabilidad media pero un impacto alto, ya que comprometería la disponibilidad de las historias clínicas y afectaría la atención a los pacientes. En cambio, la pérdida de un equipo obsoleto en bodega tendría una probabilidad alta pero un impacto bajo, siendo un riesgo de menor prioridad.
        .ap6.p-4
          p.mb-lg-2.my-lg-2.mx-lg-3 El análisis de riesgos se apoya en metodologías como ISO/IEC 27005 y en herramientas de matrices de impacto-probabilidad que facilitan la clasificación objetiva de los riesgos. Con base en este análisis, la IPS puede establecer estrategias de mitigación, transferencia o aceptación, optimizando los recursos disponibles y enfocándose en los riesgos más críticos.
 
 
    p.mb-4 Las estrategias  que se pueden establecer son:
 
 
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .row.justify-content-center.align-items-end
          .col-lg-9(data-aos="fade-right").ps-lg-0
            .crd.crd--avatarHorizontal.crd--first.py-3
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/tema3/15.svg", alt="alt")
                .col
                  h4.mb-3 Mitigación
                  p.mb-3 Consiste en implementar controles o medidas preventivas para reducir la probabilidad de ocurrencia o el impacto de un riesgo.
                  P.mb-0 #[b Ejemplo:] instalar un sistema de respaldo de datos para evitar pérdida de información.
            .crd.crd--avatarHorizontal.py-3
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/tema3/16.svg", alt="alt")
                .col
                  h4.mb-3 Transferencia
                  p.mb-3 Implica trasladar el riesgo a un tercero, generalmente mediante seguros, contratos o servicios externos especializados.
                  P.mb-0 #[b Ejemplo:] contratar un servicio en la nube con cláusulas de seguridad y respaldo.
            .crd.crd--avatarHorizontal.crd--last.py-3
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/tema3/17.svg", alt="alt")
                .col
                  h4.mb-3 Aceptación
                  p.mb-3 Se da cuando la organización reconoce el riesgo, pero decide no actuar porque su impacto es bajo o el costo de mitigarlo es mayor que el posible daño. 
                  P.mb-0 #[b Ejemplo:] aceptar fallos menores en un sistema no crítico.
          .col-lg-4.sob1.d-none.d-lg-block(data-aos="fade-left")
            img.img-t.mb-4(src="@/assets/curso/tema3/18.svg", alt="alt")






    separador
    #t_3_3.titulo-segundo.mb-5
      h2 3.3 Valoración y priorización de riesgos 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-4 Una vez identificados y clasificados los activos de información, es necesario asignarles un valor que permita establecer su nivel de importancia dentro de la organización. El proceso de valoración se realiza en pro de analizar el impacto que tendría la pérdida, alteración o indisponibilidad de los activos, lo que a su vez, afectaría la continuidad de las operaciones de la empresa, la reputación de su imagen y marca, y el cumplimiento de los objetivos estratégicos.
        .ap6.p-4
          p.mb-0 Es por ello, que se recomienda el empleo de una escala que combine aspectos valores cualitativos y cuantitativos, con el fin de brindar flexibilidad y se adapte a las características de cada empresa; de esta forma, se pueden asignar puntajes o categorías que definan la prioridad de un activo (alto, medio, bajo), tomando en cuenta parámetros como:
      .col-lg-4
        img(src='@/assets/curso/tema3/1.png', alt='')
 
 
    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-3.col-md-6.col-12.mb-lg-0.mb-4
        .h-100.ap4.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-5.mb-4.my-4
              img.ima1(src='@/assets/curso/tema3/2.svg' alt='AvatarTop')
            h4.text-center.mb-4 Confidencialidad
            p.mb-2.text-center Grado de sensibilidad de la información y las consecuencias de una divulgación sin autorización.
      .col-lg-3.col-md-6.col-12.mb-lg-0.mb-4
        .h-100.ap4.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-5.mb-4.my-4
              img.ima2(src='@/assets/curso/tema3/20.svg' alt='AvatarTop')
            h4.text-center.mb-4 Integridad
            p.mb-2.text-center Importancia de mantener la exactitud y confiabilidad del activo.
      .col-lg-3.col-md-6.col-12.mb-lg-0.mb-4
        .h-100.ap4.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-5.mb-4.my-4
              img.ima3(src='@/assets/curso/tema3/24.svg' alt='AvatarTop')
            h4.text-center.mb-4 Disponibilidad
            p.mb-2.text-center Necesidad de acceso oportuno para la operación normal de la empresa.
      .col-lg-3.col-md-6.col-12.mb-lg-0.mb-4
        .h-100.ap4.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-5.mb-4.my-4
              img.ima4(src='@/assets/curso/tema3/22.svg' alt='AvatarTop')
            h4.text-center.mb-4 Impacto en el negocio
            p.mb-2.text-center Relación directa con procesos críticos, normativos o de servicio al cliente.




    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img(src='@/assets/curso/tema3/26.png', alt='')
      .col-lg-8
        p.mb-0 Teniendo en cuenta todos estos criterios, se puede llevar a cabo un ejercicio de priorización que ayude a valorar y ordenar los activos según su criticidad. El proceso de priorización podría variar en si se decide sumar o promediar los valores asignados a cada uno de los parámetros, aunque también se pueden desarrollar otro tipo de procedimientos, como por ejemplo, ponderaciones diferenciadas si un criterio es más importante que otro en la organización. También hay que considerar posibles variaciones en las escalas de valoración, lo que significa que cada empresa tendrá la autonomía de ajustar su modelo de medición, de acuerdo con el contexto en que se desenvuelve, ya sea implementando un enfoque más cuantitativo (midiendo en cifras) o cualitativo (valoración descriptiva).
 
   
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .cajon-b.color-primario.p-4.mb-0
          p.mb-0 De esta manera, y con el fin de evitar confusiones al clasificar los activos en las diferentes tipologías o categorías, es bueno tener una tabla de equivalencias que orienten la ubicación correcta de cada uno. Estas tablas de equivalencia podrían funcionar como guías de referencia que permiten mantener coherencia en la valoración y evitar discrepancias cuando se trabaja con marcos conceptuales o normativos diferentes.
        p.mb-0 A continuación, se comparten unos pasos para construir una tabla de equivalencia:
      .col-lg-3
        img(src='@/assets/curso/tema3/27.svg', alt='')
 
 
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-3
        img.d-none.d-lg-block(src='@/assets/curso/tema3/28.png', alt='Imagen decorativa')  
      .col-lg-9
        SlyderF(columnas="col-lg-4 col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b2.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4
              .col-8.mb-4
                img.img-a.img-t(src='@/assets/curso/tema3/29.svg' alt='AvatarTop')
              .ap11.p-1.mb-4
                h4.text-center.mb-0.ps-1.pe-1 1. Elegir una escala canónica
              p.mb-0.text-center Se puede utilizar una escala del 1 al 5, donde 1 = muy bajo y 5 = muy alto.
          .tarjeta.tarjeta--slyder.b2.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4
              .col-8.mb-4
                img.img-a.img-t(src='@/assets/curso/tema3/30.svg' alt='AvatarTop')
              .ap11.p-1.mb-4
                h4.text-center.mb-0.ps-1.pe-1 2. Definir los criterios y su puntuación
              p.mb-0.text-center Ejemplo: Confidencialidad (C), Integridad (I) y Disponibilidad (D), cada uno calificado de 1 a 5.
          .tarjeta.tarjeta--slyder.b2.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4
              .col-8.mb-4
                img.img-a.img-t(src='@/assets/curso/tema3/31.svg' alt='AvatarTop')
              .ap11.p-1.mb-4
                h4.text-center.mb-0.ps-1.pe-1 3. Normalizar los métodos
              ul.lista-ul
                li.d-flex.mb-4
                  i.fas.fa-circle
                  p.mb-0 Suma (C + I + D): valores entre 3 y 15 → convertir a escala 1 - 5 dividiendo entre 3. Fórmula: Equivalencia = (C + I + D) / 3.
                li.d-flex.mb-0
                  i.fas.fa-circle
                  p.mb-0 Promedio (C + I + D) / 3: ya estará en escala 1 - 5.
          .tarjeta.tarjeta--slyder.b2.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4
              .col-8.mb-4
                img.img-a.img-t(src='@/assets/curso/tema3/32.svg' alt='AvatarTop')
              .ap11.p-1.mb-4
                h4.text-center.mb-0.ps-1.pe-1 4. Definir umbrales canónicos para etiquetas cualitativas
              ul.lista-ul.mb-4
                li.d-flex.mb-0
                  i.fas.fa-circle
                  p.mb-0 Alta: ≥ 4.33
                li.d-flex.mb-0
                  i.fas.fa-circle
                  p.mb-0 Media: 3.00 - 4.32
                li.d-flex.mb-0
                  i.fas.fa-circle
                  p.mb-0 Baja: ≤ 2.99
              p.mb-0 Ejemplo: suma 13 - 15 → Alta, porque 13/3 = 4.33.
          .tarjeta.tarjeta--slyder.b2.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-0
              .col-8.mb-4
                img.img-a.img-t(src='@/assets/curso/tema3/33.svg' alt='AvatarTop')
              .ap11.p-1.mb-4
                h4.text-center.mb-0.ps-1.pe-1 5. Registrar la equivalencia en una tabla
              p.mb-0 Se documenta la forma en que se pasa de un rango de suma a un rango en promedio y a su respectiva categoría cualitativa, asegurando así coherencia en la valoración, de tal manera que cualquier empresa pueda ajustarse fácilmente.
 
   
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10
        .bloque-texto-g.color-primario.p-4.p-lg-5.p-md-4(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/34.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
            p El uso de tablas de equivalencia o procesos de normalización es necesario cuando la organización trabaja con varios marcos o estándares (ISO 27001, NIST, COBIT, entre otros), ya que cada uno maneja escalas distintas de valoración. En cambio, si se adopta un único marco de referencia, no se requieren conversiones, pues ya existirá un lenguaje común y una escala definida en las políticas y procedimientos de la empresa.
 


    .row.fondo6.justify-content-center.align-items-center.p-2.mb-5(data-aos="fade-right")
      .col-lg-12.px-lg-5.px-4.mb-0
 
        p.mb-4.mt-5 Por medio de los ejemplos se ilustrará mejor el proceso de valoración de los activos, aplicando la simulación en las empresas con las que se ha venido trabajando:
 
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8(alt='La tabla muestra la valoración de activos de información en la IPS ManoSana, evaluando confidencialidad (C), integridad (I) y disponibilidad (D). Cada activo recibe una puntuación que permite calcular la suma y determinar su valoración global como alta, media o baja. Este análisis facilita priorizar la protección de los activos más críticos para garantizar la seguridad y continuidad de los procesos.')
            .titulo-sexto.color-secundario.mb-4
              h5 Tabla 8.
              | #[em Valoración de activos en IPS ManoSana]
 
            .tabla-a.tab8
              table
                thead
                  tr
                    th Activo de información
                    th C
                    th I
                    th D
                    th Suma
                    th Valoración global
                tbody.apw
                  tr
                    td.left Historia clínica digital (HCE).
                    td 5.
                    td 5.
                    td 4.
                    td 14.
                    td Alta.
                  tr
                    td.left Servidor de BD clínicos.
                    td 5.
                    td 4.
                    td 5.
                    td 14.
                    td Alta.
                  tr
                    td.left PACS (imágenes diagnósticas).
                    td 4.
                    td 5.
                    td 4.
                    td 13.
                    td Alta.
                  tr
                    td.left Sistema de citas y admisiones.
                    td 3.
                    td 3.
                    td 4.
                    td 10.
                    td Media.
                  tr
                    td.left Nómina y RR. HH. de la IPS.
                    td 4.
                    td 3.
                    td 3.
                    td 10.
                    td Media.
                  tr
                    td.left Manual de inducción para personal nuevo.
                    td 2.
                    td 2.
                    td 2.
                    td 6.
                    td Baja.
 
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-8(alt='La tabla presenta la valoración de activos de información en la Escuela Armando López Sierra, considerando confidencialidad (C), integridad (I) y disponibilidad (D). Cada activo recibe una puntuación que permite calcular la suma y asignar su valoración global como alta, media o baja. Este análisis ayuda a priorizar la protección de los activos más relevantes para garantizar la continuidad y seguridad de la información institucional.')
        .titulo-sexto.color-secundario.mb-4
          h5 Tabla 9.
          | #[em Valoración de activos en Escuela Armando López Sierra]
 
        .tabla-a.tab8
          table
            thead
              tr
                th.left Activo de información
                th C
                th I
                th D
                th Suma
                th Valoración global
            tbody.apw
              tr
                td.left Base de datos de estudiantes.
                td 5.
                td 4.
                td 4.
                td 13.
                td Alta.
              tr
                td.left Sistema académico (notas y matrículas).
                td 4.
                td 5.
                td 4.
                td 13.
                td Alta.
              tr
                td.left Plataforma LMS (aulas virtuales).
                td 3.
                td 3.
                td 5.
                td 11.
                td Media.
              tr
                td.left Registros financieros institucionales.
                td 4.
                td 4.
                td 3.
                td 11.
                td Media.
              tr
                td.left Biblioteca digital y licencias.
                td 2.
                td 3.
                td 4.
                td 9.
                td Media.
              tr
                td.left Inventario de mobiliario escolar.
                td 1.
                td 2.
                td 2.
                td 5.
                td Baja.
              tr
                td.left Carteleras informativas físicas.
                td 1.
                td 2.
                td 2.
                td 9.
                td Baja.
 
 
    .row.fondo7.justify-content-center.align-items-center.p-2.mb-5(data-aos="fade-right")
      .col-lg-12.px-lg-5.px-4.mb-0
        
        .row.justify-content-center.align-items-center.mb-5.mt-5
          .col-lg-8(alt='La tabla muestra la valoración de activos de información en Finca La Costa, evaluando confidencialidad (C), integridad (I) y disponibilidad (D). Cada activo recibe una puntuación que permite calcular la suma y determinar su valoración global como alta, media o baja. Este análisis facilita priorizar la protección de los recursos más críticos para garantizar la operación y seguridad de la información agrícola y administrativa.')
            .titulo-sexto.color-secundario.mb-4
              h5 Tabla 10.
              | #[em Valoración de activos en Finca La Costa]
 
            .tabla-a.tab8
              table
                thead
                  tr
                    th Activo de información
                    th C
                    th I
                    th D
                    th Suma
                    th Valoración global
                tbody.apw
                  tr
                    td.left Información financiera y contable.
                    td 5.
                    td 4.
                    td 4.
                    td 13.
                    td Alta.
                  tr
                    td.left Registro sanitario/vacunación del hato.
                    td 3.
                    td 4.
                    td 4.
                    td 11.
                    td Media.
                  tr
                    td.left Sistema de riego automatizado.
                    td 2.
                    td 4.
                    td 5.
                    td 11.
                    td Media.
                  tr
                    td.left Inventario de insumos y repuestos.
                    td 2.
                    td 3.
                    td 4.
                    td 9.
                    td Media.
                  tr
                    td.left Registros de telemetría (drones / sensores).
                    td 2.
                    td 3.
                    td 3.
                    td 8.
                    td Media.
                  tr
                    td.left Avisos publicitarios de la finca.
                    td 1.
                    td 2.
                    td 2.
                    td 5.
                    td Baja.
 
   
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .ap12.p-4
          p.mb-3 En los ejemplos anteriores, para la valoración se tuvieron los siguientes parámetros:
          p.mb-3 C, I, A se valoran cuantitativamente (1 a 5).
          p.mb-2 Valor total se traduce a cualitativo según la suma:
          .row.justify-content.align-items-center.mb-0
            .col-lg-5
              .apw1.p-2
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-5
                    p.mb-0.right 12 - 15
                    p.mb-0.right 8 - 11
                    p.mb-0.right ≤7
                  .col-lg-1
                    p.mb-0 =
                    p.mb-0 =
                    p.mb-0 =
                  .col-lg-5
                    p.mb-0.left Alta.
                    p.mb-0.left Media.
                    p.mb-0.left Baja.    
      .col-lg-5
        img(src='@/assets/curso/tema3/35.png' alt='AvatarTop')
 
 
    p.mb-5 Para concluir, se presenta un ejemplo integrado en el que se muestra en una sola tabla tanto el registro como la valoración de los activos de información.
 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(alt='La tabla presenta un ejemplo integrado de registro y valoración de activos en la IPS ManoSana, incluyendo información sobre tipo de activo, ubicación, responsable y puntuaciones de confidencialidad (C), integridad (I) y disponibilidad (D). Cada activo recibe una valoración cuantitativa y cualitativa, permitiendo identificar los recursos más críticos. Este enfoque facilita la gestión priorizada y segura de los activos de información de la institución.')
        .titulo-sexto.color-secundario.mb-4
          h5 Tabla 11.
          | #[em Valoración de activos en Finca La Costa]
        .tabla-a.tab9
          table
            thead
              tr
                th ID
                th Activo
                th Tipo de Activo
                th Ubicación
                th Responsable
                th C
                th I
                th D
                th Valoración cuantitativa
                th Valoración cualitativa
            tbody
              tr
                td 1
                td.left Historia clínica electrónica.
                td.left Información.
                td.left Servidor central.
                td.left Jefe de sistemas.
                td 5.
                td 5.
                td 5.
                td 15.
                td Alta.
              tr
                td 2
                td.left Servidor de base de datos.
                td.left Tecnológico.
                td.left Sala de servidores.
                td.left Administrador de TI.
                td 5.
                td 5.
                td 4.
                td 14.
                td Alta.
              tr
                td 3
                td.left Red interna de comunicaciones.
                td.left Tecnológico.
                td.left Infraestructura IPS.
                td.left Coordinador de redes.
                td 4.
                td 4.
                td 4.
                td 12.
                td Alta.
              tr
                td 4
                td.left Planta eléctrica.
                td.left Infraestructura física.
                td.left Patio IPS.
                td.left Jefe de mantenimiento.
                td 3.
                td 4.
                td 4.
                td 11.
                td Media.
              tr
                td 5
                td.left Expedientes físicos (archivados).
                td.left Información.
                td.left Archivo central.
                td.left Auxiliar administrativo.
                td 4.
                td 3.
                td 4.
                td 11.
                td Media.
              tr
                td 6
                td.left Médicos especialistas.
                td.left Recursos humanos.
                td.left Consultorios.
                td.left Director médico.
                td 5.
                td 5.
                td 5.
                td 15.
                td Alta.
              tr
                td 7
                td.left Políticas y protocolos clínicos.
                td.left Organizacional.
                td.left Dirección general.
                td.left Gerente IPS.
                td 4.
                td 4.
                td 5.
                td 13.
                td Alta.
              tr
                td 8
                td.left Equipos de diagnóstico por imágenes.
                td.left Tecnológico.
                td.left Sala de radiología.
                td.left Jefe de radiología.
                td 5.
                td 4.
                td 4.
                td 13.
                td Alta.
              tr
                td 9
                td.left Instalaciones físicas del edificio.
                td.left Infraestructura física.
                td.left Sede principal.
                td.left Área administrativa.
                td 3.
                td 3.
                td 3.
                td 9.
                td Media.
              tr
                td 10
                td.left Personal de enfermería.
                td.left Recursos humanos.
                td.left Consultorios / UCI.
                td.left Coordinador de enfermería.
                td 5.
                td 4.
                td 5.
                td 14.
                td Alta.
 
 
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-5
        img(src='@/assets/curso/tema3/36.png' alt='AvatarTop')
      .col-lg-7
        p.mb-4 Los activos de información representan el núcleo del funcionamiento de cualquier organización, pues incluyen tanto los datos críticos como los recursos tecnológicos, físicos, organizacionales y humanos que permiten cumplir con su misión. Reconocer su valor y tipología es fundamental para priorizar su protección y garantizar la continuidad operativa.
        .ap10.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-10
              p.mb-0 La seguridad de la información y la gestión de riesgos permiten identificar, analizar y valorar las amenazas que podrían afectar estos activos, estableciendo controles y medidas preventivas que minimicen impactos. De esta manera, las organizaciones aseguran confidencialidad, integridad y disponibilidad de su información, fortalecen su resiliencia y fomentan la confianza de sus usuarios, clientes y colaboradores, consolidando una gestión responsable y estratégica de sus recursos.
            .col-lg-2
              img(src='@/assets/curso/tema3/37.svg' alt='AvatarTop')
 










</template>

<script>
export default {
  name: 'Tema3',
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
