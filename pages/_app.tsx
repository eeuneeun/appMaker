import { AppProps } from 'next/app';
import Header from 'components/layouts/Header';
import LeftNav from 'components/layouts/LeftNav';
import RightNav from 'components/layouts/RightNav';
import { wrapper } from 'store/storeConfig';
import PropTypes from 'prop-types';
import 'styles/reset.css';
import 'styles/colors.css';
import 'styles/resources.css';
import 'styles/globals.css';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLogin, setIsAdmin } from 'store/reducers/authSlice';
import Signin from './signin';

function App({ Component, pageProps }: AppProps) {
  /* Redux */
  // 리덕스 컨트롤용 디스패치
  const dispatch = useDispatch();

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
