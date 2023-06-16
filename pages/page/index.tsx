import { renderPageForAdd } from 'components/UI/templates/pagesForAdd';
import { useSelector } from 'react-redux';
import { setNowEditPage } from 'store/reducers/appPageSlice';
import { useAppDispatch } from 'store/storeHooks';

export default function Page() {
  const { appPageList, nowEditPage } = useSelector((state: any) => ({
    appPageList: state.appPageSlice.appPageList,
    nowEditPage: state.appPageSlice.nowEditPage,
  }));

  const dispatch = useAppDispatch();

  function changeNowEditPage(e: React.MouseEvent) {
    console.log(e.target);
  }

  return (
    <div className="main pageWrap">
      {appPageList.map((item: string, idx: number) => {
        console.log(nowEditPage);
        const el = renderPageForAdd(item);
        return (
          <div
            className={`device idx`}
            key={`key-${idx}`}
            onClick={changeNowEditPage}
          >
            {el}
          </div>
        );
      })}
    </div>
  );
}
