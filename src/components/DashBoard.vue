<template>
  <v-container fluid fill-height>
    <v-card v-if="isValidUser">
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
    <v-row v-else class="text-center fill-height">
      <v-col class="align-self-center">
        you have no access to this page.
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
export default {
  name: "DashBoard",
  data() {
    return {
      search: '',
      isValidUser: undefined,
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
          firstName: 'Fraiz',
          lastName: "hds",
          age: 6,
          language: "english",
          email: "fras@cs.cds",
        },
        {
          firstName: 'jas',
          lastName: "dsd",
          age: 9,
          language: "english",
          email: "comm@cs.cds",
        },
        {
          firstName: 'Ecla',
          lastName: "gf",
          age: 16,
          language: "German",
          email: "gdsh@cs.cds",
        },
        {
          firstName: 'Cub',
          lastName: "dfgh",
          age: 6,
          language: "arabic",
          email: "gdsh@cs.cds",
        },
        {
          firstName: 'lory',
          lastName: "dfgdf",
          age: 16,
          language: "english",
          email: "lory@ds.com",
        },
        {
          firstName: 'Jelly',
          lastName: "dv",
          age: 45,
          language: "english",
          email: "liza@cs.cds",
        },
        {
          firstName: 'Liza',
          lastName: "fsdfs",
          age: 3,
          language: "english",
          email: "liza@cs.cos",
        },
        {
          firstName: 'Comb',
          lastName: "sdfgdfg",
          age: 3,
          language: "hindi",
          email: "gdsh@cs.cds",
        },
        {
          firstName: 'Donut',
          lastName: "gdf",
          age: 25,
          language: "english",
          email: "donut@cs.cds",
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
  },
  mounted() {
    this.isValidUser = localStorage.getItem("isLoggedIn");
  },
  beforeDestroy() {
    localStorage.clear();
  }
};
</script>
