import { useEffect} from "react"
import { Button } from "./Button"
import { QuotesList } from "./QuotesList"
import { PageTemplateProps } from "../models/types"

export const PageTemplate = (props: PageTemplateProps) => {

    useEffect(() => {
        return () => {
            if (props.resetQuotes) {
                props.resetQuotes()
            }
        }
    }, [])

    return (
        <div className="flex flex-col gap-4 items-center">
            <text className="text-white text-4xl font-semibold">{props.title}</text>
            <QuotesList quotes={props.quotes} likeFn={props.likeFn} />
            <Button text="Показать еще" click={props.showMoreFn}></Button>
        </div>
    )
}