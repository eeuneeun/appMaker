import { InputWithLabel, InputWithLabelArr } from 'types/components/input';
import Button, { LoginButton } from '../atoms/Buttons';
import DefaultInputWithLabel from '../molecules/InputWithLabels';
import { LoginFormData } from 'types/login';

export default function DefaultForm(inputAttrs: InputWithLabelArr) {
  return (
    <form>
      {inputAttrs.items.map((item: InputWithLabel, idx: number) => {
        return <DefaultInputWithLabel {...item} key={`key-${idx}`} />;
      })}
      <Button />
    </form>
  );
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
  const signupFormAttr = {
    id: {
      input: {
        id: 'id',
        class: 'basic input',
        type: 'text',
        placeholder: 'id',
      },
      label: {
        for: 'id',
        class: '',
        text: '아이디',
      },
    },
    password: {
      input: {
        id: 'password',
        class: 'basic input',
        type: 'password',
        placeholder: '********',
      },
      label: {
        for: 'password',
        class: '',
        text: '패스워드',
      },
    },
    name: {
      input: {
        id: 'name',
        class: 'basic input',
        type: 'text',
        placeholder: '이름',
      },
      label: {
        for: 'name',
        class: '',
        text: '이름',
      }
    },
    email: {
      input: {
        id: 'email',
        class: 'basic input',
        type: 'text',
        placeholder: '****@****.***',
      },
      label: {
        for: 'email',
        class: '',
        text: '이메일',
      }
    },
    addr: {
      input: {
        id: 'addr',
        class: 'basic input',
        type: 'text',
        placeholder: '주소',
      },
      label: {
        for: 'addr',
        class: '',
        text: '주소',
      },
    }
    ,
    submitBtn: {
      class: 'signup-btn',
      text: '가입'
    }
  }
  return <div>
    < form className="signup-form" >
      <DefaultInputWithLabel {...signupFormAttr.id} />
      <DefaultInputWithLabel {...signupFormAttr.password} />
      <DefaultInputWithLabel {...signupFormAttr.name} />
      <DefaultInputWithLabel {...signupFormAttr.addr} />

      <LoginButton {...signupFormAttr.submitBtn} />
    </form >
  </div >;
}
