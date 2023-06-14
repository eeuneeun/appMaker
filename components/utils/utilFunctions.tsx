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
