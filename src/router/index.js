import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import outputSignature from '@/components/output-signature'
import inputInformation from '@/components/input-information'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/output-signature',
      name: 'outputSignature',
      component: outputSignature
    },
    {
      path: '/input-information',
      name: 'inputInformation',
      component: inputInformation
    }
  ]
})
