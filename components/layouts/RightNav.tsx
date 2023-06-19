import { useSelector } from 'react-redux';
import { addPage } from 'store/reducers/appPageSlice';
import { EditPanelProps } from 'types/components/edit';
import { useAppDispatch } from 'store/storeHooks';
import DefaultEditPanel from 'components/UI/templates/EditMenuPanel';
import { dragStartHandler } from 'components/utils/utilFunctions';

export default function RightNav() {
  const dispatch = useAppDispatch();
  const { appPageList } = useSelector((state: any) => ({
    appPageList: state.appPageSlice.appPageList,
  }));

  // # 추가 될 새로운 페이지의 아이디 값 생성
  function getNewId(): string {
    const lastPageIdNum = Number(
      appPageList[appPageList.length - 1].pageId.substr(1),
    );

    const newPageId = 'p' + (lastPageIdNum + 1);
    return newPageId;
  }

  // 페이지 패널
  const pageEditPanelPropsData: EditPanelProps = {
    EditMenuPanelData: {
      headerText: '페이지',
    },
    BtnArrData: {
      items: [
        {
          text: '빈 화면',
          class: 'page blank-btn',
          onClick: () => {
            getNewId();
            dispatch(
              addPage({
                pageType: 'EmptyPage',
                pageId: getNewId(),
                pageContents: [{ compoType: '' }],
              }),
            );
          },
        },
        {
          text: '상단 앱 바',
          class: 'page appbar-btn',
          onClick: () => {
            dispatch(
              addPage({
                pageType: 'AppBarPage',
                pageId: getNewId(),
                pageContents: [{ compoType: '' }],
              }),
            );
          },
        },
        {
          text: '기본 폼 화면',
          class: 'page form-btn',
          onClick: () => {
            dispatch(
              addPage({
                pageType: 'FormPage',
                pageId: getNewId(),
                pageContents: [{ compoType: '' }],
              }),
            );
          },
        },
        {
          text: '타일 리스트 화면',
          class: 'page tile-btn',
          onClick: () => {
            dispatch(
              addPage({
                pageType: 'CardListPage',
                pageId: getNewId(),
                pageContents: [{ compoType: '' }],
              }),
            );
          },
        },
      ],
    },
  };

  // 컴포넌트
  const compoEditPanelPropsData: EditPanelProps = {
    EditMenuPanelData: {
      headerText: '컴포넌트',
    },
    BtnArrData: {
      items: [
        {
          text: '텍스트',
          class: 'edit-text-btn',
          onClick: () => {
            console.log('click');
          },
          onDragStart: (e: React.DragEvent<HTMLDivElement>) => {
            dragStartHandler(e, 'Text');
          },
        },
        {
          text: '버튼',
          class: 'edit-btn-btn',
          onClick: () => {
            console.log('Button');
          },
          onDragStart: (e: React.DragEvent<HTMLDivElement>) => {
            dragStartHandler(e, 'Button');
          },
        },
        {
          text: '리스트',
          class: 'edit-list-btn',
          onClick: () => {
            console.log('List');
          },
          onDragStart: (e: React.DragEvent<HTMLDivElement>) => {
            dragStartHandler(e, 'List');
          },
        },
        {
          text: '앱 상단 바',
          class: 'edit-appbar-btn',
          onClick: () => {
            console.log('Appbar');
          },
          onDragStart: (e: React.DragEvent<HTMLDivElement>) => {
            dragStartHandler(e, 'Appbar');
          },
        },
        {
          text: '이미지',
          class: 'edit-img-btn',
          onClick: () => {
            console.log('Image');
          },
          onDragStart: (e: React.DragEvent<HTMLDivElement>) => {
            dragStartHandler(e, 'Image');
          },
        },
        {
          text: '입력 폼',
          class: 'edit-form-btn',
          onClick: () => {
            console.log('Form');
          },
          onDragStart: (e: React.DragEvent<HTMLDivElement>) => {
            dragStartHandler(e, 'Form');
          },
        },
      ],
    },
  };

  return (
    <nav className="rightnav">
      <DefaultEditPanel {...pageEditPanelPropsData} />
      <DefaultEditPanel {...compoEditPanelPropsData} />
    </nav>
  );
}
