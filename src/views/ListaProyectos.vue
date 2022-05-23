<template>
  <div class="txt">
    <h1 class="pb-2">
     <icons :icon="['fas', 'award']" /> 
      Lista de proyectos de los alumnos
     <icons :icon="['fas', 'award']" /> 
     </h1>  
      <p> Aquí se muestra la lista de proyectos webs de
        de la asignatura de <strong>Web Dinámica</strong> de los alumnos del 
        <b-link href="http://www.graudissenydigitalitec.udl.cat/">Grado Diseño Digital y Tecnologías Creativas</b-link> 
        </p>
      <div class="container-md">
          <b-card-group columns>
            <div columns v-for="proyecto in proyectos" :key="proyecto.id">
             <Card2 :visual_nombre="proyecto.visual_nombre" :srcimg="proyecto.srcimg" :alt="proyecto.alt" 
             :titulo="proyecto.titulo" :visual_subtitulo="proyecto.visual_subtitulo" :visual_emocion="proyecto.visual_emocion" 
             :visual_comentario="proyecto.visual_comentario" :visual_comentario_explicado="proyecto.visual_comentario_explicado"
             :bajavision_titulo="proyecto.bajavision_titulo" :bajavison_nombre="proyecto.bajavision_nombre"
             :bajavision_subtitulo="proyecto.bajavision_subtitulo" :bajavision_emocion="proyecto.bajavision_emocion" :bajavision_comentario="proyecto.bajavision_comentario"
             :sugerencia="proyecto.sugerencia" :pautas_WCAG="proyecto.pautas_WCAG" :pautas_WCAG_enlace="proyecto.pautas_WCAG_enlace"
             ></Card2> 
            </div>
           </b-card-group>
       </div>
 </div>

</template>

<script>
import Card2 from '../components/Card2.vue' 
const lstProysJson = '../proyectosWD2021.json';
export default {
  props: {  
   name: {
      type: String,
      default: 'ListaProyectos'
    }
  },
  components: {
        Card2
      },
  data() {
      return {
        proyectos:[],
        githubPage: 1,
        page: 1,
        loading: false,
        perPage: 5
      }
    },
    mounted() {
      this.fetchData()
    },
    methods: {
        async fetchData() {
          const res = await fetch (lstProysJson);
          const val= await res.json();
          this.proyectos=val;
          console.log(val);
        }
    }
  }
</script>