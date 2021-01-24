import './custom-button.scss';

import { FC } from 'react';

const CustomButton: FC<CustomButtonProps> = ({
  type = 'button',
  children,
  onClick,
  isGoogleSignIn,
}) => (
  <button
    type={type}
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default CustomButton;
