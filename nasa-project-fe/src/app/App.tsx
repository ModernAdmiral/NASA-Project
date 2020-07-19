import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./state/app.store";
import { RoverImagePage } from "./pages/RoverImagePage.component";
import { logger } from "redux-logger";
export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <RoverImagePage />
      </div>
    </Provider>
  );
};
