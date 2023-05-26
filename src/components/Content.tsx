import { Route, Routes, useLocation } from "react-router-dom"
import { PageTemplate } from "./PageTemplate"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { getQuotes } from "../redux/selectors/app-selectors"
import { useGetQuotesPageQuery } from "../redux/backend/api"
import { addQuotes, resetQuotes, toggleLike } from "../redux/reducers/app-reducer"
import { useEffect, useState } from "react"



export const Content = () => {
    const location = useLocation()
    const tag = location.pathname.slice(1)

    const [lastPage, setLastPage] = useState(false)
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    const quotes = useSelector((state: RootState) => getQuotes(state, page, tag))
    const pages = useSelector((state: RootState) => state.app.tagList)
    const { data, isFetching, isSuccess } = useGetQuotesPageQuery({ page, tag })


    useEffect(() => {
        if (isSuccess) {
            dispatch(addQuotes(data.results))

            if (data.totalPages === page) {
                setLastPage(true)
            }
        }
    }, [data?.results])

    const addPage = () => {
        if (!lastPage) {
            setPage(page + 1)
        }
    }

    const resetPage = () => {
        setPage(1)
        setLastPage(false)
        dispatch(resetQuotes())
    }

    const toggleLiked = (id: string) => {
        dispatch(toggleLike({ id }))
    }

    return (
        <div className="bg-black">
            <Routes>
                {pages.map((item) => (<Route key={`${item.tag}`} path={`/${item.tag}`} element={<PageTemplate key={`${item.tag}`}
                    quotes={quotes} likeFn={toggleLiked} loadIsFetching={isFetching}
                    showMoreFn={addPage} title={item.title} resetQuotes={resetPage} />} />))}
            </Routes>
        </div>

    )
}