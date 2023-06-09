import styles from '../../../styles/modules/Button.module.css';

export default function TextInput() {
  return <button className={styles.btn}>Click me</button>;
}

export function DefaultInput() {
  return <input type="text" />;
}
export function PageLinkButton() {
  return <button className={styles.ham}></button>;
}
