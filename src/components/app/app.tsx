import './app.scss';

import { Route } from 'react-router-dom';

import Home from '../../pages/home/home';

export const App = () => (
  <>
    <Route exact path="/" component={Home} />
  </>
);
