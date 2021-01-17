import './sign-in.scss';

import { FormEvent, useState } from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData({ email: '', password: '' });
  };

  return (
    <div className="sign-in">
      <div className="title">I already have an account</div>
      <div>Sign in with your email and password</div>
      <form noValidate>
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
        <CustomButton onClick={handleSubmit}>Sign In</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
