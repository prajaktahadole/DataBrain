import React, { useState } from "react";
import axios from "axios";

const GetRequest = ()=>{
    const [query, setQuery] = useState("");
    const [isLoading , setIsLoading] = useState(false);
    const [isError , setIsError] = useState(false);
    const [users , setUsers] =   useState([]);
    

function fetchUsers(query , page){

    if(!query){
        return Promise.reject("query should be provioded ")
    }
    return axios.get("https://api.github.com/search/users", {
        params : {
            q : query ,
            per_page : 10,
            page         // using get request pass params
        }
    });
}


    React.useEffect(() =>{
        setIsLoading(true);
        setIsError(false);
        fetchUsers("")
        .then((res)=>{
            setUsers(res.data.items);
        })
        .catch((err) =>{
            setIsError(true);
        })
        .finally( () =>{
            setIsLoading(false);
        });
    }, [])





    const handleSearch = () =>{
        setIsLoading(true);
        setIsError(false);
        fetchUsers(query)
        .then((res)=>{
            setUsers(res.data.items);
        })
        .catch((err) =>{
            setIsError(true);
        })
        .finally( () =>{
            setIsLoading(false);
        });
    };

    return (
       <div id="search">
            <h1>Search</h1>
        <div>
            <input 
             value={query}
             onChange={(e) => setQuery(e.target.value)} 
             placeholder="search"
            />
            <button disabled={isLoading} onClick={handleSearch}>
                {isLoading ? "loading" : "SEARCH"}
                </button>
        </div>
        {isError ? "please fill te text" : null}
        <div>
            {users?.map((item) =>(
                <div key={item.id}>{item.login}</div>
            ))}
        </div>
       </div>
    )
}


export {GetRequest};