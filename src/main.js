import Vue from 'vue'
import App from './App.vue'
// import vuetify from 'vuetify'
import VueRouter from 'vue-router'
// import 'vuetify/dist/vuetify.min.css'
import firebase from 'firebase'


import login from './components/login.vue'
import inscription from './components/inscription.vue'
import profil from './components/profil.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)
// Vue.use(vuetify)
Vue.use(firebase)

const config = {
  apiKey: "AIzaSyBTYZTXrqvHQdnN1fS4rXjkOQPVGppGh34",
  authDomain: "login-b7a81.firebaseapp.com",
  projectId: "login-b7a81",
  storageBucket: "login-b7a81.appspot.com",
  messagingSenderId: "41591686576",
  appId: "1:41591686576:web:c9ebc434ffb601d9680275",
  measurementId: "G-N6Z9ETD4QL"
}
firebase.initializeApp(config)

const routes = [
  { path: '/login', component: login },
  { path: '/inscription', component: inscription },
  { path: '/profil', 
    name: 'profil',
    component: profil
  }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // cette route demande une autorisation, vérifions si l'utilisateur est logué.
//     // sinon, redirigeons le sur la page de login.
//     if (!auth.loggedIn()) {
//       next({
//         path: '/login',
//         query: { redirect: to.profil }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // assurez vous de toujours appeler `next()` !
//   }
// })
new Vue({
  router,
  firebase,
  // vuetify,
  render: h => h(App),
}).$mount('#app')
