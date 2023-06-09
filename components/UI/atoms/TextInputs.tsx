import * as React from 'react';
import { InputAttrs } from 'types/components/input';

//type : text | password | tel
export default function DefaultTextInput(
  textInputData: InputAttrs,
): JSX.Element {
  return (
    <>
      <input
        type={textInputData.type ? textInputData.type : 'text'}
        id={textInputData.id}
        className={textInputData.class}
        placeholder={textInputData.placeholder ? textInputData.placeholder : ''}
      />
    </>
  );
}
