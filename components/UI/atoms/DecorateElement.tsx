import styles from '../../../styles/modules/DecorateElements.module.css';

//Progressive bar circle
interface CircleProps {
  active: boolean;
}

export function ProgressBarCircle(props: CircleProps) {
  const { active } = props;
  const circleClass = active
    ? `${styles.circle} ${styles.active}`
    : styles.circle;

  return (
    <div className={styles.wrapper}>
      <div className={circleClass}></div>
    </div>
  );
}
