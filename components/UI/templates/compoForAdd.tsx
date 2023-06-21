// # 기본 Div 화면
// @ 포함 요소 : div 태그
function DefaultDiv() {
  return <div></div>;
}

// # 글씨를 넣을 수 있는 Text 박스
// @ 포함 요소 : div 태그
function TextCompo() {
  return <div className="component text">텍스트</div>;
}

function renderCompoForAdd(compoName: string) {
  switch (compoName) {
    case 'DefaultDiv':
      return <DefaultDiv />;

    case 'Text':
      return <TextCompo />;

    default:
      return <DefaultDiv />;
  }
}

export { DefaultDiv, TextCompo, renderCompoForAdd };
