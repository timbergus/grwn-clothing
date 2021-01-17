import './app.scss';

import { Route } from 'react-router-dom';

import Home from '../../pages/home/home';
import Shop from '../../pages/shop/shop';
import Contact from '../../pages/contact/contact';

export const App = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route path="/shop" component={Shop} />
    <Route path="/contact" component={Contact} />
  </>
);
