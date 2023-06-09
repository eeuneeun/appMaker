import { LoginButton } from '../atoms/Buttons';
import DefaultInputWithLabel from '../molecules/InputWithLabels';
import { LoginFormData } from 'types/login';

export default function DefaultForm() {
  return <div></div>;
}

//id
//password
//submitBtn
export function LoginForm(loginFormData: LoginFormData) {
  return (
    <form className="login-form">
      <DefaultInputWithLabel {...loginFormData.id} />
      <DefaultInputWithLabel {...loginFormData.password} />

      <LoginButton {...loginFormData.submitBtn} />
    </form>
  );
}

export function SigninForm() {
  return <div></div>;
}
