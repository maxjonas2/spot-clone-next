import React, { PropsWithChildren } from "react";
import "../styles/globals.css";

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <html>
    <head>
      <title>Teste 123</title>
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
