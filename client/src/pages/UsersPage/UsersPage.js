import React, { Component } from 'react';
import EditTable from '../../components/EditTable';
import { Grid } from '@material-ui/core';

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
];

class UsersPage extends Component {
    render() {
        return (
            <Grid container
            spacing={0}
            justify='center'
            >
                <Grid item xs={11}>
                    <EditTable
                        //onChange={onChange}
                        //onDelete={onDelete}
                        rows={rows}
                        headerColumns={headers}
                    />
                </Grid>
            </Grid>
        );
    }
}

export default UsersPage;