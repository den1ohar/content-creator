import React from "react";
import Header from "@components/Header";

interface PageWrapperInterface {
  children: JSX.Element | JSX.Element[];
}

const PageWrapper: React.FC<PageWrapperInterface> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default PageWrapper;
