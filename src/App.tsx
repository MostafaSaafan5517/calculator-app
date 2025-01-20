import React from "react";
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";
import Result from "./components/Result";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const themeNum = useSelector((state: RootState) => state.theme.value);
  const className = `theme${themeNum}`;

  document.body.className = className;

  return (
    <main className="app">
      <AppHeader />
      <Result />
      <AppBody />
    </main>
  );
}

export default App;
