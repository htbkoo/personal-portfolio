import React from 'react';
import {Theme, withStyles} from '@material-ui/core/styles';
import {createStyles, WithStyles} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import SectionMetadata from "./model/SectionMetadata";

const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    toolbar: theme.mixins.toolbar,
});

interface PortfolioMainProps extends WithStyles<typeof styles> {
    sectionConfigs: SectionMetadata[]
}

function PortfolioMain(props: PortfolioMainProps) {
    const {classes, sectionConfigs} = props;

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>

            {sectionConfigs.map(config => (
                <div key={config.name}>
                    {config.component}
                    <Divider/>
                </div>
            ))}
        </main>
    );
}

export default withStyles(styles)(PortfolioMain);