<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/intro/1.png', alt=' ')
      .col-lg-8
        p.mb-lg-3.mb-4 En la actualidad, las organizaciones dependen cada vez más de la información como un recurso estratégico que respalda la toma de decisiones, garantiza la continuidad de los procesos y genera valor. Sin embargo, el avance de las tecnologías digitales ha incrementado la exposición a riesgos y amenazas que pueden comprometer los datos, los sistemas y, en consecuencia, la estabilidad institucional. Por ello, resulta indispensable establecer mecanismos sólidos de control de la seguridad de la información, que protejan los activos críticos y aseguren el cumplimiento de los objetivos organizacionales.
        .ap.p-4.mb-0
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2
              img.img-t.img-a.mb-lg-0.mb-2(src='@/assets/curso/intro/2.svg', alt=' ')
            .col-lg-10
              p.mb-0 Este componente formativo tiene como propósito proporcionar a los aprendices los conocimientos y competencias necesarios para identificar y clasificar los activos de información, comprender los principios fundamentales de la seguridad y aplicar metodologías de gestión de riesgos. Estos elementos constituyen la base para diseñar e implementar estrategias de protección acordes con la realidad de cada organización y alineadas con estándares internacionales.


    p.mb-5 La formación se desarrollará mediante un enfoque práctico y aplicado, que combina el análisis de casos, la elaboración de registros e inventarios de activos y el diseño de matrices de riesgo. De este modo, los aprendices no solo adquirirán comprensión teórica, sino que también podrán transferir los conocimientos al contexto empresarial, contribuyendo activamente al fortalecimiento de la seguridad de la información y a la construcción de entornos más confiables.


    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Nb7DxESuY4k?si=uhUyBoS89RwzWkeD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        figcaption Video. 






























</template>

<script>
export default {
  name: 'Introduccion',
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
