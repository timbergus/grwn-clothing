import './app.scss';

import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import Home from '../../pages/home/home';
import Shop from '../../pages/shop/shop';
import Contact from '../../pages/contact/contact';
import Access from '../../pages/access/access';
import Header from '../header/header';

export const App = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    return auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, {});
        userRef?.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  return (
    <>
      <Header currentUser={currentUser} />
      <Route exact path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/contact" component={Contact} />
      <Route path="/access" component={Access} />
    </>
  );
};
