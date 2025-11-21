<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Seguridad de la información


    .row.justify-content-center.align-items-center.mb-0
      .col-lg-7
        p.mb-4 Hablar de seguridad de la información implica proteger los activos de información de una organización frente a amenazas que puedan comprometer su confidencialidad, integridad y disponibilidad. Estos tres principios son fundamentales para garantizar la eficiencia y eficacia de los procesos, asegurando que la información sea fiable, precisa y accesible únicamente por quienes están autorizados (Novasep, 2021). La seguridad de la información es un concepto transversal a toda la organización, independientemente del sector, y constituye la base para establecer controles, políticas y procedimientos que aseguren la continuidad operativa y minimicen los riesgos a los que se expone la entidad.
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-5
            img(src='@/assets/curso/tema2/1.png', alt=' ')
          .col-lg-7  
            .ap.p-4.mb-0
              .row.justify-content-center.align-items-center.mb-0
                p.mb-2 Comprender estos principios es esencial, ya que sobre ellos se sustentan la toma de decisiones, garantizando que estén alineadas con los objetivos estratégicos y la normativa de la organización.   
      .col-lg-5
        img(src='@/assets/curso/tema2/2.svg', alt=' ')





    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Principio de confidencialidad


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1
        img(src='@/assets/curso/tema2/3.svg', alt=' ')
      .col-lg-11
        p.mb-0 Este principio garantiza que la información y los activos asociados sean accesibles únicamente por las personas autorizadas, evitando divulgaciones, pérdidas o usos indebidos que puedan afectar a la organización o a terceros vinculados a ella. Para preservar la confidencialidad, es necesario aplicar controles de acceso, permisos, cifrado de datos, políticas de manejo de información sensible, así como brindar capacitación al personal para prevenir filtraciones o mal uso de la información.


    p.mb-4 La relevancia de este principio radica en que: 




    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-3.col-md-6.col-12.mb-lg-0.mb-4
        .h-100.ap7.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img.ima5(src='@/assets/curso/tema2/8.svg' alt='AvatarTop')
            h4.text-center.mb-0 
          p.mb-2.text-center Garantiza la privacidad de  usuarios y clientes.
      .col-lg-3.col-md-6.col-12.mb-lg-0.mb-4
        .h-100.ap7.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img.ima6(src='@/assets/curso/tema2/6.svg' alt='AvatarTop')
            h4.text-center.mb-0 
          p.mb-2.text-center Previene sanciones legales y regulatorias por incumplimiento de normativas.
      .col-lg-3.col-md-6.col-12.mb-lg-0.mb-4
        .h-100.ap7.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img.ima7(src='@/assets/curso/tema2/7.svg' alt='AvatarTop')
            h4.text-center.mb-0 
          p.mb-2.text-center Protege la reputación de la organización frente a incidentes de divulgación no autorizada.



    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12(alt='La tabla presenta ejemplos prácticos de confidencialidad en distintos sectores, mostrando cómo se controla el acceso a información sensible. Incluye medidas como permisos diferenciados por rol, cifrado de datos y almacenamiento seguro de documentos físicos y digitales. Estos mecanismos garantizan que solo las personas autorizadas puedan acceder a información crítica, protegiendo la privacidad y la seguridad organizacional.')
        .titulo-sexto.mb-4
          h5 Tabla 4.
          | #[em Ejemplos de confidencialidad]
        .tabla-a.tab2.mb-2.color-acento-contenido
          table
            thead
              tr
                th Sector
                th Ejemplos
            tbody
              tr.apt
                td #[b IPS ManoSana]
                td.left 
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-shield.blu
                      p.mb-2 Acceso restringido a historias clínicas, informes de laboratorio y resultados de exámenes solo para médicos y enfermeras autorizadas.
                    li.d-flex.mb-0
                      i.fas.fa-shield.blu
                      p.mb-0 Cifrado de comunicaciones electrónicas con laboratorios externos.
              tr
                td #[b Escuela Armando López Sierra]
                td.left
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-shield.blu
                      p.mb-2 Restricción de acceso a calificaciones, expedientes de estudiantes y datos de investigación.
                    li.d-flex.mb-0
                      i.fas.fa-shield.blu
                      p.mb-0 Plataforma LMS con control de usuarios y permisos diferenciados por rol.
              tr.apt
                td #[b Finca La Costa]
                td.left 
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-shield.blu
                      p.mb-2 Acceso controlado a registros de producción, contratos de venta y planes de manejo de cultivos solo para administradores y personal autorizado.
                    li.d-flex.mb-0
                      i.fas.fa-shield.blu
                      p.mb-0 Uso de contraseñas para información almacenada en los sistemas electrónicos y almacenamiento seguro de documentos físicos.
              


    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Principio de integridad


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-4 Este principio garantiza que la información y los activos asociados se mantengan exactos, completos y sin alteraciones no autorizadas durante su creación, almacenamiento, transmisión y uso. Para mantener la integridad se tienen que implementar controles que detecten modificaciones indebidas, errores o  corrupciones de datos, asegurando con ello que la información confiable y consistente para la toma de decisiones.
          .ap.p-4.mb-0
            .row.justify-content-center.align-items-center.mb-0.mx-lg-3.mb-lg-2.my-lg-3
              p.mb-4 Su importancia consiste en que:
              ul.lista-ul.mb-0
                li.d-flex.mb-4
                  i.fas.fa-shield
                  p.mb-0 Previene  decisiones incorrectas derivadas de información alterada.
                li.d-flex.mb-4
                  i.fas.fa-shield
                  p.mb-0 Protege la reputación de la organización asegurando la veracidad de los datos.
                li.d-flex.mb-0
                  i.fas.fa-shield
                  p.mb-0 Facilita el cumplimiento normativo, especialmente en sectores que requieren registros confiables, como salud, educación y producción.
      .col-lg-4
        img(src='@/assets/curso/tema2/15.svg', alt=' ')



    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4(alt='La tabla muestra ejemplos de cómo se garantiza la integridad de la información en distintos sectores, asegurando que los datos no sean modificados sin autorización. Incluye medidas como sistemas de auditoría, control de versiones y respaldos de información. Estas prácticas permiten que la información sea veraz, confiable y consistente, apoyando la toma de decisiones y la continuidad operativa.')
          h5 Tabla 5.
          | #[em Ejemplos de integridad]
        .tabla-a.tab2.mb-2.color-acento-contenido
          table
            thead
              tr
                th Sector
                th Ejemplos
            tbody
              tr.apt
                td #[b IPS ManoSana]
                td.left 
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-shield.blu
                      p.mb-2 Evitar modificaciones no autorizadas en historias clínicas, resultados de laboratorio y recetas.
                    li.d-flex.mb-0
                      i.fas.fa-shield.blu
                      p.mb-0 Sistemas de auditoría que registran cambios en los expedientes médicos.
              tr
                td #[b Escuela Armando López Sierra]
                td.left
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-shield.blu
                      p.mb-2 Control de modificaciones en calificaciones y actas académicas.
                    li.d-flex.mb-0
                      i.fas.fa-shield.blu
                      p.mb-2 Protección de trabajos de investigación contra alteraciones.
                    li.d-flex.mb-0
                      i.fas.fa-shield.blu
                      p.mb-0 Registro de cambios en plataforma LMS con historial de versiones.
              tr.apt
                td #[b Finca La Costa]
                td.left 
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-shield.blu
                      p.mb-2 Garantizar que los registros de inventario, control de fertilización y planes de cultivo no sean alterados sin autorización.
                    li.d-flex.mb-2
                      i.fas.fa-shield.blu
                      p.mb-0 Sistemas de backup que aseguran la recuperación de datos originales
    
    
    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Principio de disponibilidad 


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-3 Este principio asegura que la información y los activos asociados estén accesibles y puedan ser utilizados cuando los usuarios autorizados lo requieran, garantizando con ello la continuidad de los procesos organizacionales. Para mantener la disponibilidad se tienen que implementar controles que reduzcan los riesgos de interrupciones, fallas técnicas, desastres o ataques que puedan afectar el acceso a los datos.
        p.mb-4 Su importancia consiste en que:
        .row.justify-content-center.align-items-stretch.mb-0
          .col-lg-4.col-md-6
            .tarjeta-avatar-b.mb-lg-0.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/12.svg' alt='')
              .tarjeta.cajon-color-adicional-8
                .p-4
                  p.mb-2.my-3 Asegura  que los procesos críticos de la organización funcionen sin interrupciones.
          .col-lg-4.col-md-6
            .tarjeta-avatar-b.mb-lg-0.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/13.svg' alt='')
              .tarjeta.cajon-color-adicional-8
                .p-4
                  p.mb-0 Previene pérdidas económicas y operativas derivadas de la indisponibilidad de información o sistemas.
          .col-lg-4.col-md-6
            .tarjeta-avatar-b.mb-lg-0.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/14.svg' alt='')
              .tarjeta.cajon-color-adicional-8
                .p-4
                  p.mb-2.my-3 Garantiza el cumplimiento de compromisos con clientes, estudiantes o usuarios finales.
      .col-lg-4
        img(src='@/assets/curso/tema2/11.png', alt=' ')



    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-8(alt='La tabla ilustra ejemplos de cómo se garantiza la disponibilidad de la información y los sistemas en distintos sectores. Incluye medidas para asegurar el acceso continuo a plataformas, bases de datos, equipos críticos y sistemas automatizados. Estas acciones permiten que los procesos esenciales funcionen sin interrupciones, protegiendo la operación y los compromisos con usuarios y clientes.')
        .titulo-sexto.mb-4
          h5 Tabla 6.
          | #[em Ejemplos de disponibilidad]
        .tabla-a.tab2.mb-2.color-acento-contenido
          table
            thead
              tr
                th Sector
                th Ejemplos
            tbody
              tr.apt
                td #[b IPS ManoSana]
                td.left 
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-shield.blu
                      p.mb-2 Sistema de citas y agendas médicas 24 / 7.
                    li.d-flex.mb-0
                      i.fas.fa-shield.blu
                      p.mb-2 Acceso constante a historiales clínicos electrónicos.
                    li.d-flex.mb-0
                      i.fas.fa-shield.blu
                      p.mb-0 Disponibilidad de equipamiento médico crítico.
              tr
                td #[b Escuela Armando López Sierra]
                td.left
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-shield.blu
                      p.mb-2 Plataforma LMS accesible durante horarios de clases.
                    li.d-flex.mb-0
                      i.fas.fa-shield.blu
                      p.mb-2 Disponibilidad de bases de datos de estudiantes y contenidos digitales.
                    li.d-flex.mb-0
                      i.fas.fa-shield.blu
                      p.mb-0 Acceso a laboratorios de informática en horarios programados.
              tr.apt
                td #[b Finca La Costa]
                td.left 
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-shield.blu
                      p.mb-2 Sistema de riego automatizado operativo durante la temporada de cultivo.
                    li.d-flex.mb-0
                      i.fas.fa-shield.blu
                      p.mb-2 Disponibilidad de registros de inventario y producción.
                    li.d-flex.mb-0
                      i.fas.fa-shield.blu
                      p.mb-0 Acceso constante a sensores de monitoreo agrícola.




</template>

<script>
export default {
  name: 'Tema2',
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
