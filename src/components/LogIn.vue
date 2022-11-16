<template>
    <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-card class="elevation-12">
         <v-toolbar dark color="primary">
          <v-toolbar-title>Login form</v-toolbar-title>
         </v-toolbar>
         <v-card-text>
         <form ref="form" @submit.prevent="login">

          <v-text-field
            v-model="email"
            label="Email"
            :rules="emailRules"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            name="password"
            label="Password"
            type="password"
            placeholder="password"
            required
          ></v-text-field>
          <v-btn type="submit" class="mt-4" color="primary" value="log in">Login</v-btn>
          </form>
         </v-card-text>
      </v-card>
    </v-layout>
    </v-container>
</template>
  
<script>
import { RouterName } from "../utility/constant";
export default {
  name: "LogIn",
  data() {
    return {
      email: undefined,
      password: undefined,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
    };
  },
  methods: {
    login() {
      localStorage.setItem("isLoggedIn",true);
      this.$router.push({name: RouterName.DashBoard});
    },
  },
};
</script>
  