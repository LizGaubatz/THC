import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from "@reach/router";


const Home = () => {
    const [loggedinuser, setLoggedInUser] = useState({})


    useEffect(()=>{
        axios.get("http://localhost:8000/api/users/getloggedinuser", {withCredentials:true})
            .then(res=>{
                console.log("logged in user info", res)
                setLoggedInUser(res.data)
            })
            .catch(err=> {
                navigate("/")
                console.log("errorrrrrr",err)
            })
    }, [])
    return (
        <div>
            <h1>Welcome, {loggedinuser.username} you made it to the dashboard!</h1>
        </div>
    );
};


export default Home;