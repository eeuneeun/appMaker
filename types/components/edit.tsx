export interface EditMenuPanel {
  headerText?: string;
  container?: any;
  footerText?: string;
}

export interface CompEditBtn {
  text?: string;
  class?: string;
  id?: string;
  hrefUrl?: string;
  onClick?: any;
  onDragStart?: any; // *추후 BtnDragFunc type 적용!
}

export interface imgCard {
  text: string;
  hrefUrl: string;
  imgUrl?: string;
  imgAlt?: string;
  id?: string;
  class?: string;
  onClick?: any;
}

export interface imgCardArrProps {
  items: imgCard[];
}

// # 하위 컴포넌트로 버튼 리스트 배열을 던지기 위한 타입
export interface CompEditBtnArrProps {
  items: CompEditBtn[];
}

// # 최종 템플릿에서 자식 요소로 보내는 Props
export interface EditPanelProps {
  EditMenuPanelData: EditMenuPanel;
  BtnArrData: CompEditBtnArrProps;
}

export interface BtnDragFunc {
  (e: React.DragEvent<HTMLDivElement>, data: string): void;
}
