<template>
  <v-app>
    <v-container class="grey lighten-5">
      <p class="text-left">Montreal Black Businesses Directory</p>
      <v-row class="botones">
        <v-col class="text-enter">
          <div class="ma-2">
            <v-btn outlined color="indigo" @click="cambiarProyecto('Restaurant')">Restaurant</v-btn>
          </div>
          <div class="ma-2">
            <v-btn outlined color="indigo" @click="cambiarProyecto('Business')">Business</v-btn>
          </div>
        </v-col>        
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