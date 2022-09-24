import React from "react";
import { useState } from "react";

const ReviewURL = "https://imdb-api.com/API/Reviews/k_79pw46rj";

const MovieCard = ({movie:{id, image, title, description}})=>{
    const [reviews,setReviews] = useState([]);
    const [isReviewClicked,setIsReviewClicked] = useState(false);
    const GetMoviewReview = async (id) =>{
        const response = await fetch(`${ReviewURL}/${id}`);
        const data = await response.json();

        setReviews(data.items);
        setIsReviewClicked(true);
    }
    return(
        <div>
<div className="movie">
    {/* <div>
        <p>{SearchType}</p>
    </div> */}
    {/* <div>
        <img height={300} width={300} src={image !== "N/A" ? image : "https://via.placeholder.com/400"} alt={title}/>
    </div> */}
    
    <div>
        <span>{title}</span>
        <h3>{description}</h3>
        <img height={400} width={300} src={image !== "N/A" ? image : "https://via.placeholder.com/400"} alt={title}/>
    </div>
    
</div>
<div>
        <button class="successBtn" onClick={() => GetMoviewReview(id)}>Reviews</button>
        {
            isReviewClicked && 
        
        <div>
        { 
                reviews.length > 0 ?
                (
                <div className="container">
                    {reviews.map((item,index) => {
                        if(index < 1)
                        return <div><p>{item.title} - {item.rate}</p></div>
                    }
                    )}
               </div>
                ):
                (
                    <div className="empty">
                        <p>No review found</p>
                    </div>
                )
        }
        </div>
        }
    </div>
</div>
    );
}

export default MovieCard;

