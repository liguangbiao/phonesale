// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
//import $ from 'jquery'
import VDistpicker from 'v-distpicker'
import Vuex from 'vuex'
import VueScroller from 'vue-scroller'
import qs from 'qs'
import  { LoadingPlugin,AlertPlugin,ConfirmPlugin} from 'vux'


Vue.use(LoadingPlugin);
Vue.use(AlertPlugin);
Vue.use(ConfirmPlugin);
Vue.use(Vuex);
Vue.use(VueScroller);
Vue.config.productionTip = false;
Vue.component('v-distpicker', VDistpicker);//全局注册地区选择插件
var s="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJcImFiNzk0NGUxY2FkYTcxMDdlMDU3ZTA3NDBlMzRjYWEwXCIiLCJ1c2VyUHdkIjoiM2QwMzc0MmJlNjlhY2RkZTcxYTJkMjZhZjI5MGZlMDEiLCJ1c2VyTmFtZSI6IjE1MzYwNTY2NjY1IiwiZXhwIjoxNTQ2NTA1OTYxfQ.X6KUf6Mr36EP7VOykmjBpemby6tRkDpdz2Ppb2v-vqg"
var instance=axios.create({
    baseURL:'http://c20258214y.imwork.net:44056',
    // headers:{'Access-Control-Allow-Origin':'*',"Authorization": sessionStorage.getItem("token")},
    headers:{'Access-Control-Allow-Origin':'*',"Authorization": s},
    transformRequest: [function (data) {
        data = qs.stringify(data);
        return data;
    }],
    timeout:10000
});
//封装弹窗
Vue.prototype.$alert = function(title, msg) {
    this.$vux.alert.show({
        title: title,
        content: msg
    });
};
//定义一个请求拦截器
instance.interceptors.request.use(
    config => {
        store.state.isShow=true;
        return config
    },function (error) {
        store.state.isShow=false;
        Vue.$vux.alert.show({
            title: "提示",
            content: "请求出错"
        });
        return Promise.reject(error)
    }
);
//定义一个响应拦截器
instance.interceptors.response.use(function(config){
    store.state.isShow=false;//在这里对返回的数据进行处理
    // if(config.data.status.code == 1009){
    //     Vue.$vux.alert.show({
    //         title: "提示",
    //         content: "登录有效期已过！"
    //     });
    // }
    return config
},error => {
        store.state.isShow=false;
    // if (err && err.response) {
    //     switch (err.response.status) {
    //         case 400:
    //             err.message = '请求错误'
    //             break
    //         default:
    //     }
    // }
        Vue.$vux.alert.show({
            title: "提示",
            content: "服务器出错"
        });
        return Promise.reject(error)
    });
Vue.prototype.axios = instance;
//vuex状态管理
const store = new Vuex.Store({
    state:{
        isShow:false
    }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
    store,
  components: { App },
  template: '<App/>'
});
