import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const kittiesApiHeaders = {};

const baseUrl = "http://localhost:8055";

const createRequest = (url) => ({ url, headers: kittiesApiHeaders });

export const kittiesApi = createApi({
	reducerPath: "kittiesApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getKitties: builder.query({
			query: () =>
				createRequest(
					"/items/cats?fields=id,name,tag,description,genre,adopted,age,photos.directus_files_id"
				),
		}),
		getEvents: builder.query({
			query: () =>
				createRequest(
					"/items/events?fields=id,name,description,date,photos.directus_files_id"
				),
		}),
		getKittyDetails: builder.query({
			query: (kittyId) => createRequest(`/items/cats/${kittyId}?fields=id,status,name,tag,description,genre,adopted,age,photos.directus_files_id`),
		}),
	}),
});

export const { useGetKittiesQuery, useGetEventsQuery, useGetKittyDetailsQuery } = kittiesApi;
