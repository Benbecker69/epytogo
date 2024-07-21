import React, { useEffect, useState } from 'react';
import { getSites } from '../services/api';

const SiteList = () => {
    const [sites, setSites] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getSites();
            setSites(result);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Sites Touristiques</h1>
            <ul>
                {sites.map(site => (
                    <li key={site.id}>
                        <h2>{site.nom}</h2>
                        <p>{site.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SiteList;
