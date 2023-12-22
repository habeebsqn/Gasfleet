import axios, {AxiosRequestConfig} from 'axios';

type orderProps = {
  order: any;
};

const API_BASE_URL = 'https://api.gasleet.com/api/v1/';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiYWRlQGdtYWlsLmNvbSJ9LCJpYXQiOjE3MDMyMDc0MzgsImV4cCI6MTcwMzI5MDIzOH0.GL--sIhqteEmCx6se6E0sOxzHwvHHacc0Wsnio7q5v4';

export const postOrder = (order: orderProps) => {
  const headers: AxiosRequestConfig['headers'] = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  return axios.post(`${API_BASE_URL}customer/order/start`, order, {headers});
};
