import Button from 'components/UI/atoms/Buttons';
import DefaultAppBar from '../atoms/AppBar';
import DefaultNavMenu from '../organisms/NavMenus';
import DefaultForm from '../organisms/Forms';
import { InputWithLabelArr } from 'types/components/input';
import { ImgCardList } from '../organisms/Lists';
import { imgCardArrProps } from 'types/components/edit';
import { useAppDispatch } from 'store/storeHooks';
import { useSelector } from 'react-redux';
import { ContentInfo, addComponent } from 'store/reducers/appPageSlice';
import { allowDrop, dropHandler } from 'components/utils/utilFunctions';

// # 기본 페이지
// @ 포함 요소 : 기본 틀 + 상단 앱 바 + 하단 메뉴 바
function DefaultPage() {
  const dispatch = useAppDispatch();
  const { appPageList } = useSelector((state: any) => ({
    appPageList: state.appPageSlice.appPageList,
  }));

  function addComponents(e: React.DragEvent<HTMLDivElement>) {
    const targetPageId = e.currentTarget.parentElement?.parentElement
      ?.id as string;
    const compoType = dropHandler(e);

    dispatch(
      addComponent({
        pageId: targetPageId,
        compoType: compoType,
      }),
    );
  }

  return (
    <div className="app dragable">
      <DefaultAppBar />
      <DefaultNavMenu />
      <div className="container" onDragOver={allowDrop} onDrop={addComponents}>
        {appPageList[0].pageContents.map((item: ContentInfo, idx: number) => {
          item.compoType == 'Text' && <div>1</div>;
        })}

        <Button />
      </div>
    </div>
  );
}

// # 빈 화면
// @ 포함 요소 : 기본 틀
function EmptyPage() {
  return <div className="app dragable"></div>;
}

// # 상단 앱 바
// @ 포함 요소 : 기본 틀 + 상단 앱 바
function AppBarPage() {
  return (
    <div className="app dragable">
      <DefaultAppBar />
      <div className="container"></div>
    </div>
  );
}

// # 기본 폼 화면
// @ 포함 요소 : 기본 틀 + 상단 앱 바 + 기본 폼
function FormPage() {
  const inputAttrs: InputWithLabelArr = {
    items: [
      {
        input: {
          id: 'input01',
          class: 'basic input',
          type: 'text',
          placeholder: 'basic input',
        },
        label: {
          for: 'input01',
          class: '',
          text: '입력폼 01',
        },
      },
      {
        input: {
          id: 'input02',
          class: 'basic input',
          type: 'text',
          placeholder: 'basic input',
        },
        label: {
          for: 'input02',
          class: '',
          text: '입력폼 02',
        },
      },
    ],
  };

  return (
    <div className="app dragable">
      <DefaultAppBar />
      <div className="container">
        <DefaultForm {...inputAttrs} />
      </div>
    </div>
  );
}

// # 타일 리스트 화면
// @ 포함 요소 : 기본 틀 + 상단 앱 바 + 타일 리스트
function CardListPage() {
  const imgCardArr: imgCardArrProps = {
    items: [
      { text: '텍스트', hrefUrl: '#', class: 'img-card01' },
      { text: '텍스트', hrefUrl: '#', class: 'img-card02' },
      { text: '텍스트', hrefUrl: '#', class: 'img-card03' },
      { text: '텍스트', hrefUrl: '#', class: 'img-card04' },
    ],
  };
  return (
    <div className="app dragable">
      <DefaultAppBar />
      <div className="container">
        <ImgCardList {...imgCardArr} />
      </div>
    </div>
  );
}

function renderPageForAdd(pageName: string) {
  switch (pageName) {
    case 'DefaultPage':
      return <DefaultPage />;

    case 'EmptyPage':
      return <EmptyPage />;

    case 'AppBarPage':
      return <AppBarPage />;

    case 'FormPage':
      return <FormPage />;

    case 'CardListPage':
      return <CardListPage />;

    default:
      return <DefaultPage />;
  }
}

export {
  DefaultPage,
  EmptyPage,
  AppBarPage,
  FormPage,
  CardListPage,
  renderPageForAdd,
};
