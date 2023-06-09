import Link from 'next/link';

export default function LeftNav() {
  return (
    <nav className="leftnav">
      <ul>
        <li>
          <Link href="/page">페이지 목록</Link>
        </li>
        <li>
          <Link href="/data">레이아웃</Link>
        </li>
        <li>
          <Link href="/function">컴포넌트</Link>
        </li>
        <li>
          <Link href="/settings">설정</Link>
        </li>
      </ul>
    </nav>
  );
}
