import React, {
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
                    <TableCell>
                        <Checkbox/>
                    </TableCell>
                    <TableCell></TableCell>
                    {headersColumns.map((item, id) => {
                        return (
                            <TableCell key={id} numeric>{item.value}</TableCell>
                        );
                    })}

                    <TableCell>
                    </TableCell>
                </TableRow>
            </TableHead>
        );
    }

    renderRow(row) {

        const deleteButtonStyle = {
            display: 'flex',
            flexFlow: 'row nowrap',
            width: 50,
            height: 24,
            alignItems: 'center',
            padding: '0 12 0'
        }

        const checkboxStyle = {
            display: 'flex',
            flexFlow: 'row nowrap',
            width: 50,
            height: 24,
            alignItems: 'center'
        }


        var columns = row.columns;
        var button = <ModeEdit />
        var deleteButton = <IconButton
            style={deleteButtonStyle}
            tooltip={'Delete this row'}
        >
            <Delete />
        </IconButton>;

        const checkbox = <IconButton
            style={checkboxStyle}
        >
            {button}
        </IconButton>

        return (
            <TableRow key={row.id}>
                <TableCell>
                    <Checkbox/>
                </TableCell>
                <TableCell>{checkbox}</TableCell>
                {columns.map(cell => {
                    return (
                        <TableCell key={cell + `-` + cell.id} numeric>{this.renderCell(cell)}</TableCell>
                    );
                })}
                <TableCell>{deleteButton}</TableCell>
            </TableRow>
        );
    }

    renderCell(cell) {

        var value = cell && cell.value;

        return (
            <div>

                {/* <TextField
                    id="name"
                    value={value}
                    margin="normal"
                /> */}
                {value}
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