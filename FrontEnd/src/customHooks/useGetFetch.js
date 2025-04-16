import { useState, useEffect } from "react";

export function useGetFetch(url){
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;

        fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error ("Status of 404 (Not Found)")
                }
                return res.json()
            }).then(data =>  {
                console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            }).catch(err => {
                setError(err.message);
                setIsPending(false);
            });
    }, [url]);

    return {data, isPending, error};
}

