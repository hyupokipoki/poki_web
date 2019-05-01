import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from '../views/UserLogin.vue';
import ChatRoom from '../views/ChatRoom.vue';
import DashBoard from '../views/Admin/DashBoard.vue';
import IntentSetting from '../views/Admin/IntentSetting.vue';

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'UserLogin',
    component: UserLogin,
  },{
    path: '/chat/:userName',
    name: 'ChatRoom',
    component: ChatRoom,
  },
    {
      path: '/admin',
      redirect: '/admin/dashboard',
      name: 'AdminDashBoard',
      component: DashBoard,
    },
    {
      path: '/admin/dashboard',
      name: 'AdminDashBoard',
      component: DashBoard,
    }, 
    {
      path: '/admin/intentsetting',
      name: 'AdminIntentSetting',
      component: IntentSetting,
    },{
      path: '*',
      redirect: '/'
    }
  ]
})
