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
    ></v-data-table>
  </v-app>
</template>


<script>
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
          { text: 'Website or IG/page web ou IG', value: 'web' },
        ],
        restaurants: [
          {
            name: 'Marché Méli-Mélo',
            borough: 'Villeray-Saint-Michel-Parc-Extension',
            cuisine: 'Haitian/Haïtienne',
            availability: 'Takeout',
            web: '<a href=https://www.yelp.ca/biz/march%C3%A9-m%C3%A9li-m%C3%A9lo-montr%C3%A9al-4>'
          },
          {
            name: 'test restaurant',
            borough: 'somewhere',
            cuisine: 'mexican',
            availability: 'delivery',
            web: ' <a href="https://www.w3schools.com">Visit W3Schools.com!</a> '
          },
          {
            name: 'Eclair',
            borough: 'Hochelaga-Maisonneuve',
            cuisine: 'Cameroonian',
            availability: 'delivery',
            web: '<div v-html="https://www.w3schools.com">Visit W3Schools.com!</div>'
          },
          {
            name: 'Cupcake',
            borough: 'Parc-extension',
            cuisine: 'West African',
            availability: 'takeout and delivery',
            web: 'https://www.yelp.ca/biz/march%C3%A9-m%C3%A9li-m%C3%A9lo-montr%C3%A9al-4'
          },
          {
            name: 'Gingerbread',
            borough: 356,
            cuisine: 16.0,
            availability: 49,
            web: 'https://www.yelp.ca/biz/march%C3%A9-m%C3%A9li-m%C3%A9lo-montr%C3%A9al-4'
          },
          {
            name: 'Jelly bean',
            borough: 375,
            cuisine: 0.0,
            availability: 94,
            web: 'https://www.yelp.ca/biz/march%C3%A9-m%C3%A9li-m%C3%A9lo-montr%C3%A9al-4'
          },
          {
            name: 'Lollipop',
            borough: 392,
            cuisine: 0.2,
            availability: 98,
            web: 'https://www.yelp.ca/biz/march%C3%A9-m%C3%A9li-m%C3%A9lo-montr%C3%A9al-4'
          },
          {
            name: 'Honeycomb',
            borough: 408,
            cuisine: 3.2,
            availability: 87,
            web: 'https://www.yelp.ca/biz/march%C3%A9-m%C3%A9li-m%C3%A9lo-montr%C3%A9al-4'
          },
          {
            name: 'Donut',
            borough: 452,
            cuisine: 25.0,
            availability: 51,
            web: 'https://www.yelp.ca/biz/march%C3%A9-m%C3%A9li-m%C3%A9lo-montr%C3%A9al-4'
          },
          {
            name: 'KitKat',
            borough: 518,
            cuisine: 26.0,
            availability: 65,
            web: 'https://www.yelp.ca/biz/march%C3%A9-m%C3%A9li-m%C3%A9lo-montr%C3%A9al-4'
          },
          {
            name: 'KitKat222222',
            borough: 518,
            cuisine: 26.0,
            availability: 65,
            web: 'https://www.yelp.ca/biz/march%C3%A9-m%C3%A9li-m%C3%A9lo-montr%C3%A9al-4'
          },
        ],
      }
    },
  }
</script>