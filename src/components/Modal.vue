<template>
  <div class="txt">
    <b-button id="button" @click="showModal" ref="btnShow">Acceso Barrera</b-button>
    <b-modal ref="my-modal" size="lg" >
      <b-tabs content-class="mt-3">
        <b-tab v-for="bar in barreras" :key="bar.titulo_barrera" :title = "bar.titulo_barrera" @click ="selectBarrier(bar)"></b-tab>
      </b-tabs>
      <b-tabs content-class="mt-3">
        <b-tab title="Cesar Cerezo">
          <div class="txt">
            <b-img :src="barrera.visual.visual_img" height="130" width="130" fluid alt="Retrato de Cesar Cerezo"></b-img>
            {{barrera.visual.visual_emocion}}
            <p>{{barrera.visual.visual_comentario}}</p>
            <p>{{barrera.visual.vision_comentarioexplicado}}</p>
          </div>
        </b-tab>
        <b-tab title="Blas Blanco">
          <div class="txt">
            <b-img :src="barrera.bajavision.bajavision_img" height="130" width="130" alt="Retrato de Blas Blanco"></b-img>
            {{barrera.bajavision.bajavision_emocion}}
            <p>{{barrera.bajavision.bajavision_comentario}}</p>
            <p>{{barrera.bajavision.bajavisio_comentarioexplicado}}</p>
          </div>
        </b-tab>
        <b-tab title="Aurora Ausin">
          <div class="txt">
            <b-img :src="barrera.auditivo.auditivo_img" height="130" width="130" alt="Retrato de Aurora Ausin"></b-img>
            {{barrera.auditivo.auditivo_emocion}}
            <p>{{barrera.auditivo.auditivo_comentario}}</p>
            <p>{{barrera.auditivo.auditivo_comentarioexplicado}}</p>
          </div>
        </b-tab>
        <b-tab title="Miguel Mota">
          <div class="txt">
            <b-img :src="barrera.motriz.motriz_img" height="130" width="130" alt="Retrato de Miguel Mota"></b-img>
            {{barrera.motriz.motriz_emocion}}
            <p>{{barrera.motriz.motriz_comentario}}</p>
            <p>{{barrera.motriz.motriz_comentarioexplicado}}</p>
          </div>
        </b-tab>
        <b-tab title="Oscar Coiba">
          <div class="txt">
            <b-img :src="barrera.intelectual.intelectual_img" height="130" width="130" alt="Retrato de Oscar Coiba"></b-img>
            {{barrera.intelectual.intelectual_emocion}}
            <p>{{barrera.intelectual.intelectual_comentario}}</p>
            <p>{{(barrera.intelectual.intelectual_comentarioexplicado)}}</p>
          </div>
        </b-tab>
      </b-tabs>
        <div class="txt">
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
             {{barr.pautas_WCAG}}. {{barr.titulo}} - Nivel {{barr.nivel}} {{barr.principio}} <a :href="barr.enlace"  target="_blank" rel="noopener">{{barr.enlace}}</a> 
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

<style></style>
