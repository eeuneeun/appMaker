import { useState } from 'react';
import ListOfButtons from '../organisms/List';
import { EditPanelProps } from 'types/components/edit';

export default function DefaultEditMenuPanel(EditPanelProps: EditPanelProps) {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className={`${isActive ? 'active' : ''} edit-menu`}>
      <div className="edit-menu-header">
        <button onClick={() => setIsActive(!isActive)}>
          {EditPanelProps.EditMenuPanelData.headerText
            ? EditPanelProps.EditMenuPanelData.headerText
            : '헤더'}
          <span className="expand-btn">{isActive ? '열림' : '닫힘'}</span>
        </button>
      </div>
      <div className="edit-menu-container">
        <ListOfButtons {...EditPanelProps.BtnArrData} />
      </div>

      <div className="edit-menu-footer"></div>
    </div>
  );
}
