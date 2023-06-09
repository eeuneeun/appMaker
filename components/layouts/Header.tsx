import { HamburgerButton } from 'components/UI/atoms/Buttons';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <HamburgerButton />
      <h1>
        <a href="/">slot</a>
      </h1>

      <div>
        <Link href={'/signin/'}>
          <a className="signin-link">로그인</a>
        </Link>
      </div>
    </header>
  );
}
