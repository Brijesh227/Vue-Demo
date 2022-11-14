<template>
  <div class="hello">
    <div class="card register">
       <h1>Sign Up</h1>
       <form>
          <input 
            v-model="emailReg" 
            type="email" 
            class="form-control" 
            placeholder="Email" 
            required
          >
          <input 
            v-model="passwordReg" 
            type="password"
            class="form-control" 
            placeholder="Password" 
            required
          >
          <input 
            type="submit" 
            class="btn btn-primary" 
            @click="doRegister"
          >
          <p>Already have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign in here</a>
          </p>
       </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .input-bottom {
    margin-bottom: 20px;
  }
</style>
