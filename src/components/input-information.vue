<template>
  <div>
            
    <section>
       
        <div class="field">
          <div class="control has-icons-left has-icons-right">
            <input name="name" v-validate="'required|alpha'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('name') }" class="input" onblur="if (this.value == '') {this.value = 'Full Name';}" onfocus="if (this.value == 'Full Name') {this.value = '';}"
                :value="fullName" @input="$emit('update:fullName', $event.target.value)" type="text">
                    <i v-show="errors.has('name')" class="fa fa-warning"></i>
                    <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
                    <span class="icon is-small is-left">
                      <i class="fa fa-user"></i>
                    </span>
          </div>
         </div>
        <div class="field">
          <div class="control has-icons-left has-icons-right">

            <input name="title" v-validate="'required|alpha'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('title') }" class="input" onblur="if (this.value == '') {this.value = 'Title';}" onfocus="if (this.value == 'Title') {this.value = '';}" :value="title" @input="$emit('update:title', $event.target.value)" type="text">
                    <i v-show="errors.has('title')" class="fa fa-warning"></i>
                    <span v-show="errors.has('title')" class="help is-danger">{{ errors.first('title') }}</span>
                    <span class="icon is-small is-left">
                      <i class="fa fa-id-badge"></i>
                    </span>
          </div>
        </div>
        <div class="field">
          <div class="control has-icons-left has-icons-right">
            <input name="phone" v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('phone') }" class="input" onblur="if (this.value == '') {this.value = 'Phone Number';}" onfocus="if (this.value == 'Phone Number') {this.value = '';}" :value="phone" @input="$emit('update:phone', $event.target.value)" type="text">
            <!-- v-mask="'(###) ###-####'" -->
             <i v-show="errors.has('phone')" class="fa fa-warning"></i>
            <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
                    <span class="icon is-small is-left">
                      <i class="fa fa-phone"></i>
                    </span>
          </div>
        </div>
        <div class="field">
          <div class="control has-icons-left has-icons-right">
            <input name="email" v-validate="'required|email'" data-vv-delay="1000" :class="{'input': true, 'is-danger': errors.has('email') }" class="input" onblur="if (this.value == '') {this.value = 'Email';}" onfocus="if (this.value == 'Email') {this.value = '';}" :value="email" @input="$emit('update:email', $event.target.value)" type="text">
            <i v-show="errors.has('email')" class="fa fa-warning"></i>
                    <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}
                    </span>
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
          </div>
        </div>
    </section>
               
  </div>
</template>

<script>
import {mask} from 'vue-the-mask'
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
  directives: {mask}
}
</script>

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
