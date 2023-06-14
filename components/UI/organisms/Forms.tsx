import { InputWithLabel, InputWithLabelArr } from 'types/components/input';
import Button, { LoginButton } from '../atoms/Buttons';
import DefaultInputWithLabel from '../molecules/InputWithLabels';
import { LoginFormData } from 'types/login';

export default function DefaultForm(inputAttrs: InputWithLabelArr) {
  console.log(inputAttrs);
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
  return <div></div>;
}
