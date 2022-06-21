<template>
<div class="txt">
  <b-row>
    <b-button-group>
      <b-button @click="()=>$router.push('/')" size="lg" variant="success">Mostrar web accesible</b-button>
      <b-button @click="()=>$router.push('NoAccesible')"  size="lg" variant="danger">Mostrar web no accesible</b-button>
    </b-button-group>
  </b-row>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-brand><b-img src ="http://blocs.uib.cat/interaccion2018/files/2017/12/wlogoAIPO.png" href="http://www.udl.es/ca/" width="60" height="60"> </b-img></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-container>
        <b-collapse id="nav-collapse" is-nav>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <b-navbar-nav>
              <b-nav-item @click="scrollInto('element1')">Presentación</b-nav-item>
              <b-nav-item @click="scrollInto('element2')">Sede</b-nav-item>
              <b-nav-item @click="scrollInto('element3')">Contacto</b-nav-item>
          </b-navbar-nav>
          </ul>
        </b-collapse>
      </b-container>
  </b-navbar>
  </div>
</template>

<script>
export default {
  methods:{
      scrollInto(elementId) {
        const section = document.querySelector(`#${elementId}`);
        section.scrollIntoView({
          behavior: 'smooth'
      });
    }
  }
}
</script>

<style>
.txt {
  text-align: center;
}
</style>