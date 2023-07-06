import { LoginForm } from 'components/UI/organisms/Forms';
import { LoginFormData } from 'types/login';
import { setIsLogin } from 'store/reducers/authSlice';
import { useAppDispatch } from 'store/storeHooks';
import { useEffect, useState } from 'react';

export default function TestChildren(props: any) {
  function update() {
    let tmpArr = [...props.arr];
    tmpArr[props.dataKey] = !tmpArr[props.dataKey];

    props.setArr(tmpArr);
  }

  return <div onClick={update}>{`${props.arr[props.dataKey]}`}</div>;
}
