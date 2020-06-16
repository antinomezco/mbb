<template>
  <div id="app">
    <app-header></app-header>
    <v-spacer></v-spacer>
    <app-body></app-body>
    <transition name="flip" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/static/Header.vue'
// import Body from './components/static/Body.vue'

export default {
  name: 'App',
  components: {
    appHeader: Header,
    // appBody: Body
  },
}
</script>

<style>
    .v-application--wrap {
        min-height: 0vh;
    }
    .flip-enter{
    }
    
    .flip-enter-active {
        animation: flip-in 0.25s ease-out forwards;
    }
    
    .flip-leave {
    }
    
    .flip-leave-active {
        animation: flip-out 0.25s ease-out forwards;
    }
    
    @keyframes flip-out {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(90deg);
        }
    }
    
    @keyframes flip-in {
        from {
            transform: rotateY(90deg);
        }
        to {
            transform: rotateY(0deg);
        }
    }
</style>