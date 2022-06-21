<template>
  <div class="txt">
    <div class="backgroundNoAc">
      <br/>
      <div class="NoAccesible"><h2>Estas en la pagina No Accesible</h2></div>
      <br/>
      <modal :identificador="0"/>
      <h1>Presentación</h1>
      <h2>XXIII Congreso Internacional de Interacción Persona-Ordenador</h2>
        <p></p>
      <h2>Lleida, del 4 al 6 de septiembre de 2023</h2>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
      <p></p>
      <div class="text">
        <p>La XXIII edición del Congreso Internacional de Persona-Ordenador (Interacción 2023) tendrá lugar en Lleida (Cataluña, España), en el campus de la Universidad de Lleida <b-link href="http://www.udl.es/ca/">enlace aqui</b-link>, del 4 al 6 de septiembre de 2023. Con la colabora la Asociación Interacción Persona-Ordenador (AIPO) <b-link href="https://aipo.es/">más infromación</b-link>, el apoyo del capítulo español de ACM SIGCHI (CHISPA) y la organización del grupo de investigación GRIHO <b-link href="http://griho.udl.cat/en/">enlace aqui</b-link> de la Universidad de Lleida.
        <p>El congreso se organiza en modalidad presencial.
        <p>El objetivo principal de Interacción 2023 es reunir a investigadores, estudiantes y profesionales de la Interacción Persona-Ordenador (IPO), tanto del mundo académico como de la industria, para promover la presentación de propuestas innovadoras, el intercambio de ideas y la discusión. Interacción 2023 tiene un enfoque multidisciplinar de la disciplina de IPO, de forma que se busca atraer a quienes trabajan en informática, pero también en otras disciplinas.
        </p>
      </div>
      <modal :identificador="1"/>
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
.text{
  margin-left: 5%;
  margin-right: 5%;
  text-align: left;
  margin-block-end: 4%;
}
.backgroundNoAc{
  background-image: url("../../public/img/unilleida.jpg");
  color: #8997c3;
  background-size: 100%;
}
.NoAccesible{
  color:rgb(247, 59, 59);
}
.a{
  text-decoration: none;
  color: black;
}
</style>
