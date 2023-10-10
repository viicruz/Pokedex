import Routes from "./src/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Routes/>
    </QueryClientProvider>
  );
}

