// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import inputInformation from './components/input-information.vue'
import outputSignature from './components/output-signature.vue'
import VModal from 'vue-js-modal'

Vue.use(VModal)

Vue.config.productionTip = false

Vue.component('inputInformation', inputInformation)
Vue.component('outputSignature', outputSignature)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
