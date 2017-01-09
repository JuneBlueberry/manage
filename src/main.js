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

//路由vue视图配置
import  Index from './components/Index.vue';
import Setting from './components/Setting.vue';
import Login from './components/Login.vue';
import aboutSoft from './components/Setting/aboutSoft.vue';
import  progress from './components/Setting/progress.vue';

//路由配置
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path : '', component : Index
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
      path : '/Login', component : Login
    },
  ]
})


/* 初始化一个路由视图,并挂载到#app上 */
const app1 = new Vue({
  router : router,
  render: h => h(App)
}).$mount('#app')

var app = {
// Application Constructor
  initialize: function() {
    this.bindEvents();
  },
// Bind Event Listeners
//
// Bind any events that are required on startup. Common events are:
// 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
// deviceready Event Handler
//
// The scope of 'this' is the event. In order to call the 'receivedEvent'
// function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function() {
    //app.receivedEvent('deviceready');
    appRouter.start(App, 'app')
    window.navigator.splashscreen.hide()
  },
// Update DOM on a Received Event
  receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');
    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');
    console.log('Received Event: ' + id);
  }
};
app.initialize();
