import './app.scss';

import { Route } from 'react-router-dom';

import Home from '../../pages/home/home';
import Shop from '../../pages/shop/shop';
import Contact from '../../pages/contact/contact';
import Access from '../../pages/access/access';
import Header from '../header/header';

export const App = () => (
  <>
    <Header />
    <Route exact path="/" component={Home} />
    <Route path="/shop" component={Shop} />
    <Route path="/contact" component={Contact} />
    <Route path="/access" component={Access} />
  </>
);
