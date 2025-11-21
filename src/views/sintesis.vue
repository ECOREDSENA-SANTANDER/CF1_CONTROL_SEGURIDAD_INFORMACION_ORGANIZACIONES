<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 Se presenta la gestión de activos de información y el análisis de riesgos en seguridad de la información, organizada en tres áreas principales: los activos de información, la seguridad de la información y la gestión de riesgos. En el primer componente se incluyen las tipologías de activos y los procedimientos para su registro y valoración, los cuales permiten identificar y clasificar los recursos informativos de una organización. En el segundo componente se destacan los principios fundamentales de la seguridad de la información: confidencialidad, integridad y disponibilidad, que garantizan que los datos sean protegidos, se mantengan íntegros y estén disponibles cuando se requieran. Finalmente, la gestión de riesgos de la información aborda los criterios de identificación, el análisis de riesgos y la valoración y priorización de los mismos, con el fin de determinar las amenazas potenciales y establecer acciones adecuadas para su mitigación. 
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Presenta la estructura temática del componente “Gestión de activos de información y análisis de riesgos en seguridad de la información”. En la parte superior se ubica el tema principal, del cual se derivan tres bloques: Activos de información, Seguridad de la información y Gestión de riesgos de la información. Cada uno incluye sus subtemas: los activos de información comprenden tipologías y procedimientos de registro y valoración; la seguridad de la información aborda los principios de confidencialidad, integridad y disponibilidad; y la gestión de riesgos considera criterios de identificación, análisis y valoración o priorización de riesgos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
