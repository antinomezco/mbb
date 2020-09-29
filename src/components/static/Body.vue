<template>
    <div>
        <div :is="currentComponent"></div>
        <hr>
        <router-view></router-view>
    </div>
</template>
<script>
import { eventBus } from '../../main';
import Restaurant from '../Restaurant.vue'
import Business from '../Business.vue'

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