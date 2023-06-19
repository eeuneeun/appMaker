// # 타입 체크
// @ target : 타입 체크를 원하는 객체

// @ return : target 의 구체적 타입
export function getType(target: any) {
  return Object.prototype.toString.call(target).slice(8, -1);
}

// # 동적 파일 임포트
// @ url : 가져오기 원하는 파일의 경로, '' 문자를 제외해야 함
export function DynamicImport(url: string) {
  import(url).then((obj) => console.log(obj)).catch((err) => console.log(err));
}

// This function will be triggered when dropping
export function dropHandler(e: React.DragEvent<HTMLDivElement>) {
  e.preventDefault();
  const compoType = e.dataTransfer.getData('compoType');
  return compoType;
}

// This makes the third box become droppable
export function allowDrop(e: React.DragEvent<HTMLDivElement>) {
  e.preventDefault();
}

// This function will be triggered when you start dragging
export function dragStartHandler(
  e: React.DragEvent<HTMLDivElement>,
  data: string,
) {
  e.dataTransfer.setData('compoType', data);
}
