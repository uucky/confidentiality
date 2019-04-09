import LandingPage from './LandingPage';
import PolicyPage from './PolicyPage';
import ShowcasePage from './ShowcasePage';
import QuestionPage from './QuestionPage';
import ResultPage from './ResultPage';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/policies', component: PolicyPage },
  { path: '/question', component: QuestionPage },
  { path: '/showcase', component: ShowcasePage },
  { path: '/result', component: ResultPage },
];

export default routes;
