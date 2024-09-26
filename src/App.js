import "./assets/css/style.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import CategoriesPage from "./pages/CategoriesPage";
import PostsByCategoriesPage from "./pages/PostsByCategoriesPage";
import {Routes, Route} from "react-router-dom";
import PostsByCategoriesOb from "./pages/PostsByCategoriesOb";
import PostsByCategoriesMo from "./pages/PostsByCategoriesMo";


function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostDetailPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/category/posts" element={<PostsByCategoriesPage />} />
          <Route path="category/ob" element={<PostsByCategoriesOb />} />
          <Route path="/category/mo" element={<PostsByCategoriesMo />} />

        </Routes>
      </main>
    </div>

  );
}

export default App;
