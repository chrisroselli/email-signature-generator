<template>
<div>
  <h1>{{ msg }}</h1>
   <router-link to="/input-information">Input Information</router-link><br>
   <router-link to="/output-signature">Output Signature</router-link>
   <p>Git'd from home.</p>
</div>
    
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
