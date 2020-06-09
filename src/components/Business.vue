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
    </v-data-table>
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
          { text: 'Business type/type de commerce', value: 'commerce' },
          { text: 'IG if available/si disponible', value: 'ig' },
        ],
        businesses: [
          {
            name: 'Frozen Yogurt',
            borough: 'somplace',
            commerce: 'sports goods',
            web: 'http://www.google.com',
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
  }
</script>