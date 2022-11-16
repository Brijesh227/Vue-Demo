<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-card class="elevation-12">
         <v-toolbar dark color="primary">
          <v-toolbar-title>Login form</v-toolbar-title>
         </v-toolbar>
         <v-card-text>
         <form ref="form" @submit.prevent="signUpUser">
          <v-text-field
            v-model="firstName"
            label="Firstname"
            type="text"
            required
          ></v-text-field>
          
          <v-text-field
            v-model="lastName"
            label="Lastname"
            type="text"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            label="Email"
            :rules="emailRules"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            placeholder="password"
            required
          ></v-text-field>
          <v-btn type="submit" class="mt-4" color="primary" value="log in">Login</v-btn>
          </form>
          <p>Already have an account? <a href="#" @click="goToLoginPage">Sign in here</a></p>
         </v-card-text>
      </v-card>
    </v-layout>
    </v-container>
</template>

<script>
import { RouterName } from "../utility/constant";
import axios from "axios";

export default {
  name: 'Sign-Up',
  data() {
    return {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      password: undefined,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
    }
  },
  methods: {
    signUpUser() {
      axios({
        url: 'http://localhost:3000/graphql',
        method: 'post',
        data: {
          query:`mutation {
                  createUser(input:{
                    firstName:"${this.firstName}",
                    lastName:"${this.lastName}",
                    email:"${this.email}",
                    password:"${this.password}"
                  }) {
                    firstName
                    lastName
                    email
                    password
                  }
                }`,
            },
        mode: 'no-cors',
      }).then(async (result) => {
        if(result?.data) {
          this.$router.push({name: RouterName.Login})
        }
      }).catch((error)=> {
        console.log("error",error);
      });
    },
    goToLoginPage() {
      this.$router.push({name: RouterName.Login});
    }
  }
}
</script>
