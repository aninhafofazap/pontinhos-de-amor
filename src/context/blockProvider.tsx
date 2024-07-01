"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface IBlockContext {
  children: ReactNode;
}

interface IBlockDefaultContext {
  block: boolean;
  setBlock: Dispatch<SetStateAction<boolean>>;
}

export const BlockContext = createContext<IBlockDefaultContext>(
  {} as IBlockDefaultContext
);

export const BlockProvider = ({ children }: IBlockContext) => {
  const [block, setBlock] = useState(false);

  return (
    <BlockContext.Provider value={{ block, setBlock }}>
      {children}
    </BlockContext.Provider>
  );
};

export const useBlock = () => {
  const context = useContext(BlockContext);
  if (!context) {
    throw new Error("estou funcionando");
  }
  return context;
};
