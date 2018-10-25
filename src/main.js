import Vue from 'vue'
import App from './App'
import router from './router'

//#region vuex
// import Vuex from 'vuex'
// Vue.use(Vuex)
// var store = new Vuex.Store({
//   state: {
//     currentPosition: []
//   },
//   mutations: {
//     changeCurrentPosition(state, positon) {
//       state.currentPosition = positon;
//     },
//   }
// })
//#endregion

//#region 配置加载条

//#endregion

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
