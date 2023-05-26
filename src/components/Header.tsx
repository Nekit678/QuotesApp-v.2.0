import { useNavigate } from "react-router-dom"
import { Button } from "./Button"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"


export const Header = () => {
    const navigate = useNavigate()
    const tags = useSelector((state: RootState) => state.app.tagList)

    return (
        <div className="sticky top-0 z-10 w-full pb-2 pt-2 bg-black flex flex-row flex-wrap justify-center items-center">
            <text onClick={() => (navigate("/"))} className="text-white basis-1/6 text-lg text-center font-semibold cursor-pointer hover:scale-105">QuotesAPP</text>
            <div className="flex basis-5/6 h-fit justify-center flex-wrap gap-2">
                {tags.map(item => (<Button key={item.tag} text={item.title} click={() => (navigate(`/${item.tag}`))} />))}
            </div>
        </div>

    )
}