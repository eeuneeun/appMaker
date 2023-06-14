import DefaultEditPanel from 'components/UI/templates/EditMenuPanel';
import { addPage } from 'store/reducers/appPageSlice';
import { EditPanelProps } from 'types/components/edit';
import { useAppDispatch } from 'store/storeHooks';

export default function RightNav() {
  const dispatch = useAppDispatch();

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
            dispatch(addPage('EmptyPage'));
          },
        },
        {
          text: '상단 앱 바',
          class: 'page appbar-btn',
          onClick: () => {
            dispatch(addPage('AppBarPage'));
          },
        },
        {
          text: '기본 폼 화면',
          class: 'page form-btn',
          onClick: () => {
            dispatch(addPage('FormPage'));
          },
        },
        {
          text: '타일 리스트 화면',
          class: 'page tile-btn',
          onClick: () => {
            dispatch(addPage('CardListPage'));
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
        },
        {
          text: '버튼',
          class: 'edit-btn-btn',
          onClick: () => {
            console.log('click');
          },
        },
        {
          text: '리스트',
          class: 'edit-list-btn',
          onClick: () => {
            console.log('click');
          },
        },
        {
          text: '앱 상단 바',
          class: 'edit-appbar-btn',
          onClick: () => {
            console.log('click');
          },
        },
        {
          text: '이미지',
          class: 'edit-img-btn',
          onClick: () => {
            console.log('click');
          },
        },
        {
          text: '입력 폼',
          class: 'edit-form-btn',
          onClick: () => {
            console.log('click');
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
