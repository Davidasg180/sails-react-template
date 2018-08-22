﻿import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';

import Delete from '@material-ui/icons/Delete';
import ModeEdit from '@material-ui/icons/ModeEdit';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        //minWidth: 700,
    },
});

class EditTable extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    renderHeaders() {
        var headersColumns = this.props.headerColumns
        return (
            <TableHead>
                <TableRow>
                    <TableCell padding="checkbox">
                        <Checkbox
                        />
                    </TableCell>
                    {headersColumns.map((item, id) => {
                        return (
                            <TableCell key={id} numeric>{item.value}</TableCell>
                        );
                    })}
                </TableRow>
            </TableHead>
        );
    }

    renderRow(row) {
        var columns = row.columns;
        return (
            <TableRow key={row.id}>
                {columns.map(cell => {
                    return (
                        <TableCell key={cell + `-` + cell.id} numeric>{this.getCellValue(cell)}</TableCell>
                    );
                })}
            </TableRow>
        );
    }

    getCellValue(cell) {

        var value = cell && cell.value;
        var button = <ModeEdit />

        var deleteButton = <IconButton
            tooltip={'Delete this row'}
        >
            <Delete />
        </IconButton>;

        const checkbox = <IconButton>
            {button}
        </IconButton>

        return (
            <div>
                { checkbox }
                <TextField
                    id="name"
                    value={value}
                    margin="normal"
                />
                { deleteButton }
            </div>
        );
    }

    render() {
        return (
            <Paper className={this.props.classes.root}>
                <Table className={this.props.classes.table}>
                    {this.renderHeaders()}
                    <TableBody>
                        {this.props.rows.map((row, id) => {
                            row.id = id
                            return this.renderRow(row);
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
EditTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditTable);