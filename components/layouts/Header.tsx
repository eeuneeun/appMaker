import { HamburgerButton } from 'components/UI/atoms/Buttons';
import Link from 'next/link';
import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from 'react-redux';

export default function Header() {
  const [isLeftNavOpen, setIsLeftNavOpen] = useState(false);
  const { isLogin } = useSelector((state: any) => ({
    // isLoading: state.loadingSlice.isLoading,
    isLogin: state.authSlice.isLogin,
    // isAdmin: state.authSlice.isAdmin,
    // accToken: state.tokenSlice.accToken,
  }));

  function onClick() {
    setIsLeftNavOpen(!isLeftNavOpen);
  }

  return (
    <header className={`header ${isLeftNavOpen ? 'leftnav-open' : ''}`}>
      <HamburgerButton onClick={onClick} />
      <h1>
        <a href="/">AppMaker</a>
      </h1>

      <div>
        {isLogin ? (
          <Link href={'/signin/'} className="signin-link">
              로그아웃
              <LogoutIcon />
          </Link>
        ) : (
          <Link href={'/signin/'} className="signin-link">
            로그인
          </Link>
        )}
      </div>
    </header>
  );
}
