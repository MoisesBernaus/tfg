<template>
  <div class="txt3">
    <h1>Contacto</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1" label="Email (required):" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Email"
          required 
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nombre (required):" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Nombre"
          required
        ></b-form-input>
        <p></p> 
      </b-form-group>
      <b-button class="button1" type="submit" variant="primary">Enviar</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>
.txt3 {
    margin-top: 4%;
    margin-left: 25%;
    text-align: center;
    width: 50%;
    height: 200px;
    margin-block-end: 5%;

}
.button1{
 margin-right:2%;
}
</style>
