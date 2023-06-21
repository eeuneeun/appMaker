// # 타입 체크
// @ target : 타입 체크를 원하는 객체

import { useSelector } from 'react-redux';
import { AppPageInfo, CompoInfo } from 'store/reducers/appPageSlice';

// @ return : target 의 구체적 타입
export function getType(target: any) {
  return Object.prototype.toString.call(target).slice(8, -1);
}

// # 동적 파일 임포트
// @ url : 가져오기 원하는 파일의 경로, '' 문자를 제외해야 함
export function DynamicImport(url: string) {
  import(url).then((obj) => console.log(obj)).catch((err) => console.log(err));
}

// # 앱 페이지 리스트 배열 내부의 인덱스 값 얻기
export function getIdxOfArr(appPageList: [AppPageInfo], id: string): number {
  const targetIdx = appPageList.findIndex((item) => item.id === id);
  return targetIdx;
}

// # 1. 드래그 이벤트 시작시 실행되는 함수
export function dragStartHandler(
  e: React.DragEvent<HTMLDivElement>,
  data: string,
) {
  e.dataTransfer.setData('compoType', data);
}

// # 2. 드롭 영역 이내에서 드래그 이벤트 진행 중에 실행되는 함수
export function allowDrop(e: React.DragEvent<HTMLDivElement>) {
  e.preventDefault();
}

// # 3. 드롭 이벤트 이후에 실행되는 함수
export function dropHandler(e: React.DragEvent<HTMLDivElement>) {
  e.preventDefault();
  const compoType = e.dataTransfer.getData('compoType');
  return compoType;
}

// # 추가 될 새로운 페이지의 아이디 값 생성
// @ appPageList : 현 앱 페이지 리스트 객체
// @ targetListName : 새 아이디를 추가하고자 하는 리스트의 이름
// @ pageId : 컴포넌트 추가를 원할 경우 사용될 부모 페이지의 아이디
export function getNewId(
  appPageList: [AppPageInfo],
  targetListName: string,
  pageId?: string,
): string {
  let lastPageIdNum: number = 0;
  let newPageId: string = '';

  switch (targetListName) {
    case 'page':
      lastPageIdNum = Number(appPageList[appPageList.length - 1].id.substr(1));
      newPageId = 'p' + (lastPageIdNum + 1);

      break;

    case 'components':
      const pageIdx = getIdxOfArr(appPageList, pageId as string);
      const targetCompoList: [CompoInfo] = appPageList[pageIdx].compoList;

      lastPageIdNum = Number(
        targetCompoList[targetCompoList.length - 1].id.substr(1),
      );
      newPageId = 'c' + (lastPageIdNum + 1);

      break;
  }

  return newPageId;
}
