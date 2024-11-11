


import React, { createContext, useEffect, useState } from "react";

interface MineSweeperProps {
    restart: () => void;
    begin: () => void;
}

export const mineSweeperContext = createContext({} as MineSweeperProps)
interface ProviderProps {
    children: any
}

export const MineSweeperProvider: React.FC<ProviderProps> = ({ children }) => {

    const restart = () => {}
    const begin = () => {}


    const values: MineSweeperProps = {
        restart,
        begin
    }

    return (
        <mineSweeperContext.Provider value={values}>
            {children}
        </mineSweeperContext.Provider>
    )
}

