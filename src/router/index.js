import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import EnginDesign from '@/components/Pages/EnginDesign'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: "/engin-design",
      name: "EnginDesign",
      component: EnginDesign
    }
  ]
})
