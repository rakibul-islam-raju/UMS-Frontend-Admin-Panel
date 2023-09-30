import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
	reducerPath: "pokemonApi",
	baseQuery: axiosBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
	endpoints: (build) => ({}),
	tagTypes: ["user"],
});
