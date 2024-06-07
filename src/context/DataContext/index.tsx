// context/DataContext.js
import React, { createContext, ReactNode, useContext, useState } from "react";

interface Item {
  name: string;
  account: string;
  remark: string;
}

interface DataContextType {
  savedData: Item[];
  addData: (data: Item) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);
// const DataContext = createContext({});

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [savedData, setSavedData] = useState<Item[]>([]);

  const addData = (data: Item) => {
    setSavedData((prevData) => [...prevData, data]);
  };

  return (
    <DataContext.Provider value={{ savedData, addData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};

export default DataContext;
