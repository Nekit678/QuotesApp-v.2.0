import { useEffect } from "react"
import { Button } from "./Button"
import { QuotesList } from "./QuotesList"
import { PageTemplateProps } from "../models/types"
import { ReactComponent as Preloader } from "../assets/preloader.svg"

export const PageTemplate = (props: PageTemplateProps) => {
    useEffect(() => {
        return () => {
            if (props.resetQuotes) {
                props.resetQuotes()
            }
        }
    }, [])

    return (
        <div className="flex flex-col gap-4 items-center pb-52">
            <text className="text-white text-4xl font-semibold">{props.title}</text>
            <QuotesList quotes={props.quotes} likeFn={props.likeFn} />
            {props.loadIsFetching ? <Preloader></Preloader> : <Button text={!props.lastPage ? "Показать еще" : "Цитаты закончились! :("} click={props.showMoreFn}></Button>}
        </div>
    )
}