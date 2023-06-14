import DevicePage from 'components/UI/templates/appPage';
import { useSelector } from 'react-redux';

export default function Page() {
  const { appPageList } = useSelector((state: any) => ({
    // isLoading: state.loadingSlice.isLoading,
    appPageList: state.appPageSlice.appPageList,
    // isAdmin: state.authSlice.isAdmin,
    // accToken: state.tokenSlice.accToken,
  }));

  return (
    <div className="main pageWrap">
      {appPageList.map((item: string, idx: number) => {
        return <DevicePage key={item + idx} />;
      })}
    </div>
  );
}
