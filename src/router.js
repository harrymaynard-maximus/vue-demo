import VueRouter from 'vue-router';
import ACL from './components/acl/ACL';
import Enrolment from './components/enrolment/Enrolment';
import EnrolmentHome from './components/enrolment/EnrolmentHome';

const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/msp/acl',
      component: ACL,
      children: []
    },
    { 
      path: '/msp/enrolment',
      component: Enrolment,
      children: [
        {
          path: '/msp/enrolment/home',
          component: EnrolmentHome
        }
      ]
    }
  ]
});

export default router;
