import * as React from 'react';
import { LabelDataAttrs } from 'types/components/input';

export default function DefaultLabelForInput(
  labelData: LabelDataAttrs,
): JSX.Element {
  return (
    <>
      <label htmlFor={labelData.for} className={labelData.class}>
        {labelData.text ? labelData.text : '라벨'}
      </label>
    </>
  );
}
