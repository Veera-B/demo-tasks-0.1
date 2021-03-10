import React, { Component } from 'react';

import AccountInfo from '../components/AccountInfo/AccountInfo';
import ComplaintsInfo from '../components/ComplaintInfo/ComplaintsInfo';

class AccountComplaints extends Component {
    render() {
        return (
            <div>
                <h1>Information</h1>
                <AccountInfo />
                <ComplaintsInfo />
            </div>
        )
    }
}

export default AccountComplaints
