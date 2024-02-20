import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { App } from "./app.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient }>

    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
