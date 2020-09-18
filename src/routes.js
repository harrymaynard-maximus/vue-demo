import EnrolmentHome from './modules/enrolment/components/EnrolmentHome';
import EnrolmentPersonalInfo from './modules/enrolment/components/EnrolmentPersonalInfo';
import EnrolmentReview from './modules/enrolment/components/EnrolmentReview';
import EnrolmentSending from './modules/enrolment/components/EnrolmentSending';
import EnrolmentSubmission from './modules/enrolment/components/EnrolmentSubmission';

export default {
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
  }
}