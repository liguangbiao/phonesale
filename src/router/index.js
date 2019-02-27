import Vue from 'vue'
import Router from 'vue-router'
// import phonehome from '@/components/phonehome'
// import phonedetail from '@/components/phonedetail'
// import car from '@/components/car'
// import addphone from '@/components/addphone'
// import phonepay from '@/components/phonepay'
// import auaddress from '@/components/auaddress'
// import editaddress from '@/components/editaddress'
// import addaddress from '@/components/addaddress'
// import bottomnav from '@/components/bottomnav'
// import order from '@/components/order'
// import usercenter from '@/components/usercenter'
// import waitlist from '@/components/waitlist'
// import test from '@/components/test'
Vue.use(Router)

export default new Router({
  // mode:"history",
  routes: [
    {
      path: '/',
      name: 'phonehome',
      component: () => import('@/components/phonehome')
    },
      {
          path:'/phonehome',
          name:'phonehome',
          component:() => import('@/components/phonehome'),
          children:[
              {
                  path:'/bottomnav',
                  component:() => import('@/components/bottomnav')
              }
          ]
      },
      {
          path:'/phonedetail',
          name:'phonedetail',
          component:() => import('@/components/phonedetail')
      },
      {
          path:'/car',
          name:'car',
          component:() => import('@/components/car')
      },
      {
          path:'/addphone',
          name:'addphone',
          component:() => import('@/components/addphone')
      },
      {
          path:'/phonepay',
          name:'phonepay',
          component:() => import('@/components/phonepay')
      },
      {
          path:'/auaddress',
          name:'auaddress',
          component:() => import('@/components/auaddress')
      },
      {
          path:'/editaddress',
          name:'editaddress',
          component:() => import('@/components/editaddress')
      },
      {
          path:'/addaddress',
          name:'addaddress',
          component:() => import('@/components/addaddress')
      },
      {
          path:'/test',
          name:'test',
          component:() => import('@/components/test')
      },
      {
          path:'/order',
          name:'order',
          component:() => import('@/components/order')
      },
      {
          path:'/usercenter',
          name:'usercenter',
          component:() => import('@/components/usercenter')
      },
      {
          path:'/waitlist',
          name:'waitlist',
          component:() => import('@/components/waitlist')
      },
  ]
})
