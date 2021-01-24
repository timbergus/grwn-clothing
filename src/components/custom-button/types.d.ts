interface CustomButtonProps {
  type?: 'button' | 'submit' | 'reset';
  children?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isGoogleSignIn?: boolean;
}
