import { renderPageForAdd } from 'components/UI/templates/pagesForAdd';
import { useSelector } from 'react-redux';
import { appPageInfo, setNowEditPage } from 'store/reducers/appPageSlice';
import { useAppDispatch } from 'store/storeHooks';
import { MouseEvent } from 'react';

export default function Page() {
  const dispatch = useAppDispatch();
  const { appPageList, nowEditPage } = useSelector((state: any) => ({
    appPageList: state.appPageSlice.appPageList,
    nowEditPage: state.appPageSlice.nowEditPage,
    nextEditPage: state.appPageSlice.nowEditPage,
  }));

  // # 수정 중인 페이지 변경
  function changeNowEditPage(e: MouseEvent<HTMLElement>) {
    const targetPageId = e.currentTarget.id;
    if (!(nowEditPage == targetPageId)) {
      dispatch(setNowEditPage(targetPageId));
    }
  }

  return (
    <div className="main pageWrap">
      {appPageList.map((item: appPageInfo, idx: number) => {
        const el = renderPageForAdd(item.pageType);
        return (
          <div
            id={item.pageId}
            className={`device ${item.pageId == nowEditPage ? 'active' : ''}`}
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
