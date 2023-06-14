import { getType } from 'components/utils/utilFunctions';
import { CompoButton } from '../atoms/Buttons';
import { CompEditBtnArrProps } from 'types/components/edit';

export default function ListOfButtons({ items }: CompEditBtnArrProps) {
  return (
    <ul className="edit-list">
      {items.map((item, idx) => {
        return (
          <li key={`list-${idx}`}>
            <CompoButton {...item} />
          </li>
        );
      })}
    </ul>
  );
}
