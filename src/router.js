import VueRouter from 'vue-router';
import ACL from './components/ACL';

const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/msp/acl',
      component: ACL,
      children: []
    },
    { 
      path: '/test',
      component: ACL,
      children: []
    }
  ]
});

export default router;
