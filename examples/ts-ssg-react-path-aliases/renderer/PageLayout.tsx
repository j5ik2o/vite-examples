import React from "react";
import "./PageLayout.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PageLayout = ({ children }: any) => {
  return (
    <React.StrictMode>
      <Layout>
        <Sidebar>
          <a className="navitem" href="/">
            Home
          </a>
          <a className="navitem" href="/about">
            About
          </a>
        </Sidebar>
        <Content>{children}</Content>
      </Layout>
    </React.StrictMode>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = ({ children }: any) => {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: 900,
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sidebar = ({ children }: any) => {
  return (
    <div
      style={{
        padding: 20,
        paddingTop: 42,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: "1.8em",
      }}
    >
      {children}
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Content = ({ children }: any) => {
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: "2px solid #eee",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export { PageLayout };
