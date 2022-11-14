<template>
    <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
        <h1>Sign In</h1>
        <form class="form-group">
           <input v-model="emailLogin" type="email" class="form-control" placeholder="Email" required>
           <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required>
           <input type="submit" class="btn btn-primary" @click="doLogin">
           <p>Don't have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign up here</a>
           </p>
           <p><a href="#">Forgot your password?</a></p>
        </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Log-in',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  