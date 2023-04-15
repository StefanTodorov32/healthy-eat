import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Search } from "./components/Search";
import { RecipeList } from "./components/RecipeList";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
  },
  {
    path: "/recipe/search/:searchInput",
    element: <RecipeList />
  }
]);

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  )
}

export default App
