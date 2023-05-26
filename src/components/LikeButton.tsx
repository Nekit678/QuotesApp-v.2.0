import likeImg from "../assets/like.png"
import likeImgFilled from "../assets/like_filled.png"
import { LikeButtonProps } from "../models/types"

export const LikeButton = (props: LikeButtonProps) => {
    return (
        <div onClick={props.likeFn} className="w-8 cursor-pointer duration-150 hover:scale-125 ">
            {props.liked ? <img src={likeImgFilled} alt="like"></img> : <img src={likeImg} alt="like"></img>}
        </div>
    )
}