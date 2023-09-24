import React, { createContext, useContext, useState } from "react";
import { useRouter } from "next/router";

interface AppGlobalStateType {
    currDisplayPath: string;
    setCurrDisplayPath: (path: string) => void;
}

const DEFAULT_TO_ROOT_PATH = "/";
const NO_OP = () => {};
const AppGlobalStateContext = createContext<AppGlobalStateType>({
    currDisplayPath: DEFAULT_TO_ROOT_PATH,
    setCurrDisplayPath: NO_OP,
});

export const AppGlobalStateContextProvider: React.FC = ({ children }) => {
    const { asPath } = useRouter();
    const [currDisplayPath, setCurrDisplayPath] = useState(asPath);

    return (
        <AppGlobalStateContext.Provider
            value={{
                currDisplayPath,
                setCurrDisplayPath,
            }}>
            {children}
        </AppGlobalStateContext.Provider>
    );
};

export const useAppGlobalStateContext = () => useContext(AppGlobalStateContext);
