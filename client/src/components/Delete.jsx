import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Delete = (props) => {
    const [item, setItem] = useState({})
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/item/${id}`)
            .then(res => setItem(res.data))
            .catch(err => console.error(err));
    });
    
    const deleteItem = () => {
        axios.delete(`http://localhost:8000/api/item/delete/${props.id}`)
        .then(res => {
            console.log("response when deleting", res)
            history.push("/")
        })
        .catch(err => console.log(err))
    }
    return (
        
        <button onClick={deleteItem} type="button"  className="btn btn-danger">Adopt {item.name}</button>
        
    )
}

export default Delete;