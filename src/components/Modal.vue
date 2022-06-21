<template>
  <div class="txt">
    <b-button  id="show-btn" @click="showModal" ref="btnShow">Accesso Barrera</b-button>
    <b-modal ref="my-modal">
      <b-tabs content-class="mt-3">
        <b-tab v-for="bar in barreras" :key="bar.titulo_barrera" :title = "bar.titulo_barrera" @click ="selectBarrier(bar)"></b-tab>
      </b-tabs>
      <b-tabs content-class="mt-3">
        <b-tab title="Cesar Cerezo">
          <b-img :src="barrera.visual.visual_img" height="130" width="130" fluid alt=""></b-img>
          {{barrera.visual.visual_comentario}}
        </b-tab>
        <b-tab title="Blas Blanco">
          <b-img :src="barrera.bajavision.bajavision_img" height="130" width="130" alt="Image 2"></b-img>
          {{barrera.bajavision.bajavision_comentario}}
        </b-tab>
        <b-tab title="Aurora Ausin">
          <b-img :src="barrera.auditivo.auditivo_img" height="130" width="130" alt="Image 3"></b-img>
          {{barrera.auditivo.auditivo_comentario}}
        </b-tab>
        <b-tab title="Miguel Mota">
          <b-img :src="barrera.motriz.motriz_img" height="130" width="130" alt="Image 4"></b-img>
          {{barrera.motriz.motriz_comentario}}
        </b-tab>
        <b-tab title="Oscar Coiba">
          <b-img :src="barrera.intelectual.intelectual_img" height="130" width="130" alt="Image 45"></b-img>
          {{barrera.intelectual.intelectual_comentario}}
        </b-tab>
      </b-tabs>
        <div class="text">
          <hr>
          <b-container fluid class="p-4">
            <p></p>
            <b-button v-b-toggle.b1 size="lg" variant="primary">Mas infromación de la barrera de accesibilidad</b-button>
          </b-container>
          <b-collapse id ="b1">
            <hr>
            <h3>Descripción del problema</h3>
            {{barrera.descripcion_barrera}}
            <p></p>
            <h3>Sugerencias para resolver el problema</h3>
            {{barrera.sugerencia_resolver_barrera}}
            <p></p>
            <h3>Pautas WCAG 2.1 relacionadas</h3>
            <div v-for="barr in barrera.pautas_WCAG" :key="barr.titulo">
              {{barr.titulo}} {{barr.nivel}} <a :href="barr.enlace"  target="_blank" rel="noopener">{{barr.enlace}}</a> 
            </div>
          </b-collapse>
      </div>
    </b-modal>
  </div>
</template>
<script>
import json from '../../public/BarrerasAWeb_FinalCompleto.json';
export default {
  props: {  
   identificador: {
      type: Number,
      default: 0 
   }
  },

  data(){
    return {
      barreras: json[this.identificador]["barreras"],
      barrera: json[this.identificador]["barreras"][0]
    }
  },
 
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    toggleModal() {
     this.$refs['my-modal'].toggle('#toggle-btn')
    },
    selectBarrier(barrier){
      this.barrera=barrier
      console.log(this.barrera)
    }
  }
};
</script>

<style scoped></style>
