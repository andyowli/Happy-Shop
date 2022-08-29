import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

//获取原型对象push函数
const originalPush = VueRouter.prototype.push
// 修改 原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err=>err)
}

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register/Register.vue')
  },{
    path: '/forget',
    name: 'forget',
    component: () => import('../views/forget/Forget.vue')
  },
  {
    path: '',
    name: '',
    component: () => import('../views/layout/Default.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/Home.vue')
      },
      {
        path: '/topic',
        name: 'topic',
        component: () => import('../views/topic/Topic.vue')
      },
      {
        path: '/tree',
        name: 'tree',
        component: () => import('../views/tree/TreeSelect.vue')
      },
      {
        path: '/car',
        name: 'car',
        component: () => import('../views/car/Car.vue')
      },
      {
        path: '/personal',
        name: 'personal',
        component: () => import('../views/personal/Personal.vue')
      },
    ]
  },
  {
    path: '/notshipped',
    name: 'notshipped',
    component: () => import('../views/personal/manage/notShipped/Notshipped.vue')
  },
  {
    path: '/shipped',
    name: 'shipped',
    component: () => import('../views/personal/manage/shipped/Shipped.vue')
  },
  {
    path: '/wallter',
    name: 'wallter',
    component: () => import('../views/personal/manage/wallter/index.vue')
  },
  {
    path: '/back',
    name: 'back',
    component: () => import('../views/personal/manage/wallter/back.vue')
  },
  {
    path: '/recharge',
    name: 'Recharge',
    component: () => import('../views/personal/manage/wallter/Recharge.vue')
  },
  {
    path: '/withdrawal',
    name: 'withdrawal',
    component: () => import('../views/personal/manage/wallter/Withdrawal.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/personal/manage/User.vue')
  },
  {
    path: '/address',
    name: 'address',
    component: () => import('../views/personal/manage/Address.vue')
  },
  {
    path: '/addAddress',
    name: 'addAddress',
    component: () => import('../views/personal/manage/addAress.vue')
  },
  {
    path: '/logistics',
    name: 'logistics',
    component: () => import('../views/personal/manage/logistics/Logistics.vue')
  },
  {
    path: '/buyAll',
    name: 'buyAll',
    component: () => import('../views/personal/manage/buyAll/BuyAll.vue')
  },
  {
    path: '/goodDetails',
    name: 'goodDetails',
    component: () => import('../views/details/goodDetails.vue')
  },
  {
    path: '/coupon',
    name: 'coupon',
    component: () => import('../views/personal/manage/coupon/Coupon.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/personal/manage/about/About.vue')
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('../views/personal/manage/help/Help.vue')
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: () => import('../views/personal/manage/feedback/Feedback.vue')
  },
  {
    path: '/modify',
    name: 'modify',
    component: () => import('../views/personal/manage/modifyAddress/modifyAddress.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
