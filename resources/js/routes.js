import VueRouter from 'vue-router';
import Home from './mainComponent/Home';
import Search from './mainComponent/Search';
import Post from './mainComponent/Post';
import Card from './mainComponent/Card';

const routes = [
    {
        path: "/",
        component: Home,
        name: "home"
    },
    {   
        path: "/search",
        component: Search,
        name: "search"
    },
    {   
        path: "/post",
        component: Post,
        name: "post"
    },
    {   
        path: "/card/:id",
        component: Card,
        name: "card"
    }

]


const router = new VueRouter({
    routes,
    mode: "history",
});

export default router
