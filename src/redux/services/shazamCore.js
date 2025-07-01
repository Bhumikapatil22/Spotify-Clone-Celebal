import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { dummySongs } from '../../data/dummySongs';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fakeBaseQuery(), // Replace real API with mock
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      async queryFn() {
        try {
          return { data: dummySongs };
        } catch (error) {
          return { error: { status: 500, message: "Failed to load dummy data" } };
        }
      }
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
