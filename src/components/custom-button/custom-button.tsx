import './custom-button.scss';

import { FC } from 'react';

const CustomButton: FC<CustomButtonProps> = ({ children, onClick }) => (
  <button className="custom-button" onClick={onClick}>
    {children}
  </button>
);

export default CustomButton;
