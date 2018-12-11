import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: [

    {
      path: '/model',
      name: 'model',
      component: () => import('@/views/Model/Index.vue')
    },

    {
      path: '/',
      name: 'index',
      component: () => import('@/views/Index/Index.vue')
    },


    {
      path: '/modelList',
      name: 'modelList',
      component: () => import('@/views/ModelList/Index.vue')
    },

    {
      path: '/dangWei',
      name: 'dangWei',
      component: () => import('@/views/DangWei/Index.vue')
    },

    {
      path: '/department',
      name: 'department',
      component: () => import('@/views/Department/index.vue')
    },

    {
      path: '/departmentDetail',
      name: 'departmentDetail',
      component: () => import('@/views/DepartmentDetail/index.vue')
    }


  ]
})
