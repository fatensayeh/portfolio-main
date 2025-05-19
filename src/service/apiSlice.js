// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: "http://139.59.149.92:3001" }),
  tagTypes: ["Note"],
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getPosts` endpoint is a "query" operation that returns data.
    // The return value is a `Post[]` array, and it takes no arguments.
    getUsers: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: () => "/users",
    }),
    getNotes: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: () => "/notes",
      providesTags: ["Note"],
    }),
    getNotesByUser: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: (user_id) => `/notes/${user_id}`,
      providesTags: ["Note"],
    }),
    addNewNote: builder.mutation({
      query: (initialPost) => ({
        // The HTTP URL will be '/fakeApi/posts'
        url: "/notes",
        // This is an HTTP POST request, sending an update
        method: "POST",
        // Include the entire post object as the body of the request
        body: initialPost,
      }),
      invalidatesTags: ["Note"],
    }),
    deleteNote: builder.mutation({
      query: (id) => ({
        url: `/notes/${id}`, // ID in the URL path
        method: "DELETE",
      }),
      invalidatesTags: ["Note"],
    }),
  }),
});

export const {
  useGetNotesQuery,
  useGetUsersQuery,
  useAddNewNoteMutation,
  useDeleteNoteMutation,
  useGetNotesByUserQuery
} = apiSlice;
