import VueRouter from 'vue-router';
import DataService from './services/data-service';
import Enrolment from './modules/enrolment/components/Enrolment.vue';
import routes from './routes';
import pageStateService from './modules/common/services/page-state-service';

const router = new VueRouter({
  mode: 'history',
  routes: [
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
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.name !== routes.ENROLMENT_HOME.name && !pageStateService.isPageComplete(to.path)) {
    next({ name: routes.ENROLMENT_HOME.name });
    DataService.reset();
  } else {
    next();
  }
})

export default router;
