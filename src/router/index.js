import Vue from 'vue'
import Router from 'vue-router'
import phonehome from '@/components/phonehome'
import phonedetail from '@/components/phonedetail'
import car from '@/components/car'
import addphone from '@/components/addphone'
import phonepay from '@/components/phonepay'
import auaddress from '@/components/auaddress'
import editaddress from '@/components/editaddress'
import addaddress from '@/components/addaddress'
import bottomnav from '@/components/bottomnav'
import order from '@/components/order'
import usercenter from '@/components/usercenter'
import waitlist from '@/components/waitlist'
import test from '@/components/test'
Vue.use(Router)

export default new Router({
  // mode:"history",
  routes: [
    {
      path: '/',
      name: 'phonehome',
      component: phonehome,
    },
      {
          path:'/phonehome',
          name:'phonehome',
          component:phonehome,
          children:[
              {
                  path:'/bottomnav',
                  component:bottomnav
              }
          ]
      },
      {
          path:'/phonedetail',
          name:'phonedetail',
          component:phonedetail
      },
      {
          path:'/car',
          name:'car',
          component:car,
      },
      {
          path:'/addphone',
          name:'addphone',
          component:addphone
      },
      {
          path:'/phonepay',
          name:'phonepay',
          component:phonepay
      },
      {
          path:'/auaddress',
          name:'auaddress',
          component:auaddress
      },
      {
          path:'/editaddress',
          name:'editaddress',
          component:editaddress
      },
      {
          path:'/addaddress',
          name:'addaddress',
          component:addaddress
      },
      {
          path:'/test',
          name:'test',
          component:test
      },
      {
          path:'/order',
          name:'order',
          component:order
      },
      {
          path:'/usercenter',
          name:'usercenter',
          component:usercenter
      },
      {
          path:'/waitlist',
          name:'waitlist',
          component:waitlist
      },
  ]
})
