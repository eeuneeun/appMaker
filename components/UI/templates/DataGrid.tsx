import DataGrid from 'react-data-grid';

interface Row {
  id: number;
  name: string;
  title: string;
}

// @ 포함 요소 : div 태그
function DefaultDT() {
  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'name', name: 'name' },
    { key: 'title', name: 'Title' },
  ];

  const rows: Row[] = [
    { id: 0, name: 'aa', title: 'Example' },
    { id: 1, name: 'aa', title: 'Demo' },
  ];

  function rowKeyGetter(row: Row) {
    return row.id;
  }

  return <DataGrid columns={columns} rows={rows} rowKeyGetter={rowKeyGetter} />;
}

export { DefaultDT };
