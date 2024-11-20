import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Scaffold from "./pages/Scaffold.tsx";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

export const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Scaffold />

      {/* The rest of your application */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
);
