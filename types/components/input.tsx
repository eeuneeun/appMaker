export interface InputAttrs {
  id?: string;
  class?: string;
  type: string;
  placeholder?: string;
  onChange?: any;
}

export interface LabelDataAttrs {
  for: string;
  class?: string;
  text?: string;
}

export interface InputWithLabel {
  input: InputAttrs;
  label: LabelDataAttrs;
}

export interface InputWithLabelArr {
  items: InputWithLabel[];
}

export interface BtnClickFunc {
  //eslint-disable-next-line no-unused-vars
  (val: any): any;
}

export interface SubmitBtn {
  id?: string;
  class?: string;
  text?: string;
  onClick?: BtnClickFunc;
}

export interface InputClickFunc {
  (e: React.FormEvent<HTMLFormElement>): void;
}
