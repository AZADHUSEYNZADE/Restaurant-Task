import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL } from "../consts";
import { QUERY_KEYS } from "./queryKeys";

export const useCompanyInfo = () => {
  return useQuery([QUERY_KEYS.COMPANY_INFO], async () => {
    const { data } = await axios.get(`${BASE_URL}/api/company-info`);
    return data;
  });
};

export const useFoods = () => {
  return useQuery([QUERY_KEYS.FOODS], async () => {
    const { data } = await axios.get(`${BASE_URL}/api/foods`);
    return data;
  });
};

export const useWaiters = (options = {}) => {
  return useQuery(
    [QUERY_KEYS.WAITERS],
    async () => {
      const { data } = await axios.get(`${BASE_URL}/api/waiters`);
      return data;
    },
    options
  );
};

export const useOrders = () => {
  return useQuery([QUERY_KEYS.ORDERS], async () => {
    const { data } = await axios.get(`${BASE_URL}/api/orders`);
    return data;
  });
};
