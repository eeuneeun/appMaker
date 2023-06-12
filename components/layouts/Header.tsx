import { HamburgerButton } from 'components/UI/atoms/Buttons';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isLeftNavOpen, setIsLeftNavOpen] = useState(false);

  function onClick() {
    setIsLeftNavOpen(!isLeftNavOpen);
  }

  return (
    <header className={`header ${isLeftNavOpen ? 'leftnav-open' : ''}`}>
      <HamburgerButton onClick={onClick} />
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
