import RoofingIcon from '@mui/icons-material/Roofing';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

// # 기본 앱 바
// @ 포함 요소 : 중앙 앱 이름
export default function DefaultNavMenu() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">
            <RoofingIcon sx={{ fontSize: 28 }} />
          </a>
        </li>
        <li>
          <a href="#">
            <DashboardIcon sx={{ fontSize: 28 }} />
          </a>
        </li>
        <li>
          <a href="#">
            <PersonAddAltIcon sx={{ fontSize: 28 }} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
