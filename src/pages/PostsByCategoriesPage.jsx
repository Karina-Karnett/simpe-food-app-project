function PostsByCategoriesPage() {
    return(
        <section class="mobale-block">
            <div class="mobale-block__header is-aqua">
                Блюда на завтрак
            </div>

            <div class="all-news-block">
                <div class="news-card">
                    <div class="container">
                        <h3 class="news-card__title">Омлет с ветчиной и сыром в микроволновке</h3>
                        <span class="news-card__date">Классичесикй завтрак</span>
                        <span class="news-card__category">Первое</span>
                    </div>
                </div>

                <div class="news-card">
                    <div class="container">
                        <h3 class="news-card__title"> Рулетики из лаваша с сыром
                        </h3>
                        <span class="news-card__date">Классический завтрак</span>
                        <span class="news-card__category">Первое</span>
                    </div>
                </div>

                <div class="news-card">
                    <div class="container">
                        <h3 class="news-card__title">Овсяная каша с бананом в микроволновке</h3>
                        <span class="news-card__date">Классический завтрак</span>
                        <span class="news-card__category">Первое</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PostsByCategoriesPage;