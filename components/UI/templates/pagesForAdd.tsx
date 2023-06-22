import Button from 'components/UI/atoms/Buttons';
import DefaultAppBar from '../atoms/AppBar';
import DefaultNavMenu from '../organisms/NavMenus';
import DefaultForm from '../organisms/Forms';
import { InputWithLabelArr } from 'types/components/input';
import { ImgCardList } from '../organisms/Lists';
import { imgCardArrProps } from 'types/components/edit';
import { useAppDispatch } from 'store/storeHooks';
import {
  AddCompoInfo,
  AppPageInfo,
  CompoInfo,
  addComponent,
} from 'store/reducers/appPageSlice';
import {
  allowDrop,
  dropHandler,
  getNewId,
} from 'components/utils/utilFunctions';
import { renderCompoForAdd } from './CompoForAdd';

// # 하위 컴포넌트 추가 함수
function addComponents(
  e: React.DragEvent<HTMLDivElement>,
  appPageList: [AppPageInfo],
): AddCompoInfo {
  const targetPageId = e.currentTarget.parentElement?.parentElement
    ?.id as string;

  const compoType = dropHandler(e);
  const compoInfo = {
    id: getNewId(appPageList, 'components', targetPageId),
    type: compoType,
  };

  return {
    id: targetPageId,
    compoInfo: compoInfo,
  };
}

// # 기본 페이지
// @ 포함 요소 : 기본 틀 + 상단 앱 바 + 하단 메뉴 바
function DefaultPage(appPageList: [AppPageInfo], pageIdx: number) {
  const dispatch = useAppDispatch();

  return (
    <div className="app dragable">
      {/* <renderHeaderForAdd  /> */}
      <DefaultAppBar />
      <DefaultNavMenu />
      <div
        className="container"
        onDragOver={allowDrop}
        onDrop={(e: React.DragEvent<HTMLDivElement>) =>
          dispatch(addComponent(addComponents(e, appPageList)))
        }
      >
        {appPageList[pageIdx].compoList.map(
          (component: CompoInfo, compoIdx: number) => {
            const el = renderCompoForAdd(component.type);
            return el;
          },
        )}
        <Button />
      </div>
    </div>
  );
}

// # 빈 화면
// @ 포함 요소 : 기본 틀
function EmptyPage(appPageList: [AppPageInfo], pageIdx: number) {
  const dispatch = useAppDispatch();
  return (
    <div
      className="app dragable"
      onDragOver={allowDrop}
      onDrop={(e: React.DragEvent<HTMLDivElement>) =>
        dispatch(addComponent(addComponents(e, appPageList)))
      }
    >
      {appPageList[pageIdx].compoList.map(
        (component: CompoInfo, compoIdx: number) => {
          const el = renderCompoForAdd(component.type);
          return el;
        },
      )}
    </div>
  );
}

// # 상단 앱 바
// @ 포함 요소 : 기본 틀 + 상단 앱 바
function AppBarPage(appPageList: [AppPageInfo], pageIdx: number) {
  const dispatch = useAppDispatch();
  return (
    <div className="app dragable">
      <DefaultAppBar />
      <div
        className="container"
        onDragOver={allowDrop}
        onDrop={(e: React.DragEvent<HTMLDivElement>) =>
          dispatch(addComponent(addComponents(e, appPageList)))
        }
      >
        {appPageList[pageIdx].compoList.map(
          (component: CompoInfo, compoIdx: number) => {
            const el = renderCompoForAdd(component.type);
            return el;
          },
        )}
      </div>
    </div>
  );
}

// # 기본 폼 화면
// @ 포함 요소 : 기본 틀 + 상단 앱 바 + 기본 폼
function FormPage(appPageList: [AppPageInfo], pageIdx: number) {
  const dispatch = useAppDispatch();
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
      <div
        className="container"
        onDragOver={allowDrop}
        onDrop={(e: React.DragEvent<HTMLDivElement>) =>
          dispatch(addComponent(addComponents(e, appPageList)))
        }
      >
        <DefaultForm {...inputAttrs} />
        {appPageList[pageIdx].compoList.map(
          (component: CompoInfo, compoIdx: number) => {
            const el = renderCompoForAdd(component.type);
            return el;
          },
        )}
      </div>
    </div>
  );
}

// # 타일 리스트 화면
// @ 포함 요소 : 기본 틀 + 상단 앱 바 + 타일 리스트
function CardListPage(appPageList: [AppPageInfo], pageIdx: number) {
  const dispatch = useAppDispatch();
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
      <div
        className="container"
        onDragOver={allowDrop}
        onDrop={(e: React.DragEvent<HTMLDivElement>) =>
          dispatch(addComponent(addComponents(e, appPageList)))
        }
      >
        <ImgCardList {...imgCardArr} />
        {appPageList[pageIdx].compoList.map(
          (component: CompoInfo, compoIdx: number) => {
            const el = renderCompoForAdd(component.type);
            return el;
          },
        )}
      </div>
    </div>
  );
}

function renderPageForAdd(
  appPageList: [AppPageInfo],
  pageName: string,
  idx: number,
) {
  switch (pageName) {
    case 'DefaultPage':
      return DefaultPage(appPageList, idx);

    case 'EmptyPage':
      return EmptyPage(appPageList, idx);

    case 'AppBarPage':
      return AppBarPage(appPageList, idx);

    case 'FormPage':
      return FormPage(appPageList, idx);

    case 'CardListPage':
      return CardListPage(appPageList, idx);

    default:
      return DefaultPage(appPageList, idx);
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
