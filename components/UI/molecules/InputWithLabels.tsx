import * as React from 'react';
import { InputWithLabel } from 'types/components/input';
import DefaultLabelForInput from '../atoms/LabelForInputs';
import DefaultTextInput from '../atoms/TextInputs';

export default function DefaultInputWithLabel(
  InputWithLabelData: InputWithLabel,
): JSX.Element {
  return (
    <div className="input-wrap">
      <DefaultLabelForInput {...InputWithLabelData.label} />
      <DefaultTextInput {...InputWithLabelData.input} />
    </div>
  );
}
