import React from "react";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm.js";
import AppRouter from "./components/AppRouter.js";

export default function App() {
  return (
    <main>
      <Header />
      <Navbar />
      <AppRouter />
      <SearchForm />
    </main>
  );
}
