import React, { useEffect, useState } from 'react';

export default function Teammembers() {
    const [data, getData] = useState([]);
    const URL = 'https://jsonplaceholder.typicode.com/users'
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = () => {
        fetch(URL)
            .then((res) => res.json())
            .then((response) => {
                console.log(response);
                getData(response);
            })
    }
    return (
        <div>
            <h2>Here is a list of your team leaders</h2>
            <tbody>
                <tr>
                    <th>Name </th>
                    <th> Email </th>
                    <th> City </th>
                    <th>Role in Company </th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.address.city}</td>
                        <td>{item.company.bs}</td>
                    </tr>
                ))}
            </tbody>

        </div>
    )
}