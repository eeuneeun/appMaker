import { LoginForm } from 'components/UI/organisms/form';
import { LoginFormData } from 'types/login';
import { setIsLogin } from 'store/reducers/authSlice';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from 'store/hookOfReducer';

export default function Signin() {
  const dispatch = useDispatch;

  function submitLoginInfo(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log('1');
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
    submitBtn: { text: '로그인', onClick: submitLoginInfo },
  };

  return (
    <main className="main flex-center">
      <LoginForm {...loginFormData} />
    </main>
  );
}
