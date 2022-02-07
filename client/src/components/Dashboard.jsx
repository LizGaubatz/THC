import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { generatePath } from 'react-router-dom';
import AddPage from '../helpers/AddPage';
import Nav from '../views/Nav';


const Dashboard = (props) => {
    const [loggedinuser, setLoggedInUser] = useState(null)
    const [page, setPage] = useState({
        title: "",
    })

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/getloggedinuser", { withCredentials: true })
            .then(res => {
                console.log("logged in user info", res)
                setLoggedInUser(res.data.user)
            })
            .catch(err => {
                console.log("errorrrrrr", err)
                // Redirect("/")
            })
    }, [])

    const logout = (e) => {
        axios.get("http://localhost:8000/api/users/logout", { withCredentials: true })
            .then(res => {
                console.log(res)
                setLoggedInUser()
            })
    }

    const regChangeHandler = (e) => {
        setPage({
            ...page,
            [e.target.name]: e.target.value
        })
    }


    const newPage = async (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/page/new", page)
            .then(res => {
                console.log("success!", (res))
            })
            .catch(err => {
                console.log("errorrrrrr222", err)
            })
        console.log(generatePath(`/page/${page._id}/${page.title}`, { _id: page._id }, { title: page.title }))
    }


    return (
        <div className='container'>
            {loggedinuser ?
                <div>
                    {/* <h2>Welcome, {loggedinuser.username} you made it to the dashboard!</h2> */}
                    <Nav></Nav>
                    <></>
                    <button className="btn btn-primary" onClick={logout}>Logout</button>
                </div>
                : <p>Error</p>}
        </div>
    );
};


export default Dashboard;