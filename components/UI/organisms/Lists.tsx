import { CompoButton } from '../atoms/Buttons';
import { CompEditBtnArrProps, imgCardArrProps } from 'types/components/edit';
import { DefaultImgCard } from '../molecules/Cards';

export function ListOfButtons({ items }: CompEditBtnArrProps) {
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

export function ImgCardList({ items }: imgCardArrProps) {
  return (
    <ul className="img-card-list">
      {items.map((item, idx) => {
        return (
          <li key={`list-${idx}`}>
            <DefaultImgCard {...item} />
          </li>
        );
      })}
    </ul>
  );
}
