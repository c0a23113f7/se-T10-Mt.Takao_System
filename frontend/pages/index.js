import React, { useEffect, useState } from "react";

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch(process.env.API_URL + "/");
        const result = await response.json();
        setData(result.message);
    };

    fetchData();
    }, []);

    return <div>Default Message from API: {data}</div>;
}