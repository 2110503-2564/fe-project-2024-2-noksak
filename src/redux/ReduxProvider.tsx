"use client";

import React from "react";
import { Provider as ReactReduxProvider } from "react-redux";
import { store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        {children}
      </PersistGate>
    </ReactReduxProvider>
  );
}
