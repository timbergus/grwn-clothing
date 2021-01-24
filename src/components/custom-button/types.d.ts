interface CustomButtonProps {
  children?: string;
  onClick: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isGoogleSignIn?: boolean;
}
