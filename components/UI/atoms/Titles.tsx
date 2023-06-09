import styles from '../../../styles/modules/Titles.module.css';

export function Title() {
  return <div></div>;
}

export function ProgressBarTitle(props: { title: string }) {
  return <h4>{props.title}</h4>;
}

interface BreadcrumbTitleProps {
  title: string; //제목
  isActive: boolean; //현재 breadcrumb 항목 활성화 여부
  onClick: () => void;
}

export function BreadcrumbTitle(props: BreadcrumbTitleProps) {
  const { title, isActive, onClick } = props;

  return (
    <span
      className={`${styles['breadcrumb-item']} ${
        isActive ? styles.active : ''
      }`}
      onClick={onClick}
    >
      <p>{title}</p>
    </span>
  );
}
