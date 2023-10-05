import { useContext } from "react";
import { NewsContext } from "../Context/Context";
import { useParams } from "react-router-dom";
import Header from "../Shared/Header";


const CategoryNews = () => {
    const { id } = useParams()
    console.log(id);
    const { news } = useContext(NewsContext)
    const categoryNews = news.filter(sNews => sNews.category_id === id)
    console.log(categoryNews);
    return (
        <div>
            <Header></Header>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {
                    categoryNews.map(category => <div key={category.id}>
                        <img src={category.thumbnail_url} alt="" />
                        {category.details.length > 150 ? <p>{category.details.slice(0, 150)}  </p> : <p>{category.details}</p>
                        }
                    </div>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;