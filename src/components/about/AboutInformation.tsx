import * as React from "react";
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import informationMetadatas from "../../metadata/about/information.json";
import AboutEntry from "../../model/AboutEntry";

const styles = (theme: Theme) => createStyles({
    root: {
        // width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        height: "auto"
        // minWidth: 700,
    },
    row: {
        color: theme.palette.secondary.contrastText,
        height: theme.spacing(4),
    },
    divider: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.contrastText
    }
});

interface AboutInformationProps extends WithStyles<typeof styles> {
}

function AboutInformation(props: AboutInformationProps) {
    const {classes} = props;
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    {dividerRow()}
                </TableHead>
                <TableBody>
                    {(informationMetadatas as AboutEntry[][]).map(toTableGroups)}
                </TableBody>
            </Table>
        </Paper>
    );

    function toTableGroups(group: AboutEntry[], i: number) {
        return (
            <React.Fragment key={i}>
                {group.map(toRow)}
                {dividerRow()}
            </React.Fragment>
        );

        function toRow(entry: AboutEntry, j: number) {
            return (
                <TableRow key={`${i}_${j}_${entry.key}`} className={classes.row}>
                    <TableCell component="th" scope="row" align="right">
                        <strong>{entry.key}</strong>
                    </TableCell>
                    <TableCell align="left">
                        <span>{entry.value}</span>
                    </TableCell>
                </TableRow>
            );
        }
    }

    function dividerRow() {
        return (
            <TableRow className={classes.divider}>
                <TableCell/>
                <TableCell/>
            </TableRow>
        );
    }
}

export default withStyles(styles)(AboutInformation);

