import ProgressBar, { Breadcrumb } from 'components/UI/organisms/Bar';

export default function Home() {
  return (
    <main className="main intro">
      <div className="project-group">
        <h3>생성된 앱 프로젝트</h3>
        <ul>
          <li>
            <a href="">
              <div>
                <h4>App 01</h4>
                <dl>
                  <dt>보유 페이지</dt>
                  <dd>6개</dd>
                </dl>
                <dl>
                  <dt>마지막 수정 시간</dt>
                  <dd>12:00:00</dd>
                </dl>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div>
                <h4>App 02</h4>
                <dl>
                  <dt>보유 페이지</dt>
                  <dd>6개</dd>
                </dl>
                <dl>
                  <dt>마지막 수정 시간</dt>
                  <dd>12:00:00</dd>
                </dl>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div className="project-group">
        <h3>배포중인 앱 프로젝트</h3>
        <ul>
          <li>
            <a href="">
              <div>
                <h4>App 01</h4>
                <dl>
                  <dt>서버 상태</dt>
                  <dd>원활</dd>
                </dl>
                <dl>
                  <dt>보유 페이지</dt>
                  <dd>6개</dd>
                </dl>
                <dl>
                  <dt>마지막 배포 시각</dt>
                  <dd>12:00:00</dd>
                </dl>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div>
                <h4>App 02</h4>
                <dl>
                  <dt>서버 상태</dt>
                  <dd>원활</dd>
                </dl>
                <dl>
                  <dt>보유 페이지</dt>
                  <dd>6개</dd>
                </dl>
                <dl>
                  <dt>마지막 배포 시각</dt>
                  <dd>12:00:00</dd>
                </dl>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
