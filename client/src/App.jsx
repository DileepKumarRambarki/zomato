import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Restaurants from "./Restaurants";
import RestaurantCard from "./RestaurantCard";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/nearby" element={<Homepage />} />
          <Route path="/" element={<Restaurants />} />
          <Route path="/restaurant" element={<RestaurantCard/>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
