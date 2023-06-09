import { useState } from 'react';
import styles from '../../../styles/modules/Bar.module.css';
import ProgressBarItems, { BreadcrumbItems } from '../molecules/Items';

export default function ProgressBar() {
  const items = ['Step 1', 'Step 2', 'Step 3', 'Step 4']; // 예시
  const activeIndex = 2; // 현재 진행중인 인덱스

  return (
    <div className={styles.progressBar}>
      <ProgressBarItems items={items} activeIndex={activeIndex} />
    </div>
  );
}

// 컴포넌트 객체 정보를 정의합니다.
const components = [
  { title: 'Step1', component: Test1 },
  { title: 'Step2', component: Test2 },
  { title: 'Step3', component: Test3 },
  { title: 'Step4', component: Test4 },
];

export function Breadcrumb() {
  const [activeIndex, setActiveIndex] = useState(2); // 현재 진행중인 페이지
  const [showComponent, setShowComponent] = useState(true); // 컴포넌트 표시 여부

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    setShowComponent(true);
  };

  // activeIndex에 따라 보여질 컴포넌트를 결정
  const ActiveComponent = components[activeIndex]?.component;

  return (
    <div>
      <BreadcrumbItems
        titles={components.map((comp) => comp.title)}
        activeIndex={activeIndex}
        onItemClick={handleItemClick}
      />
      {showComponent && ActiveComponent && <ActiveComponent />}
    </div>
  );
}

//테스트 컴포넌트
export function Test1() {
  return <div>Test</div>;
}

export function Test2() {
  return <div>Test2</div>;
}

export function Test3() {
  return <div>Test3</div>;
}

export function Test4() {
  return <div>Test4</div>;
}
