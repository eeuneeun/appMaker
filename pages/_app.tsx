import { AppProps } from 'next/app';
import Header from 'components/layouts/Header';
import LeftNav from 'components/layouts/LeftNav';
import RightNav from 'components/layouts/RightNav';
import { wrapper } from 'store/storeConfig';
import PropTypes from 'prop-types';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'styles/reset.css';
import 'styles/colors.css';
import 'styles/resources.css';
import 'styles/globals.css';
import '/styles/app.css';

import { useSelector } from 'react-redux';
import Signin from './signin';

function App({ Component, pageProps }: AppProps) {
  // - 로그인 여부
  // - 관리자 여부
  // - Access Token
  const { isLogin } = useSelector((state: any) => ({
    // isLoading: state.loadingSlice.isLoading,
    isLogin: state.authSlice.isLogin,
    // isAdmin: state.authSlice.isAdmin,
    // accToken: state.tokenSlice.accToken,
  }));
  return (
    <div>
      {isLogin ? (
        <>
          <Header />
          <LeftNav />
          <RightNav />
          <Component {...pageProps} />
        </>
      ) : (
        <>
          <Signin />
        </>
      )}
    </div>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
