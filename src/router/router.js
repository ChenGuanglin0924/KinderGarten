import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入组件
// import HomePage from '@/views/home/Home.vue';
// import AboutMe from '@/views/about/About.vue';
// import MainPage from '@/views/main/Main.vue';

// import BlogLog from '@/views/main/content/log/Log.vue';
// import BlogLogArticle from '@/views/main/content/log/LogArticle.vue';
// import BlogTool from '@/views/main/content/tool/Tool.vue';
// import BlogEssay from '@/views/main/content/essay/Essay.vue';
// import BlogMessage from '@/views/main/content/message/Message.vue';

const HomePage = () => import(/* webpackChunkName:'HomePage' */ '@/views/home/Home.vue');
const AboutMe = () => import(/* webpackChunkName:'AboutMe' */ '@/views/about/About.vue');
const MainPage = () => import(/* webpackChunkName:'MainPage' */ '@/views/main/Main.vue');

const BlogLog = () => import(/* webpackChunkName:'BlogLog' */ '@/views/main/content/log/Log.vue');
const BlogLogArticle = () => import(/* webpackChunkName:'BlogLogArticle' */ '@/views/main/content/log/LogArticle.vue');
const BlogTool = () => import(/* webpackChunkName:'BlogTool' */ '@/views/main/content/tool/Tool.vue');
const BlogEssay = () => import(/* webpackChunkName:'BlogEssay' */ '@/views/main/content/essay/Essay.vue');
const BlogMessage = () => import(/* webpackChunkName:'BlogMessage' */ '@/views/main/content/message/Message.vue');

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomePage,
        props: true
    },
    {
        path: '/mian',
        // name: 'main',
        component: MainPage,
        props: true,
        children: [
            {
                path: '/main/log',
                name: 'log',
                component: BlogLog,
                props: true,
            },
            {
                path: '/main/log/:uuid',
                name: 'log-article',
                component: BlogLogArticle,
                props: true,
            },
            {
                path: '/main/tool',
                name: 'tool',
                component: BlogTool,
                props: true
            },
            {
                path: '/main/essay',
                name: 'essay',
                component: BlogEssay,
                props: true
            },
            {
                path: '/main/message',
                name: 'message',
                component: BlogMessage,
                props: true
            },
            {
                path: '',
                component: BlogLog,
                props: true
            }
        ]
    },
    {
        path: '/about',
        name: 'about',
        component: AboutMe,
        props: true
    },
    {
        path: '/', 
        redirect: '/home',
        props: true
    }
]

var router =  new VueRouter({
    // mode: 'history',
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact',
    routes
})
export default router;