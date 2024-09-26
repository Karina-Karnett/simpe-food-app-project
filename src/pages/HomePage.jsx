import PostList from "../components/PostList";

function HomePage () {
    return (
        <section class="mobale-block">
        <div class="mobale-block__header is-line">
            ~~~ Меню на день ~~~
        </div>
        <PostList />
        </section>
    );
}

export default HomePage;