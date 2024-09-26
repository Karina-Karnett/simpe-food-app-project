import { Link, useParams } from "react-router-dom";
import backIcon from "../assets/images/back-button icon.svg";
import { useEffect, useState } from "react";
import axios from "axios";

function PostDetailPage() {

    const {id} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await axios.get(`https://92b2d29e8c4751ba.mokky.dev/post/${id}`);
                setPost(response.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchPost();
    }, [id]);

    return(
        <section class="mobale-block">
            <Link to ="/" class="back-button">
                <span class="container" >
                    <img src={backIcon} alt="Back Button" />
                    Назад
                </span>
            </Link>     
            <div class="container">
                <div class="post-detail-block">
                    <h3 class="news-card__title">{post.title}</h3>
                    <span class="news-card__date">{post.date}</span>
                    <p class="description">
                        {post.description}
                    </p>
                    <img src={post.imageUrl} alt={post.title} />
                    <span class="autor">Источник: <strong class="light-success-text">{post.author}</strong></span>
                    <button class="tag-button">{post.category}</button>
                </div>    
            </div>
        </section>
    );
}

export default PostDetailPage;