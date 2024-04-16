import React, { createContext, useState, useEffect } from "react";
import { getUserConfig } from "../services/userConfig.ts";
import { FormField } from "../types/index.ts";

type State = {
  userConfig?: Record<string, any>;
  solarSchema?: Record<string, any>;
  isLoading: boolean;
};

export const UserConfigContext = createContext({});

export const UserConfigProvider = ({ children }) => {
  const [{ userConfig, solarSchema, isLoading }, setState] = useState<State>({
    isLoading: false,
  });

  const fetchUserConfig = async () => {
    setState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    try {
      const config = (await getUserConfig()) as Record<string, FormField<any>>;
      setState((prevState) => ({
        ...prevState,
        solarSchema: config,
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
    <UserConfigContext.Provider value={{ userConfig, solarSchema, isLoading }}>
      {children}
    </UserConfigContext.Provider>
  );
};
