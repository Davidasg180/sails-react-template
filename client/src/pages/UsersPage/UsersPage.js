import React, { Component } from 'react';
import SimpleTable from '../../components/SimpleTable';

var Fields = [`id`, `email`];

var data = [
    {
        id: 1,
        email: "someEmail@gmail.com"
    }
];

class UsersPage extends Component {
    render() {
        return (
            <div>
                <h1>Users</h1>
                <SimpleTable columns={Fields} data={data} />
            </div>
        );
    }
}

export default UsersPage;