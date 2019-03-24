import * as React from "react";

export interface PortfoliosFactory {
    createPortfolios: () => Promise<(React.ReactNode)>,
}