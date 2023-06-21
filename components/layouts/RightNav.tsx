import { useSelector } from 'react-redux';
import { CompoInfo, addPage } from 'store/reducers/appPageSlice';
import { EditPanelProps } from 'types/components/edit';
import { useAppDispatch } from 'store/storeHooks';
import DefaultEditPanel from 'components/UI/templates/EditMenuPanel';
import {
  dragStartHandler,
  getIdxOfArr,
  getNewId,
} from 'components/utils/utilFunctions';

export default function RightNav() {
  const dispatch = useAppDispatch();
  const { appPageList } = useSelector((state: any) => ({
    appPageList: state.appPageSlice.appPageList,
  }));

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
            dispatch(
              addPage({
                id: getNewId(appPageList, 'page'),
                startType: 'EmptyPage',
                compoList: [{ id: 'c1', type: 'Text' }],
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
                id: getNewId(appPageList, 'page'),
                startType: 'AppBarPage',
                compoList: [{ id: 'c1', type: 'Text' }],
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
                id: getNewId(appPageList, 'page'),
                startType: 'FormPage',
                compoList: [{ id: 'c1', type: 'Text' }],
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
                id: getNewId(appPageList, 'page'),
                startType: 'CardListPage',
                compoList: [{ id: 'c1', type: 'Text' }],
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
