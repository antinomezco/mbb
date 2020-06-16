<template>
    <div>
        <div :is="currentComponent"></div>
        <hr>
        <router-view></router-view>
    </div>
</template>
// leaving the firebase data here because I'm too lazy to move it
<script>
import { eventBus } from '../../main';
import Restaurant from '../Restaurant.vue'
import Business from '../Business.vue'
import firebase from "firebase/app";
import "firebase/database";
var firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN, 
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const businessRef = database.ref("businessdb");
const restaurantRef = database.ref("restaurantdb");
export var businessRefexp = businessRef;
export var restaurantRefexp = restaurantRef;
    export default {
        data() {
            return {
                currentComponent: Business
            }
        },
        components: {
            appRestaurant: Restaurant,
            appBusiness: Business,
        },
        created() {
            eventBus.$on('cuerpoCambiar', (cuerpo) => {
                if (cuerpo == "Restaurant") {
                    this.currentComponent = Restaurant
                }
                else if (cuerpo == "Business") {
                    this.currentComponent = Business
                }
            })
        }
    }
</script>