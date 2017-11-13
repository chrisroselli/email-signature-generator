<template>
  <div>
            
    <section>
        <h3 class="subtitle">Input Information</h3>
        <b-field>
            <b-input onblur="if (this.value == '') {this.value = 'Full Name';}" onfocus="if (this.value == 'Full Name') {this.value = '';}"
                v-model="fullName" type="text" icon-pack="fa" icon="user">
            </b-input>
        </b-field>
        <b-field>
            <b-input onblur="if (this.value == '') {this.value = 'Title';}" onfocus="if (this.value == 'Title') {this.value = '';}" v-model="title"
                type="text" icon-pack="fa" icon="id-badge">
            </b-input>
        </b-field>
        <b-field>
            <b-input onblur="if (this.value == '') {this.value = 'Phone Number';}" onfocus="if (this.value == 'Phone Number') {this.value = '';}"
                v-model="phone" type="tel" icon-pack="fa" icon="phone">
            </b-input>
        </b-field>
        <b-field>
            <b-input onblur="if (this.value == '') {this.value = 'Email';}" onfocus="if (this.value == 'Email') {this.value = '';}" v-model="email"
                type="email" icon-pack="fa" icon="envelope"></b-input>
        </b-field>
      
       
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
  },
  data: function () {
    return {

    }
  },
  methods: {
    // bus.$emit('')
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
