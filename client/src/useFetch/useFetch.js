import {useEffect, useState} from "react";
import axios from "axios";

const useFetch = (url) =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true)
            try{
                console.log("Fetching data from:", url);
                const res = await axios.get(url);
                setData(res.data);

            }catch(err){
                console.error("Error fetching data:", err);
                setError(err);
            }
            setLoading(false)
        };
        fetchData();

    },[]);



    const reFetch = async () => {
        setLoading(true)
        try{
            const res = await axios.get(url);
            setData(res.data);

        }catch(err){
            console.error("Error fetching data:", err);
            setError(err);
        }
        setLoading(false)
    };

    return {data, loading, error, reFetch};

};

export default useFetch;
