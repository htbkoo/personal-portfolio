import * as React from "react";
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

import Section from "../common/Section";

const styles = (theme: Theme) => createStyles({});

interface HomePanelProps extends WithStyles<typeof styles> {
}

function HomePanel(props: HomePanelProps) {
    return (
        <Section
            id="home"
            hasDivider={true}
            title="Welcome To My Portfolio"
        >
            <Typography paragraph >
                Home Panel
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                donec massa sapien faucibus et molestie ac.
            </Typography>
        </Section>
    );
}

export default withStyles(styles)(HomePanel);