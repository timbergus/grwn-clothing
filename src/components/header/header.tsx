import './header.scss';

import { FC } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/icons/crown.svg';

const Header: FC<HeaderProps> = ({ currentUser }) => {
  const handleSignOut = () => auth.signOut();
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={handleSignOut}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/access">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
