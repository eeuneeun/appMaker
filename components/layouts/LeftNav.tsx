import Link from 'next/link';

export default function LeftNav() {
  return (
    <nav className="leftnav">
      <ul className="menu-list">
        <li>
          <Link href="/page">
            <a className="page-link">앱 페이지</a>
          </Link>
        </li>
        <li>
          <Link href="/data">
            <a className="data-link">데이터 연결</a>
          </Link>
        </li>
        <li>
          <Link href="/settings">
            <a className="setting-link">설정</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
