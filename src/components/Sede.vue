<template>
  <div class="txt2">
     <h1>Sede</h1>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <p>For a guide and recipes on how to configure / customize this project,check out the</p>
      <section>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/gpRNFP64xQY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
      <div class="image"> 
        <b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Left image"></b-img>
          Lo que queremos hacer es colocar este texto al lado derecho de la imagen, algo así como se observa en periódicos o revistas.
      </div>  
      <hr>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.txt2{
  text-align: center;
}
.image{
  margin-right:10%;
  display: inline-block;

}
</style>
