<template>
<div class="txt">
  <b-row>
    <b-button-group>
      <b-button @click="()=>$router.push('/')" size="lg" variant="success">Mostrar web accesible</b-button>
      <b-button @click="()=>$router.push('/about')"  size="lg" variant="danger">Mostrar web no accesible</b-button>
    </b-button-group>
  </b-row>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-brand>LOGO</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-container>
        <b-collapse id="nav-collapse" is-nav>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <b-navbar-nav>
            <b-nav-item class="nav-link" to="/presentacion">Presentación</b-nav-item>
            <b-nav-item class="nav-link" to="/sede">Sede</b-nav-item>
            <b-nav-item class="nav-link" to="/contacto">Contacto</b-nav-item>
          </b-navbar-nav>
          </ul>
        </b-collapse>
      </b-container>
  </b-navbar>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.txt {
    height: 200px;
    text-align: center;
}
</style>