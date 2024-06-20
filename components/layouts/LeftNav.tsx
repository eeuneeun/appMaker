import Link from 'next/link';

export default function LeftNav() {
  return (
    <nav className="leftnav">
      <ul className="menu-list">
        <li>
          <Link href="/page" className="page-link">
            앱 페이지
          </Link>
        </li>
        <li>
          <Link href="/data" className="data-link">
            데이터 연결
          </Link>
        </li>
        <li>
          <Link href="/settings" className="setting-link">
            설정
          </Link>
        </li>
      </ul>
    </nav>
  );
}
