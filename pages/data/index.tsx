import { useState } from 'react';
import 'react-data-grid/lib/styles.css';
import { DefaultDT } from 'components/UI/templates/DataTable';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
export interface Row {
  id: number;
  name: string;
  title: string;
}

export interface Col {
  key: string;
  name: string;
}
export default function Home() {
  const columns: Col[] = [
    { key: 'id', name: 'ID' },
    { key: 'name', name: 'name' },
    { key: 'title', name: 'Title' },
  ];
  const [rows, setRows] = useState([
    { id: 0, name: 'aa', title: 'Example' },
    { id: 1, name: 'aa', title: 'Demo' },
  ]);

  const DTProps = {
    columns: columns,
    rows: rows,
    setRows: setRows,
  };
  return (
    <main className="main data">
      <button className="add-table-btn">
        <LibraryAddIcon sx={{ fontSize: 33 }} />
      </button>
      <DefaultDT {...DTProps} />
    </main>
  );
}
