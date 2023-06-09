import { AppProps /* , AppContext */ } from 'next/app';
import Header from 'components/layouts/Header';
import LeftNav from 'components/layouts/LeftNav';
import RightNav from 'components/layouts/RightNav';
import 'styles/reset.css';
import 'styles/colors.css';
import 'styles/resources.css';
import 'styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <LeftNav />
      <RightNav />
      <Component {...pageProps} />
    </>
  );
}

export default App;
