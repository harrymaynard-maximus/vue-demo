import EnrolmentHome from './modules/enrolment/components/EnrolmentHome.vue';
import EnrolmentPersonalInfo from './modules/enrolment/components/EnrolmentPersonalInfo.vue';
import EnrolmentReview from './modules/enrolment/components/EnrolmentReview.vue';
import EnrolmentSending from './modules/enrolment/components/EnrolmentSending.vue';
import EnrolmentSubmission from './modules/enrolment/components/EnrolmentSubmission.vue';
import EnrolmentSubmissionError from './modules/enrolment/components/EnrolmentSubmissionError.vue';

export interface Route {
  path: string;
  title: string;
  name: string;
  component: any;
  isComplete?: boolean;
}

export const routes: { [key: string]: Route } = {
  ENROLMENT_HOME: {
    path: '/msp/enrolment/home',
    title: 'Check Eligibility',
    name: 'EnrolmentHome',
    component: EnrolmentHome
  },
  ENROLMENT_PERSONAL_INFO: {
    path: '/msp/enrolment/personal-info',
    title: 'Personal Info',
    name: 'EnrolmentPersonalInfo',
    component: EnrolmentPersonalInfo
  },
  ENROLMENT_REVIEW: {
    path: '/msp/enrolment/review',
    title: 'Review',
    name: 'EnrolmentReview',
    component: EnrolmentReview
  },
  ENROLMENT_SENDING: {
    path: '/msp/enrolment/sending',
    title: 'Sending Application',
    name: 'EnrolmentSending',
    component: EnrolmentSending
  },
  ENROLMENT_SUBMISSION: {
    path: '/msp/enrolment/submission',
    title: 'Submission',
    name: 'EnrolmentSubmission',
    component: EnrolmentSubmission
  },
  ENROLMENT_SUBMISSION_ERROR: {
    path: '/msp/enrolment/submission-error',
    title: 'Submission Error',
    name: 'EnrolmentSubmissionError',
    component: EnrolmentSubmissionError
  }
}
export default routes;