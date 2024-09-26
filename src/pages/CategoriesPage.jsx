import homeIcon from "../assets/images/category/menu-svgrepo-com.svg";
import morningIcon from "../assets/images/category/porridge-spoon-svgrepo-com.svg";
import obedIcon from "../assets/images/category/chicken-christmas-food-svgrepo-com.svg";
import nightIcon from "../assets/images/category/soup-svgrepo-com.svg";
import { Link } from "react-router-dom";

function CategoriesPage() {
    return(
        <section class="mobale-block">
            <div class="mobale-block__header is-warning">
                Категории
            </div>
            <div class="container">
                <div class="category-row">
                    <Link to="/" class="category-item">
                        <img src={homeIcon} alt="Home" class="category-item__img" />
                        <span class="category-item__title">Меню на день</span>
                    </Link>
                    <Link to = "/category/posts" class="category-item">
                        <img src={morningIcon} alt="Morning" class="category-item__img" />
                        <span class="category-item__title">Блюда на завтрак</span>
                    </Link>
                    <Link to = "/category/ob" class="category-item">
                        <img src={obedIcon} alt="Obed" class="category-item__img" />
                        <span class="category-item__title">Блюда на обед</span>
                    </Link>
                    <Link to = "/category/mo" class="category-item">
                        <img src={nightIcon} alt="Night" class="category-item__img" />
                        <span class="category-item__title">Блюда на ужин</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}


export default CategoriesPage;