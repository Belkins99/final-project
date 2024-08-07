import axios from 'axios';
import { toast } from "react-toastify";


const baseUrl = import.meta.env.VITE_BASE_URL;

export const apiClient = axios.create(
    {
        baseURL: baseUrl,
    }
);
