import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes=[
    {
        path: '/',
        name: 'home',
        component:()=> import("../components/Home.vue"),
    },
    {
        path: '/form',
        name: 'form',
        component:()=> import("../components/Form.vue")
    }
   
]

const router = new VueRouter({routes, })
export default router;