<template>
  <v-app>
    <v-card-title>
      Restaurants
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
      :items="restaurants"
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
          { text: 'Cuisine', value: 'cuisine' },
          { text: 'Availability/Disponibilité', value: 'availability' },
          { text: 'IG if available/si disponible', value: 'ig' },
        ],
        restaurants: [],
        exampleRestaurants: [
          {
            name: 'Marché Méli-Mélo',
            borough: 'Villeray-Saint-Michel-Parc-Extension',
            cuisine: 'Haitian/Haïtienne',
            availability: 'Takeout',
            web: 'http://www.yelp.ca/biz/march%C3%A9-m%C3%A9li-m%C3%A9lo-montr%C3%A9al-4',
            address: 'https://www.google.com/maps/place/640+Rue+Jarry+E,+Montréal,+QC+H2P+1V7/'
          },
        ],
      }
    },
    created() {
      getAPI.get('/restaurant',)
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