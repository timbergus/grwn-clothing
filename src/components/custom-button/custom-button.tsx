import './custom-button.scss';

import { FC } from 'react';

const CustomButton: FC<CustomButtonProps> = ({
  children,
  onClick,
  isGoogleSignIn,
}) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default CustomButton;
