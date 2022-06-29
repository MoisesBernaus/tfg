<template>
  <div class="txt">
    <h2>Sede</h2>
    <div class="text">
      <p>Lleida es ciudad española, capital de la provincia homónima, situada en la comunidad autónoma de Cataluña. Es conocida por su gastronomía, como los caracoles y monumentos históricos, como la Seu.
      <p>Lleida es el centro demográfico y económico más importante de la Cataluña interior. Basa su economía en el sector agroalimentario y en los servicios de todo tipo. La actividad comercial, de fuerte tradición y arraigo en la ciudad, extiende su influencia en la comarca del Segrià a la que pertenece y las comarcas vecinas.
      <p>Lleida es una ciudad muy bien comunicada y situada en un entorno natural inigualable, lo que permite al visitante no sólo gozar de las comodidades y la cultura de la zona urbana sino que también permite realizar escapadas por su provincia y alrededores.
      </p>
    </div>
    <section>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/OFDr-_YKzSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>
   <b-img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Lleida_-_La_Seu_Vella_%28des_de_Cappont%29.jpg" width="300" height="300" fluid alt="Imagen de Lleida con la Seu Vella de fondo"></b-img>
     <div class="text"><p>Lleida es una ciudad muy bien comunicada y situada en un entorno natural inigualable, lo que permite al visitante no sólo gozar de las comodidades y la cultura de la zona urbana sino que también permite realizar escapadas por su provincia y alrededores.</p></div>
    <modal :identificador="2"/>
    <hr>
  </div>
</template>

<script>
import Modal from './Modal.vue'
export default {
  components: { Modal },
}
</script>

<style>
.image{
  margin-right:10%;
  display: inline-block;
  margin-block-end: 5%;

}
</style>
