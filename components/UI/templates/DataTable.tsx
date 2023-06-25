import { useState } from 'react';
import { Col, Row } from 'pages/data';
import DataGrid from 'react-data-grid';

// @ 포함 요소 : div 태그
function DefaultDT(props: any) {
  const [addData, setAddData] = useState({
    id: 1,
    name: '',
    title: '',
  });

  // 키 게터
  function rowKeyGetter(row: Row) {
    return row.id;
  }

  // 데이터 추가
  function addRow() {
    let copyRows = JSON.parse(JSON.stringify(props.rows));

    const name: string = (document.getElementById('name') as HTMLInputElement)
      .value;
    const title: string = (document.getElementById('title') as HTMLInputElement)
      .value;

    setAddData({
      id: addData.id + 1,
      name: name + '',
      title: title + '',
    });

    copyRows.push(addData);
    props.setRows(copyRows);
  }

  return (
    <div className="data-table-wrap">
      <DataGrid
        className="basic data-table"
        columns={props.columns}
        rows={props.rows}
        rowHeight={40}
        onRowsChange={props.setRows}
        rowKeyGetter={rowKeyGetter}
      />

      <div className="form-wrap">
        <button className="add-data-btn" onClick={addRow}>
          +
        </button>
        <form className="add-form">
          <ul>
            <li>
              <input type="text" id="id" value={addData.id} readOnly />
            </li>
            <li>
              <input type="text" id="name" />
            </li>
            <li>
              <input type="text" id="title" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export { DefaultDT };
