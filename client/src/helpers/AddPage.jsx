import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { generatePath, } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const AddPage = props => {
    const [loggedinuser, setLoggedInUser] = useState(null)
    // history = useHistory();
    const [page, setPage] = useState({
        title: "",
        path: ""
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
                // console.log(generatePath(`/page/${res.data._id}/${page.title}`, { _id: res.data._id }, { title: page.title }))
                // setPage({
                //     [e.target.path]: (generatePath(`/page/${res.data._id}/${page.title}`, { _id: res.data._id }, { title: page.title }))
                // })
                let url = (generatePath(`/page/${res.data._id}/${page.title}`, { _id: res.data._id }, { title: page.title }))
                url.push(res.data.path)
                // res.data.push(`/page/${res.data._id}/${page.title}`)
                window.location.reload()
            })
            .catch(err => {
                console.log("errorrrrrr222", err)
            })
    }

    return (
        <div className='nav-item m-3 d-flex text-center '>
            {loggedinuser ?
                <Popup trigger={<button className='btn-sm btn-primary m-3'>New Page</button>}>
                    <form onSubmit={newPage} className='p-3'>
                        < label > Title </label >
                        <input type="text" name="title" onChange={regChangeHandler} className="form-control" />
                        <input type="submit" value="Create" className="btn-sm btn-primary m-3" />
                    </form >
                </Popup>
                : <p>Error</p>}
        </div>
    )
}

export default AddPage;