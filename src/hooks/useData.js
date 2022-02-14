/* // Custom hook to forms
import { useState, useEffect } from "react";
import axios from "axios";

const axiosInstance = axios.create({
    // la base que tendrán todas las url que voy a consumir
    baseURL:"https://www.datos.gov.co/",
  });

export const useData = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        axiosInstance.get("resource/xdk5-pm3f.json").then((response) => {
            setList(response.data);
        });
    }, []);

    return list;
}; */