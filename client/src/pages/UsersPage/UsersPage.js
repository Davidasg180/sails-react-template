import React, { Component } from 'react';
import EditTable from '../../components/EditTable';

//var headers = [`id`, `email`];

const headers = [
    { value: 'Name', type: 'TextField', width: 200 },
    //{ value: 'Address', type: 'TextField', width: 200 },
    //{ value: 'Phone', type: 'TextField', width: 200 },
    //{ value: 'Date', type: 'DatePicker', width: 200 },
    //{ value: 'Enabled', type: 'Toggle', width: 50 },
    //{ value: 'Last Edited By', type: 'ReadOnly', width: 100 }
];

var rows = [
    {
        columns: [
            { value: 'Davids' }
        ]
    }
    //{
    //    id: 1,
    //    email: "someEmail@gmail.com"
    //}
];

class UsersPage extends Component {
    render() {
        return (
            <EditTable
                //onChange={onChange}
                //onDelete={onDelete}
                rows={rows}
                headerColumns={headers}
            />
        );
    }
}

export default UsersPage;