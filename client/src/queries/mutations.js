import axios from "axios";
import { useMutation } from "react-query";
import { BASE_URL } from "../consts";
import { QUERY_KEYS } from "./queryKeys";

export const useFoodsMutation = () => {
  return useMutation([QUERY_KEYS.FOODS_MUTATION], async (data) => {
    const result = await axios.post(`${BASE_URL}/api/foods`, data);
    return result;
  });
};

export const useWaitersMutation = () => {
  return useMutation([QUERY_KEYS.WAITERS_MUTATION], async (data) => {
    const result = await axios.post(`${BASE_URL}/api/waiters`, data);
    return result;
  });
};
