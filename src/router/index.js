import { createRouter, createWebHistory} from "vue-router"
//import store from "@/store/index"
// import HelloWorld from '../components/HelloWorld.vue'
//import Home from "@/components/HelloWorld.vue"

const routes = [
/*    {
        path: "/",
        name: "Home",
        component: Home,
    },*/
   /* {
        path: "/mapview",
        name: "mapview",
        component: () => import("@/components/mapview/mapview"),
    },*/
    {
        path: "/",
        name: "Home",
        component: () => import("@/components/main/main"),
    },
    {
        path: "/private",
        name: "private",
        component: () => import("@/components/private"),
    },
    {
        path: "/private_use",
        name: "private_use",
        component: () => import("@/components/private_use"),
    },
]

const router = createRouter({
    history : createWebHistory(),
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    //base: process.env.BASE_URL,
    routes,
})

/*router.beforeEach((to, from, next) => {
    const isLogin = store.getters['isLogin'];
    if (to.path != "/login" && to.path != "/") {

        if (!isLogin) {
            next('/login');
        } else {
            next();
        }

    } else {q
        if(isLogin){
            next("/info");
        }else{
            next();
        }
    }
});*/

export {router}
