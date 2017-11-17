<template>
  <div>
            
    <section>
        <h3 class="subtitle">Input Information</h3>
        <div class="field">
          <div class="control has-icons-left has-icons-right">
            <input class="input" onblur="if (this.value == '') {this.value = 'Full Name';}" onfocus="if (this.value == 'Full Name') {this.value = '';}"
                :value="fullName" @input="$emit('update:fullName', $event.target.value)" type="text">
                    <span class="icon is-small is-left">
                      <i class="fa fa-user"></i>
                    </span>
          </div>
         </div>
        <div class="field">
          <div class="control has-icons-left has-icons-right">
            <input class="input" onblur="if (this.value == '') {this.value = 'Title';}" onfocus="if (this.value == 'Title') {this.value = '';}" :value="title" @input="$emit('update:title', $event.target.value)" type="text">
                    <span class="icon is-small is-left">
                      <i class="fa fa-id-badge"></i>
                    </span>
          </div>
        </div>
        <div class="field">
          <div class="control has-icons-left has-icons-right">
            <input class="input" onblur="if (this.value == '') {this.value = 'Phone Number';}" onfocus="if (this.value == 'Phone Number') {this.value = '';}":value="phone" @input="$emit('update:phone', $event.target.value)" type="tel">
                    <span class="icon is-small is-left">
                      <i class="fa fa-phone"></i>
                    </span>
          </div>
        </div>
        <div class="field">
          <div class="control has-icons-left has-icons-right">
            <input class="input" onblur="if (this.value == '') {this.value = 'Email';}" onfocus="if (this.value == 'Email') {this.value = '';}" :value="email" @input="$emit('update:email', $event.target.value)" type="email">
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
          </div>
        </div>
    </section>
               
  </div>
</template>

<script>
// import {bus} from '../main'
export default {
  name: 'inputInformation',
  props: {
    fullName: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
