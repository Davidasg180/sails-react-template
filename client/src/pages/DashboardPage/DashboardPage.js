import React, { Component } from 'react';
import MapView from "./../MapPage/MapPage";
import { Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SimpleTable from '../../components/SimpleTable';
import gql from "graphql-tag";
import { Query } from "react-apollo";


const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

var fields = {
    users: [`_id`, `email`],
    points: [`type`, 'coordinates']
};

class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { classes } = this.props;
        return (
            <div style={{
                flexGrow: 1,
                padding: 20
            }}>
                <Grid container spacing={40}>
                    <Grid item xs={12} md={3}>
                        <Paper className={classes.paper} spacing={16}>
                            <Query
                                query={gql`
                                  {
                                    users {
                                        ${fields.users.join(',')}
                                    }
                                  }
                                `}
                                fetchPolicy="cache-and-network"
                            >
                                {({ loading, error, data, refetch }) => {
                                    if (loading) return "Loading...";
                                    if (error) return `Error! ${error.message}`;
                                    return (
                                        <div>
                                            <h1>Users</h1>
                                            <button onClick={() => refetch()}>Refetch!</button>
                                            <SimpleTable columns={fields.users} data={data.users} />
                                        </div>
                                    );
                                }}
                            </Query>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Paper className={classes.paper} spacing={16}>
                            <Query
                                query={gql`
                                  {
                                    points {
                                        ${fields.points.join(',')}
                                    }
                                  }
                                `}
                                fetchPolicy="cache-and-network"
                            >
                                {({ loading, error, data, refetch }) => {
                                    if (loading) return "Loading...";
                                    if (error) return `Error! ${error.message}`;
                                    return (
                                        <div>
                                            <h1>Points</h1>
                                            <button onClick={() => refetch()}>Refetch!</button>
                                            <SimpleTable columns={fields.points} data={data.points} />
                                        </div>
                                    );
                                }}
                            </Query>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default withStyles(styles)(DashboardPage);