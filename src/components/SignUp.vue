<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-card class="elevation-12">
         <v-toolbar dark color="primary">
          <v-toolbar-title>Login form</v-toolbar-title>
         </v-toolbar>
         <v-card-text>
         <form ref="form" @submit.prevent="goToLogin()">
          <v-text-field
            v-model="firstname"
            label="Firstname"
            type="text"
            required
          ></v-text-field>
          
          <v-text-field
            v-model="lastname"
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
          <p>Already have an account? <a href="#" @click=goToLogin>Sign in here</a></p>
         </v-card-text>
      </v-card>
    </v-layout>
    </v-container>
</template>

<script>
import { RouterName } from "../utility/constant";
import axios from "axios";
import { createUser } from "../../API/GraphQL/mutation.js";

  export default {
    name: 'Sign-Up',
    data() {
    return {
      firstname: undefined,
      lastname: undefined,
      email: undefined,
      password: undefined,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
    }
    },
    methods: {
      goToLogin() {
        axios({
          url: 'http://localhost:3000/graphql',
          method: 'post',
          data: {
            query: createUser,
            variables: {input: {
              firstName : this.firstname,
              lastName:  this.lastname,
              email: this.email,
              password: this.password 
            }}
          },
          mode: 'no-cors',
      }).then(async (result) => {
        console.log("lol res",result.data)
        this.$router.push({name: RouterName.Login})
      });
      }
    }
  }
</script>
