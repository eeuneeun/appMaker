import { LoginFormData } from 'types/login';
import { LoginForm } from '../organisms/Forms';

export default function login(loginFormData: LoginFormData) {
  return (
    <div className="login-form-wrap">
      <LoginForm {...loginFormData} />
    </div>
  );
}
