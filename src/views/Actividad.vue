<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad_Completar_Frases
      //<ActividadCompletar :parrafo="parrafo"/>

      #Actividad_Cuestionario
      <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadCompletar from '@/views/plantilla/actividadCompletar/ActividadCompletar.vue'
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Gestión de activos de información y análisis de riesgos en seguridad de la información',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos fundamentales sobre activos de información, valoración de riesgos y seguridad de la información.',
      barajarPreguntas: true,
      titulo_aprobado: '¡FELICIDADES!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Los activos de información solo incluyen los documentos digitales y excluyen los físicos.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta demuestra comprensión de los conceptos de activos de información, riesgos y principios de seguridad, evidenciando compromiso con la construcción de entornos organizacionales más seguros y confiables.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'La confidencialidad, integridad y disponibilidad son los tres principios básicos de la seguridad de la información.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta demuestra comprensión de los conceptos de activos de información, riesgos y principios de seguridad, evidenciando compromiso con la construcción de entornos organizacionales más seguros y confiables.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'El registro de activos no es obligatorio, basta con identificarlos de manera general.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta demuestra comprensión de los conceptos de activos de información, riesgos y principios de seguridad, evidenciando compromiso con la construcción de entornos organizacionales más seguros y confiables.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'La valoración de riesgos no es necesaria si la organización tiene antivirus y cortafuegos instalados.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta demuestra comprensión de los conceptos de activos de información, riesgos y principios de seguridad, evidenciando compromiso con la construcción de entornos organizacionales más seguros y confiables.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Las amenazas son eventos potenciales que pueden afectar negativamente a un activo de información.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta demuestra comprensión de los conceptos de activos de información, riesgos y principios de seguridad, evidenciando compromiso con la construcción de entornos organizacionales más seguros y confiables.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'El análisis de riesgos se realiza una sola vez en la organización y no requiere actualización.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta demuestra comprensión de los conceptos de activos de información, riesgos y principios de seguridad, evidenciando compromiso con la construcción de entornos organizacionales más seguros y confiables.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'La protección de los activos de información contribuye directamente a la resiliencia y continuidad del negocio.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta demuestra comprensión de los conceptos de activos de información, riesgos y principios de seguridad, evidenciando compromiso con la construcción de entornos organizacionales más seguros y confiables.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'La infraestructura, como redes y cableado, también se considera un activo de información.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta demuestra comprensión de los conceptos de activos de información, riesgos y principios de seguridad, evidenciando compromiso con la construcción de entornos organizacionales más seguros y confiables.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'La gestión de riesgos se enfoca únicamente en los incidentes ocurridos, no en los potenciales.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta demuestra comprensión de los conceptos de activos de información, riesgos y principios de seguridad, evidenciando compromiso con la construcción de entornos organizacionales más seguros y confiables.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'Los activos de información deben ser valorados considerando su importancia para los procesos de negocio.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta demuestra comprensión de los conceptos de activos de información, riesgos y principios de seguridad, evidenciando compromiso con la construcción de entornos organizacionales más seguros y confiables.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha captado con claridad los conceptos de activos de información, seguridad y gestión de riesgos de la información ¡Continúe aprendiendo y explorando este apasionante tema!',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
