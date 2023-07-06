import { LoginForm } from 'components/UI/organisms/Forms';
import { LoginFormData } from 'types/login';
import { setIsLogin } from 'store/reducers/authSlice';
import { useAppDispatch } from 'store/storeHooks';
import { useEffect, useState } from 'react';
import TestChildren from './children';

export default function Test() {
  const [arr, setArr] = useState([]);

  const data = [
    {
      id: 1,
      name: 'apple',
    },
    {
      id: 2,
      name: 'banana',
    },
    {
      id: 3,
      name: 'remon',
    },
    {
      id: 4,
      name: 'peach',
    },
  ];

  useEffect(() => {
    // data.map((item, idx: number) => {
    //   setArr((arr) => [...arr, item.name]);
    // });

    let tmpArr: boolean[] = [];
    data.forEach((item, idx) => {
      tmpArr.push(false);
    });
    setArr(tmpArr);
  }, []);

  return (
    <main className="main flex-center">
      {arr.map((item, idx) => (
        <TestChildren
          key={`key-${idx}`}
          dataKey={idx}
          arr={arr}
          setArr={setArr}
        />
      ))}
    </main>
  );
}
