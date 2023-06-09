import DefaultEditPanel from 'components/UI/templates/EditMenuPanel';
import {
  CompEditBtnArrProps,
  EditMenuPanel,
  EditPanelProps,
} from 'types/components/edit';

export default function RightNav() {
  // 버튼 리스트
  const BtnArrData: CompEditBtnArrProps = {
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
  };

  // 패널 요소
  const EditMenuPanelData: EditMenuPanel = {
    headerText: '컴포넌트',
  };

  // 최종 Props
  const EditPanelPropsData: EditPanelProps = {
    BtnArrData: BtnArrData,
    EditMenuPanelData: EditMenuPanelData,
  };

  return (
    <nav className="rightnav">
      <DefaultEditPanel {...EditPanelPropsData} />
    </nav>
  );
}
