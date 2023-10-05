import { Link } from "react-router-dom";


const MiddlePartCard = ({ singleNews }) => {
    const { _id, title, thumbnail_url, details, author } = singleNews;
    return (
        <div className=" space-y-4">
            <div className=" flex gap-3 items-center">
                <div>
                    <img className=" w-[30px] h-[30px] rounded-full" src={author.img} alt="" />
                </div>
                <div>
                    <div>
                        <p className=" font-semibold text-[#403F3F]">{author.name}</p>
                    </div>
                    <div>
                        <p className=" text-xs text-[#706F6F]">{author.published_date}</p>
                    </div>
                </div>
            </div>
            <p>{title}</p>
            <img className=" w-full" src={thumbnail_url} alt="" />
            {details.length > 150 ? <p>{details.slice(0, 150)} <Link className=" text-blue-500" to={`/details/${_id}`}> read more...</Link></p> : <p>{details}</p>
            }
        </div >
    );
};

export default MiddlePartCard;