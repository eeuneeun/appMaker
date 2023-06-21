import DefaultAppBar from '../atoms/AppBar';

function DefaulAppBar() {
  return <DefaultAppBar />;
}
function LogoHeader() {
  return <header></header>;
}
function SigninHeader() {
  return <header></header>;
}

function renderHeaderForAdd(headerName: string) {
  switch (headerName) {
    case 'DefaulAppBar':
      return <DefaulAppBar />;

    case 'LogoHeader':
      return <LogoHeader />;

    case 'SigninPage':
      return <SigninHeader />;

    default:
      return <DefaultAppBar />;
  }
}
export { DefaulAppBar, LogoHeader, SigninHeader, renderHeaderForAdd };
