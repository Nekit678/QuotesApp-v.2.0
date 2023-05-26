import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getQuotesPageRequest, getQuotesPageResponse} from "../../models/types"



export const serverApi = createApi(
    {
        reducerPath: 'api',
        baseQuery: fetchBaseQuery(
            {
                baseUrl: "https://api.quotable.io/",
                mode: "cors"
            }
        ),
        endpoints: build => ({
            getQuotesPage: build.query<getQuotesPageResponse, getQuotesPageRequest>({
                query: ({ page, tag = "" }) => ({
                    url: `quotes/?page=${page}&tags=${tag}`
                })
            })
        })
    }
)

export const { useGetQuotesPageQuery} = serverApi