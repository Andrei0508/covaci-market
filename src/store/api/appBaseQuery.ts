import { fetchBaseQuery } from '@reduxjs/toolkit/query';

export const appBaseQuery =  fetchBaseQuery({
     //    baseUrl: "http://localhost:4444",
         baseUrl: "https://garden-market-backend.onrender.com",
         credentials: 'include'
    })
