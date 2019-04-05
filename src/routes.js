import LandingPage from './LandingPage';
import PolicyPage from './PolicyPage';
import ShowcasePage from './ShowcasePage';
import QuestionPage from './QuestionPage';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/policies', component: PolicyPage },
  { path: '/question', component: QuestionPage },
  { path: '/showcase', component: ShowcasePage },
];

export default routes;
