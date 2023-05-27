import React from "react";
import { QuoteProps } from "../models/types"
import { LikeButton } from "./LikeButton"
import { useCallback } from 'react';


export const Quote = React.memo((props: QuoteProps) => {

    const likeFn = useCallback(() => {
        props.likeFn(props._id)
    }, [props])

    return (
        <div className="bg-orange-400 w-[70%] flex flex-row rounded-lg shadow-lg shadow-orange-500 duration-150 hover:scale-105 ">
            <div className="m-2 flex flex-col gap-2">
                <div className="max-h-80 overflow-y-scroll">
                    <div className="mr-2">
                        <text className="font-semibold text-lg italic">{props.content}</text>
                    </div>
                </div>

                <text className="">- {props.author}</text>
                <div>
                    <LikeButton liked={props.liked} likeFn={likeFn} />
                </div>
            </div>
        </div >
    )
})