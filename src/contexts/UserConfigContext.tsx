import React, { createContext, useState, useEffect } from "react";
import { getUserConfig } from "../services/userConfig.ts";
import { FormField } from "../types/index.ts";

export const UserConfigContext = createContext({});

type State = {
  userConfig?: Record<string, any>;
  solarConfig?: Record<string, any>;
  isLoading: boolean;
};

export const UserConfigProvider = ({ children }) => {
  const [{ userConfig, solarConfig, isLoading }, setState] = useState<State>({
    isLoading: false,
  });

  const fetchUserConfig = async () => {
    setState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    try {
      const config = await getUserConfig();
      setState((prevState) => ({
        ...prevState,
        userConfig: config as Record<string, FormField<any>>,
      }));
    } catch (error) {
      console.error("Failed to fetch user", error);
    }
    
    setState((prevState) => ({
      ...prevState,
      isLoading: false,
    }));
  };

  useEffect(() => {
    fetchUserConfig();
  }, []);

  return (
    <UserConfigContext.Provider value={{ userConfig, solarConfig, isLoading }}>
      {children}
    </UserConfigContext.Provider>
  );
};
