<template>
  <v-app>
    <v-container class="">
      <p class="text-left">Montreal Black Businesses Directory</p>
      <v-row class="`d-flex justify-start mb-6`">
          <div class="ma-2">
            <v-btn outlined color="indigo" to="/">About</v-btn>
          </div>
          <div class="ma-2">
            <v-btn outlined color="indigo" to="/restaurant">Restaurant</v-btn>
          </div>
          <div class="ma-2">
            <v-btn outlined color="indigo" to="/business">Business</v-btn>
          </div>
          <!--<div class="ma-2">
            <v-btn outlined color="indigo" @click="cambiarProyecto('Restaurant')">Restaurant</v-btn>
          </div>
          <div class="ma-2">
            <v-btn outlined color="indigo" @click="cambiarProyecto('Business')">Business</v-btn>
          </div>-->
      </v-row>
    </v-container>
    <hr>
  </v-app>
</template>

<script>
  import { eventBus } from '../../main';
  export default {
    data() {
      return {
        currentComponent : null
      }
    },
    methods: {
      cambiarProyecto(dato) {
        this.currentComponent = dato
        eventBus.bodyChoose(this.currentComponent)
      }
    }
  }
</script>

<style>
</style>