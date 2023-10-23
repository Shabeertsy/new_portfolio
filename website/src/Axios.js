import axios from "axios";
import {baseUrl} from './Constants'

export const instance = axios.create({
    baseURL: baseUrl,
  });
