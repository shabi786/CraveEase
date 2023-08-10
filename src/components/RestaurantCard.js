// import { useContext } from "react";
import { IMG_URL } from "../Constant";
// import UserContext from "../context/UserContext";
import Rating from '../images/rating.svg';



const RestaurantCard = ({ cloudinaryImageId,
    name,
    cuisines,
    locality,
    avgRating }) => {
    // const { user } = useContext(UserContext);
    return (
        <div className='w-72 h-72 m-3 mb-4 rounded-lg  hover:scale-90  pb-2'>
            <img
                src={
                    IMG_URL +
                    cloudinaryImageId
                }
                className="rounded-lg"
            />
            <h2 className="font-bold pt-2 pl-2 mb-2">{name}</h2>
            <div className="flex pl-2">
                <img src={Rating} alt="" />
                <p className="mx-1 font-bold text-xs">{avgRating}</p>
            </div>
            <p className="pl-2 text-slate-600 text-sm">{cuisines?.join(", ")}</p>
            <p className="pl-2 text-slate-600 text-sm font-semibold">{locality}</p>

            {/* <span>{user.name}</span>
            <span>{user.email}</span> */}
        </div>
    )
}

export default RestaurantCard