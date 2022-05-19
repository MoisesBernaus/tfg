<template>
  <div>
    <b-button id="show-btn" @click="showModal" ref="btnShow">Open Modal</b-button>
    <b-modal ref="my-modal">
      <b-card
        :title="titulo"
        :img-src="srcimg"
        :img-alt="alt"
        img-top
        :footer="visual_nombre"
        tag="proyecto"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          {{visual_subtitulo}}
        </b-card-text>
        <b-card-text>
          {{visual_emocion}}
        </b-card-text>
        <b-card-text>
          {{visual_comentario}}
        </b-card-text>
        <b-card-text>
          {{visual_comentario_explicado}}
        </b-card-text>
        <b-card-text>
          {{bajavision_subtitulo}}
        </b-card-text>
        <b-card-text>
          {{bajavision_emocion}}
        </b-card-text>
        <b-card-text>
          {{bajavision_comentario}}
        </b-card-text>
        <b-card-text>
          {{sugerencia}}
        </b-card-text>
        <b-card-text>
          {{pautas_WCAG}}
        </b-card-text>
        <b-card-text>
          {{pautas_WCAG_enlace}}
        </b-card-text>
      </b-card>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["titulo", "visual_nombre", "srcimg", "alt", "visual_subtitulo", "visual_emocion", "visual_comentario",
   "visual_comentario_explicado","bajavision_id", "bajavision_titulo", "bajavison_nombre", "bajavision_subtitulo", "bajavision_emocion", 
   "bajavision_comentario", "sugerencia", "pautas_WCAG", "pautas_WCAG_enlace"],
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    toggleModal() {
     this.$refs['my-modal'].toggle('#toggle-btn')
    }
  }
};
</script>

<style scoped></style>