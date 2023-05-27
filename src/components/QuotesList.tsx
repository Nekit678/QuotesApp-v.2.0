import { QuoteListProps } from "../models/types"
import { Quote } from "./Quote"

export const QuotesList = (props: QuoteListProps) => {
    return (
        <div className="flex flex-col gap-6 items-center">
            {props.quotes.map((item)=>(<Quote key={item._id} {...item} likeFn={props.likeFn} />))}
        </div>
    )
}