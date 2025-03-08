import { createRoot } from 'react-dom/client';

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from './App.jsx';
import Home from './components/Home.jsx';
import './index.css';
import Login from './pages/Login.jsx';
import Upload from './pages/Upload.jsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Helper/Theme.js';


createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to={"/login"} />} />
          <Route path="upload" element={<Upload />} />
          <Route path="list" element={<h1>This is list page upload</h1>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<App />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
