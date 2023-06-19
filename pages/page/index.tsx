import { renderPageForAdd } from 'components/UI/templates/pagesForAdd';
import { useSelector } from 'react-redux';
import {
  AppPageInfo,
  setNowEditPage,
  deletePage,
} from 'store/reducers/appPageSlice';
import { useAppDispatch } from 'store/storeHooks';
import { MouseEvent } from 'react';
import { PageDelButton } from 'components/UI/atoms/Buttons';

export default function Page() {
  const dispatch = useAppDispatch();
  const { appPageList, nowEditPage } = useSelector((state: any) => ({
    appPageList: state.appPageSlice.appPageList,
    nowEditPage: state.appPageSlice.nowEditPage,
    nextEditPage: state.appPageSlice.nowEditPage,
  }));

  // # 페이지 수정 활성화
  function changeNowEditPage(e: MouseEvent<HTMLElement>) {
    const targetPageId = e.currentTarget.id;
    if (!(nowEditPage == targetPageId)) {
      dispatch(setNowEditPage(targetPageId));
    }
  }

  return (
    <div className="main pageWrap">
      {appPageList.map((item: AppPageInfo, idx: number) => {
        const el = renderPageForAdd(item.pageType);
        return (
          <div
            id={item.pageId}
            className={`device ${item.pageId == nowEditPage ? 'active' : ''}`}
            key={`key-${idx}`}
            onClick={changeNowEditPage}
          >
            <PageDelButton onClick={() => dispatch(deletePage(item.pageId))} />
            {el}
          </div>
        );
      })}
    </div>
  );
}
