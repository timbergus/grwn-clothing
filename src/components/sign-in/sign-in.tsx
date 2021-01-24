import './sign-in.scss';

import { FC, FormEvent, useState } from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

const SignIn: FC = () => {
  const [formData, setFormData] = useState<SignInProps>({
    email: '',
    password: '',
  });

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(formData.email, formData.password);
      setFormData({ email: '', password: '' });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="sign-in">
      <div className="title">I already have an account</div>
      <div>Sign in with your email and password</div>
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <FormInput
          id="sign-in-email"
          name="email"
          type="email"
          value={formData.email}
          required
          onChange={handleChange}
          label="Email"
        />
        <FormInput
          id="sign-in-password"
          name="password"
          type="password"
          value={formData.password}
          required
          onChange={handleChange}
          label="Password"
        />
        <div className="button">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
