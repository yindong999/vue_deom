import Vue from 'vue'
import Router from 'vue-router'
 

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/', redirect:'/Home'},
    {path:'/Home', component:()=>import('@/views/Home')},
    {path:'/GoodsList', component:()=>import('@/views/GoodsList')},
    {
      path:'/New', 
      component:()=>import('@/views/New'),
      children:[
        {path:'GnNew',component:()=>import('@/views/GnNew')},
        {path:'GwNew',component:()=>import('@/views/GwNew')},
        {path:'MoreNew', component:()=>import('@/views/MoreNew'),name:'MoreNew'}
      ]
    }
  ]
})
