import Button from 'components/UI/atoms/Buttons';
import RoofingIcon from '@mui/icons-material/Roofing';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

export default function DefaultPage() {
  return (
    <div className="device ">
      <div className="app dragable">
        <header>
          <a href="/">appMaker</a>
        </header>
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
        <div className="container">
          <Button />
        </div>
      </div>
    </div>
  );
}
