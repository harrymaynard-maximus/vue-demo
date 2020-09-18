import VueRouter from 'vue-router';
import ACL from './modules/acl/components/ACL';
import DataService from './services/data-service';
import Enrolment from './modules/enrolment/components/Enrolment';
import routes from './routes';
import pageStateService from './services/page-state-service';

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
      redirect: routes.ENROLMENT_HOME.path,
      children: [
        {...routes.ENROLMENT_HOME},
        {...routes.ENROLMENT_PERSONAL_INFO},
        {...routes.ENROLMENT_REVIEW},
      ]
    },
    {...routes.ENROLMENT_SENDING},
    {...routes.ENROLMENT_SUBMISSION},
  ]
});

router.beforeEach((to, from, next) => {
  if ( (to.name !== routes.ENROLMENT_HOME.name && !DataService.hasAcceptedTerms)
    || (to.name !== routes.ENROLMENT_HOME.name && !pageStateService.isPageComplete(to.path))) {
    next({ name: routes.ENROLMENT_HOME.name });
    DataService.reset();
  } else {
    next();
  }
})

export default router;
