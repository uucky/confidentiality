import LandingPage from './LandingPage';
import PolicyPage from './PolicyPage';
import SubmitPage from './SubmitPage';
import QuestionPage from './QuestionPage';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/policies', component: PolicyPage },
  { path: '/submit', component: SubmitPage },
  { path: '/question', component: QuestionPage },
];

export default routes;
