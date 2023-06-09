import ProgressBar, { Breadcrumb } from 'components/UI/organisms/Bar';

export default function Home() {
  return (
    <main className="main">
      <a href="/page">slot 에 오신것을 환영합니다!</a>
      <ProgressBar />
      <Breadcrumb />
    </main>
  );
}
