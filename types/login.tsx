import { InputWithLabel, SubmitBtn } from './components/input';

export interface LoginFormData {
  id: InputWithLabel;
  password: InputWithLabel;
  submitBtn: SubmitBtn;
}

export interface LoginTryFunc {
  (id: string, password: string): boolean;
}
