import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/posts/1/comments" }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => `comments/`,
    }),
  }),
});

export const { useGetPostQuery } = postApi;