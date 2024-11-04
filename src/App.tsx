import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "./components/errorBoundary";
import { NotFound } from "./pages/notFound";
import { ProductsPage } from "./pages/products";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import { CartPage } from "./pages/cartPage";
import { Payment } from "./pages/payment";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/products" />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "products",
    element: <ProductsPage />,
  },
  {
    path: "products/carts",
    element: <CartPage />,
  },
  {
    path: "products/payment",
    element: <Payment />,
  },
  {
    path: "404",
    element: <NotFound />,
  },
]);
const queryClient = new QueryClient();
function App() {
  return (
    <ReduxProvider store={store}>

    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Router} />
    </QueryClientProvider>
    </ReduxProvider>
  );
}

export default App;
