import { LoginForm } from 'components/UI/organisms/form';
import { LoginFormData } from 'types/login';

export default function Signin() {
  function SubmitLoginInfo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e);
  }

  const loginFormData: LoginFormData = {
    id: {
      input: { id: 'id', class: 'login-id', type: 'text', placeholder: 'ID' },
      label: {
        for: 'id',
        class: '',
        text: '로그인 아이디',
      },
    },
    password: {
      input: {
        id: 'password',
        class: 'login-password',
        type: 'password',
        placeholder: '******',
      },
      label: {
        for: 'password',
        class: '',
        text: '패스워드',
      },
    },
    submitBtn: { text: '로그인', onClick: SubmitLoginInfo },
  };

  return (
    <main className="main flex-center">
      <LoginForm {...loginFormData} />
    </main>
  );
}
