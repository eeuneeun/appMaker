// # 기본 Div 화면

import { imgCardArrProps } from 'types/components/edit';
import Button from '../atoms/Buttons';
import { ImgCardList } from '../organisms/Lists';
import DefaultTextInput from '../atoms/TextInputs';
import { AppPageInfo } from 'store/reducers/appPageSlice';

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

    case 'Button':
      return <Button />;

    case 'Image':
      return <img src="/imgs/edit_img_icon.png" alt="이미지" />;

    case 'List':
      return (
        <ul>
          <li>1. 리스트</li>
          <li>2. 리스트</li>
          <li>3. 리스트</li>
        </ul>
      );

    case 'ImgCardList':
      const imgCardArr: imgCardArrProps = {
        items: [
          { text: '텍스트', hrefUrl: '#', class: 'img-card01' },
          { text: '텍스트', hrefUrl: '#', class: 'img-card02' },
          { text: '텍스트', hrefUrl: '#', class: 'img-card03' },
          { text: '텍스트', hrefUrl: '#', class: 'img-card04' },
        ],
      };
      return <ImgCardList {...imgCardArr} />;

    case 'Form':
      const input = {
        id: 'input02',
        class: 'basic input',
        type: 'text',
        placeholder: 'basic input',
      };

      return <DefaultTextInput {...input} />;

    default:
      return <DefaultDiv />;
  }
}

export { DefaultDiv, TextCompo, renderCompoForAdd };
