import { ButtonProps } from "../models/types"

export const Button = (props: ButtonProps) => {
    return (
        <div onClick={props.click} className="flex cursor-pointer bg-orange-400 rounded-lg w-fit shadow-md shadow-orange-600 duration-150 hover:bg-orange-500 hover:scale-110">
            <button className="flex m-1 font-medium">{props.text}</button>
        </div>
    )
}