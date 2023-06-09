import styles from '../../../styles/modules/Items.module.css';
import { ProgressBarCircle } from '../atoms/DecorateElement';
import { BreadcrumbTitle, ProgressBarTitle } from '../atoms/Titles';

interface ProgressBarItemsProps {
  items: string[];
  activeIndex: number;
}

export default function ProgressBarItems(props: ProgressBarItemsProps) {
  const { items, activeIndex } = props;

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <ProgressBarCircle active={index <= activeIndex} />
          <ProgressBarTitle title={item} />
        </div>
      ))}
    </div>
  );
}

interface BreadcrumbItemsProps {
  titles: string[];
  activeIndex: number;
  onItemClick: (index: number) => void;
}

export function BreadcrumbItems(props: BreadcrumbItemsProps) {
  const { titles, activeIndex, onItemClick } = props;

  return (
    <div className={styles.breadcrumb}>
      {titles.map((title, index) => {
        if (index <= activeIndex) {
          return (
            <BreadcrumbTitle
              key={index}
              title={title}
              isActive={index === activeIndex}
              onClick={() => onItemClick(index)}
            />
          );
        }
        return null; // 현재 타이틀 이후의 타이틀은 렌더링하지 않음
      })}
    </div>
  );
}
