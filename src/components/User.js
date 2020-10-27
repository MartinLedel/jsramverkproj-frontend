import React from 'react';
import { Tabs, Tab } from "react-bootstrap";
import UserOverview from './UserOverview.js';
import UserBalance from './UserBalance.js';

const User = () => {
    return (
        <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
          <Tab eventKey="overview" title="Overview">
            <UserOverview />
          </Tab>
          <Tab eventKey="balance" title="Balance">
            <UserBalance />
          </Tab>
        </Tabs>
    );
};
export default User;
