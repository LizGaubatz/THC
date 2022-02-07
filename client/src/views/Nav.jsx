import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Pages from '../components/Pages'
import AddPage from '../helpers/AddPage';
import Img from '../helpers/AddOns';


const Nav = (props) => {
    // const { id } = useParams();
    const [pages, setPages] = useState([]);
    // const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/page`, props.pages)
            .then(res => setPages(res.data))
            .catch(err => console.error(err));
    }, [props.pages]);


    return (
        <div className='nav nav-pills flex-column flex-sm-row align-center p-4 justify-content-end'>
            {pages.map((page, idx) => {
                <Img>Img Here</Img>
                return (
                    <div className='nav-item'>
                        <p key={idx}>
                            |
                            <Link className='nav-item m-2 text-center text-uppercase d-flex align-content-center' to={"/page/" + pages._id + "/" + pages.title}>
                                {page.title}
                            </Link>
                            |
                            {/* <DeleteButton personId={person._id} successCallback={() => removeFromDom(person._id)} /> */}
                        </p>
                    </div>
                )
            })}
            <AddPage></AddPage>
        </div>
    )
}

export default Nav;
