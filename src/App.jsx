import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/home";
import Comment from "./pages/comments/Comment";
import Todos from "./pages/todos/Todos";
import Albums from "./pages/albums/Albums";
import Users from "./pages/users/Users";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Home />} />
          <Route path="/comments" element={<Comment />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/users" element={<Users />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={ <NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
