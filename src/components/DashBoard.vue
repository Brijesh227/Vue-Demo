<template>
    <v-container fluid fill-height>
        <v-card>
      <v-card-title>
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
        :items="desserts"
        :search="search"
      ></v-data-table>
    </v-card>
    </v-container>
</template>
  
  <script>
 export default {
  name: "DashBoard",
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'firstName',
          align: 'start',
          value: 'firstName',
        },
        { text: 'lastname', value: 'lastName' },
        { text: 'age', value: 'age' },
        { text: 'language', value: 'language' },
        { text: 'email', value: 'email' },
      ],
      desserts: [
        {
          firstName: 'Frozen Yogurt',
          lastName: "hds",
          age: 6,
          language: "english",
          email: "gdsh@cs.cds",
        },
        {
          firstName: 'Ice cream sandwich',
          lastName: "dsd",
          age: 9,
          language: "english",
          email: "gdsh@cs.cds",
        },
        {
          firstName: 'Eclair',
          lastName: "gf",
          age: 16,
          language: "english",
          email: "gdsh@cs.cds",
        },
        {
          firstName: 'Cupcake',
          lastName: "dfgh",
          age: 6,
          language: "english",
          email: "gdsh@cs.cds",
        },
        {
          firstName: 'Gingerbread',
          lastName: "dfgdf",
          age: 16,
          language: "english",
          email: "gdsh@cs.cds",
        },
        {
          firstName: 'Jelly bean',
          lastName: "dv",
          age: 45,
          language: "english",
          email: "gdsh@cs.cds",
        },
        {
          firstName: 'Lollipop',
          lastName: "fsdfs",
          age: 3,
          language: "english",
          email: "gdsh@cs.cds",
        },
        {
          firstName: 'Honeycomb',
          lastName: "sdfgdfg",
          age: 3,
          language: "english",
          email: "gdsh@cs.cds",
        },
        {
          firstName: 'Donut',
          lastName: "gdf",
          age: 25,
          language: "english",
          email: "gdsh@cs.cds",
        },
        {
          firstName: 'KitKat',
          lastName: "cdsfd",
          age: 26,
          language: "english",
          email: "gdsh@cs.cds",
        },
      ]
    }
  }
};
  </script>
  
  <style scoped>
  
  </style>
  