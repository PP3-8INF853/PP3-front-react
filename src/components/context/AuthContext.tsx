import React, {createContext, ReactNode, useContext, useEffect, useMemo, useState} from "react";

const AuthContext = createContext({});

export function AuthProvider(children?: ReactNode | undefined ) {

}

export default function useAuth() {
    return useContext(AuthContext);
}