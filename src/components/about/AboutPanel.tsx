import * as React from "react";

import Section from "../common/Section";
import AboutInformation from "./AboutInformation";

export default () => (
    <Section
        id="about"
        hasDivider={false}
        title="About"
        subtitle="Some information about myself"
        isBodyOpaque={true}>
        <AboutInformation />
    </Section>
);
