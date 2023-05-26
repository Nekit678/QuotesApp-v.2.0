import { QuoteProps } from "../models/types"
import { LikeButton } from "./LikeButton"


export const Quote = (props:QuoteProps) => {
    return (
        <div className="bg-orange-400 w-[70%] flex flex-row rounded-lg shadow-lg shadow-orange-500 duration-150 hover:scale-105">
            <div className="m-2 flex flex-col gap-2">
                <div className="max-h-80 overflow-y-scroll">
                    <div className="mr-2">
                        <text className="font-semibold text-lg italic">{props.quote.content}</text>
                    </div>
                </div>

                <text className="">- {props.quote.author}</text>
                <div>
                    <LikeButton liked={props.quote.liked} likeFn={()=>(props.likeFn(props.quote._id))}/>
                </div>
            </div>
        </div >
    )
}