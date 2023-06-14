import { renderPageForAdd } from 'components/UI/templates/pagesForAdd';
import { useSelector } from 'react-redux';

export default function Page() {
  const { appPageList } = useSelector((state: any) => ({
    appPageList: state.appPageSlice.appPageList,
  }));

  return (
    <div className="main pageWrap">
      {appPageList.map((item: string) => {
        return renderPageForAdd(item);
      })}
    </div>
  );
}
