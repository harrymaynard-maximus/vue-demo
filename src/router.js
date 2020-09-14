import VueRouter from 'vue-router';
import ACL from './components/acl/ACL';
import Enrolment from './components/enrolment/Enrolment';
import EnrolmentHome from './components/enrolment/EnrolmentHome';
import EnrolmentPersonalInfo from './components/enrolment/EnrolmentPersonalInfo';
import EnrolmentReview from './components/enrolment/EnrolmentReview';

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
      redirect: '/msp/enrolment/home',
      children: [
        {
          path: '/msp/enrolment/home',
          component: EnrolmentHome
        },
        {
          path: '/msp/enrolment/personal-info',
          component: EnrolmentPersonalInfo
        },
        {
          path: '/msp/enrolment/review',
          component: EnrolmentReview
        }
      ]
    }
  ]
});

export default router;
