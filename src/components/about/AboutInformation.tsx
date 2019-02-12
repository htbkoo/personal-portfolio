import * as React from "react";
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import informationMetadatas from "../../metadata/about/information.json";

const styles = (theme: Theme) => createStyles({
    root: {
        // width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        height: "auto"
        // minWidth: 700,
    },
});

interface AboutInformationProps extends WithStyles<typeof styles> {
}

/*

Name: ${findItAtContact}
Is-a: Software Developer

Frontend: React
Backend: TypeScript / ES6+ or Java
Self-study: Python for Machine Learning

Love: Learning interesting things
Example: Science, art and programming

Aspiration: To leverage IT as a business enabler
Currently: Working in the financial industry

* */

function AboutInformation(props: AboutInformationProps) {
    const {classes} = props;
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="right"/>
                        <TableCell align="left"/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(informationMetadatas as Entry[][]).map(toTableGroups)}
                </TableBody>
            </Table>
        </Paper>
    );
}

type Entry = {
    key: string,
    value: string,
}

function toTableGroups(group: Entry[], i: number) {
    return group.map((entry: Entry, j: number) => (
        <TableRow key={`${i}_${j}_${entry.key}`}>
            <TableCell component="th" scope="row" align="right">
                <strong>{entry.key}</strong>
            </TableCell>
            <TableCell align="left">
                <span>{entry.value}</span>
            </TableCell>
        </TableRow>
    ));
}

export default withStyles(styles)(AboutInformation);

