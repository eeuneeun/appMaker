import { useState } from 'react';
import { Col, Row } from 'pages/data';
import DataTable from 'react-data-grid';
const headerRow = css`
  @layer rdg.HeaderRow {
    display: contents;
    line-height: var(--rdg-header-row-height);
    background-color: var(--rdg-header-background-color);
    font-weight: bold;

    & > .${cell} {
      /* Should have a higher value than 1 to show up above regular cells and the focus sink */
      z-index: 2;
      position: sticky;
      inset-block-start: 0;
    }

    & > .${cellFrozen} {
      z-index: 3;
    }
  }
`;
// @ 포함 요소 : div 태그
function DefaultDT(props: any) {
  const [addData, setAddData] = useState({
    id: 0,
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

    const id: number = Number(
      (document.getElementById('id') as HTMLInputElement).value,
    );
    const name: string = (document.getElementById('name') as HTMLInputElement)
      .value;
    const title: string = (document.getElementById('title') as HTMLInputElement)
      .value;
    setAddData({
      id: id,
      name: name + '',
      title: title + '',
    });
    copyRows.push(addData);
    props.setRows(copyRows);
  }

  return (
    <div>
      <DataTable
        className="basic-table"
        columns={props.columns}
        rows={props.rows}
        onRowsChange={props.setRows}
        rowKeyGetter={rowKeyGetter}
      />

      <button onClick={addRow}>+</button>
      <form className="">
        <ul>
          <li>
            <input type="text" id="id" />
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
  );
}

export { DefaultDT };
