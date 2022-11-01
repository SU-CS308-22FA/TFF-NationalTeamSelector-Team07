import './UserSettings.css'
import {Tab, Tabs} from 'react-bootstrap';
// import Sonnet from '../../components/Sonnet';

function UserSettings() {
  return (
    <div>
      <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="user" title="User Information">
        {/* <Sonnet /> */}
      </Tab>
    </Tabs> 
    </div>
  );
}

export default UserSettings;