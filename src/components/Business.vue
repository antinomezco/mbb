<template>
  <v-app>
    <v-card-title>
      Businesses
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="businesses"
      :search="search"
    >
      <template v-slot:item.name="{ item }">
        <a class="no-underline hover:text-gray-800 font-bold text-gray-600 text-sm p-3" :href="item.web" target="_blank"> {{ item.name }}</a>
      </template>
      <template v-slot:item.borough="{ item }">
        <a class="no-underline hover:text-gray-800 font-bold text-gray-600 text-sm p-3" :href="item.address" target="_blank"> {{ item.borough }}</a>
      </template>
    </v-data-table>
    
  </v-app>
</template>


<script>
import {getAPI} from '../axios-api'
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Name/Nom',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: 'Borough/Arondissement', value: 'borough' },
          { text: 'Business type/type de commerce', value: 'commerce' },
          { text: 'IG if available/si disponible', value: 'ig' },
        ],
        businesses: [],
        exampleBusinesses: [
          {
            name: 'Coiffure',
            borough: 'Ville-émard',
            commerce: 'Haircut',
            web: 'https://www.google.com/maps/place/6581+Boulevard+Monk,+Montréal,+QC+H4E+3J2/',
            address: 'https://www.google.com/maps/place/6581+Boulevard+Monk,+Montréal,+QC+H4E+3J2/',
          },
        ],
      }
    },
    created() {
      getAPI.get('/business',)
        .then(response => {
          console.log('received data')
          this.restaurants = response.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
</script>