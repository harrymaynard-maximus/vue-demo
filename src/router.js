import VueRouter from 'vue-router';
import Enrolment from './modules/enrolment/components/Enrolment.vue';
import routes from './routes';
import pageStateService from './modules/common/services/page-state-service';
import moduleNames from './module-names';

const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: routes.LANDING_PAGE.path,
      name: routes.LANDING_PAGE.name,
      component: routes.LANDING_PAGE.component,
    },
    { 
      path: '/msp/enrolment',
      component: Enrolment,
      redirect: routes.ENROLMENT_HOME.path,
      children: [
        {
          path: routes.ENROLMENT_HOME.path,
          name: routes.ENROLMENT_HOME.name,
          component: routes.ENROLMENT_HOME.component
        },
        {
          path: routes.ENROLMENT_PERSONAL_INFO.path,
          name: routes.ENROLMENT_PERSONAL_INFO.name,
          component: routes.ENROLMENT_PERSONAL_INFO.component
        },
        {
          path: routes.ENROLMENT_REVIEW.path,
          name: routes.ENROLMENT_REVIEW.name,
          component: routes.ENROLMENT_REVIEW.component
        },
      ]
    },
    {
      path: routes.ENROLMENT_SENDING.path,
      name: routes.ENROLMENT_SENDING.name,
      component: routes.ENROLMENT_SENDING.component
    },
    {
      path: routes.ENROLMENT_SUBMISSION.path,
      name: routes.ENROLMENT_SUBMISSION.name,
      component: routes.ENROLMENT_SUBMISSION.component
    },
    {
      path: routes.ENROLMENT_SUBMISSION_ERROR.path,
      name: routes.ENROLMENT_SUBMISSION_ERROR.name,
      component: routes.ENROLMENT_SUBMISSION_ERROR.component
    }
  ]
});

const shouldBlockNavigation = (moduleName, homeRouteName, to) => {
  if(to && to.name && to.name.toLowerCase().startsWith(moduleName.toLowerCase())
  && homeRouteName !== to.name
  && !pageStateService.isPageComplete(to.path)) {
    return true;
  }
  return false;
};

router.beforeEach((to, from, next) => {
  // Allow landing page entry.
  if (to.path === routes.LANDING_PAGE.path) {
    next();
  }

  // Enrolment home redirect.
  else if (shouldBlockNavigation(moduleNames.ENROLMENT, routes.ENROLMENT_HOME.name, to)) {
    next(false);
  }
  
  // Catch-all (navigation).
  else {
    next();
  }
});

export default router;
