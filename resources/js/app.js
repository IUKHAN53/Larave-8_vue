require('./bootstrap');
require('admin-lte')
require('alpinejs');
import Vue from 'vue'
import VueRouter from 'vue-router'
window.Vue = require('vue')


Vue.use(VueRouter)

let dashboard = Vue.component("dashboard", () => import("./components/dashboard"));
let profile = Vue.component("profile", () => import("./components/profile"));

let routes = [
    { path: '/dashboard', component: dashboard},
    { path: '/profile', component: profile}
]

let router = new VueRouter({
    mode : 'history',
    routes
})


let app = new Vue({
    el : ('#app'),
    router
})