import React, { type PropsWithChildren } from "react";

export {};

declare global {
  interface RNElement<T = {}> extends React.FC<PropsWithChildren<T>> {}
}
