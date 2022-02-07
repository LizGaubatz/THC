// import { generatePath } from "react-router-dom";
import { useParams } from "react-router-dom";
// import React, { useEffect, useState, Component } from 'react';
// import axios from 'axios';


const Pages = (props) => {
    const { pages } = useParams();





    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/page')
    //         .then(res => {
    //             setPages(Pages);
    //             // setLoaded(true);
    //             console.log(Pages)
    //         })
    //         .catch(err => console.error(err));
    // }, []);
    return (
        <p>{pages.title}</p>
    )
}

export default Pages;