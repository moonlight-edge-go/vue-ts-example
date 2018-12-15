import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:5000',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
});

class ApiClient {
  async get<R>(url: string, param: any): Promise<R> {
    const res = await axios({
      url,
      data: JSON.stringify(param),
    });
    return res.data;
  }

  async post<R>(url: string, param: any): Promise<R> {
    const res = await axios({
      url,
      data: JSON.stringify(param),
    });
    return res.data;
  }
}
