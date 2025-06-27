import React, { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [pageMetadata, setPageMetadata] = useState({ title: 'Dashboard', subtitle: '' });

  return (
    <PageContext.Provider value={{ pageMetadata, setPageMetadata }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageMetadata = () => useContext(PageContext);