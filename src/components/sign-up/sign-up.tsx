import './sign-up.scss';

import { FC, FormEvent, useState } from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const SignUp: FC = () => {
  const [formData, setFormData] = useState<SignUpProps>({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        formData.email,
        formData.password,
      );
      await createUserProfileDocument(user, {
        displayName: formData.displayName,
      });
      setFormData({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="sign-up">
      <div className="title">I do not have an account</div>
      <div>Sign up with your email and password</div>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          id="sign-up-display-name"
          name="displayName"
          type="text"
          value={formData.displayName}
          required
          onChange={handleChange}
          label="Display Name"
        />
        <FormInput
          id="sign-up-email"
          name="email"
          type="email"
          value={formData.email}
          required
          onChange={handleChange}
          label="Email"
        />
        <FormInput
          id="sign-up-password"
          name="password"
          type="password"
          value={formData.password}
          required
          onChange={handleChange}
          label="Password"
        />

        <FormInput
          id="sign-up-confirm-password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          required
          onChange={handleChange}
          label="Confirm Password"
        />
        <div className="button">
          <CustomButton type="submit">Sign Up</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
