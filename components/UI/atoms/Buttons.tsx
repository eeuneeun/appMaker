import styles from '../../../styles/modules/Button.module.css';
import { CompoBtn, SubmitBtn } from 'types/components/input';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// @클릭이 가능한 기본 유형 버튼
export default function Button() {
  return <button className={styles.btn}>Click me</button>;
}

// @상단 헤더 좌측의 햄버거 버튼
export function HamburgerButton({ ...pageProps }) {
  return (
    <button className={styles.ham} onClick={pageProps.onClick}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

// @다른 페이지로 이동하는 링크 버튼
export function PageLinkButton() {
  return <button className={styles.ham}>PageLinkButton</button>;
}

// @로그인 폼 하단의 버튼
export function LoginButton(LoginBtnData: SubmitBtn) {
  return (
    <button
      className={`login-btn ${LoginBtnData.class ? LoginBtnData.class : ''}`}
      id={LoginBtnData.id}
      onClick={LoginBtnData.onClick}
    >
      {LoginBtnData.text}
    </button>
  );
}

// @에디터 컴포넌트 패널의 버튼
export function CompoButton(CompoBtnData: CompoBtn) {
  return (
    <button
      className={`basic edit-btn ${
        CompoBtnData.class ? CompoBtnData.class : ''
      }`}
      id={CompoBtnData.id}
      onClick={CompoBtnData.onClick}
    >
      {CompoBtnData.text}
    </button>
  );
}

export function PageDelButton(PageDelProps: SubmitBtn) {
  return (
    <button
      className={`page-del-btn ${
        PageDelProps.class ? 'PageDelProps.class' : ''
      }`}
      id={`${PageDelProps.id ? 'PageDelProps.id' : ''}`}
      onClick={PageDelProps.onClick}
    >
      <DeleteForeverIcon />
    </button>
  );
}
