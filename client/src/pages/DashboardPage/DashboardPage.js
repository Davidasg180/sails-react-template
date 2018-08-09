import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SimpleTable from '../../components/SimpleTable';

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
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Paper className={classes.paper} spacing={16}>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default withStyles(styles)(DashboardPage);