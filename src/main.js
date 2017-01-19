// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

//开启debug模式
Vue.config.debug = true;

Vue.use(VueResource);
Vue.use(VueRouter);

//muse-ui组件
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

//ElementUI组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)


//路由vue视图配置
import  Index from './components/Index.vue';
import aboutSchool from './components/Index/aboutSchool.vue';
import  aboutCollege from  './components/Index/aboutCollege.vue';

import Setting from './components/Setting.vue';
import aboutSoft from './components/Setting/aboutSoft.vue';
import  progress from './components/Setting/progress.vue';
import opinion from './components/Setting/opinion.vue';

import Login from './components/Login.vue';

//路由配置
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path : '', component : Index,
    },
    {
      path : '/Index/aboutSchool', component : aboutSchool,
    },
    {
      path : '/Index/aboutCollege',component : aboutCollege,
    },
    {
      path : '/Setting', component : Setting,
    },
    {
      path : '/Setting/aboutSoft', component : aboutSoft,
    },
    {
      path : '/Setting/progress', component : progress,
    },
    {
      path : '/Setting/opinion', component : opinion,
    },
    {
      path : '/Login', component : Login,
    },
  ]
})


/* 初始化一个路由视图,并挂载到#app上 */
const app1 = new Vue({
  router : router,
  render: h => h(App)
}).$mount('#app')

