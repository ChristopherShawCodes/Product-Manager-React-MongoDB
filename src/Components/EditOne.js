import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate, Link,useParams } from 'react-router-dom'
import ('../App.css')

const EditForm = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [errors,setErrors] = useState({})
    const navigate = useNavigate()
    const {id} = useParams()


    useEffect(() =>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res) =>{
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        }).catch((err)=>{
            console.log(err,'Unable to update')
        })
    },[])




    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/update/${id}`,{
            title,
            price,
            description
        }).then((res) =>{
            console.log(res)
            navigate(`/product/${id}`)
        }).catch((err)=>{
            console.log('Unable to update')
            console.log(err)
            // setErrors(err.response.data.errors)
        })
    }




  return (
    <div className='row' id='container'>
        <h3 id='singleTitle'>Edit A Product</h3>
        <div id='allLink'>
        <Link to='/allProducts' id='link' className='nav-link'>All Products</Link>
        </div>
        <form className='form-control' onSubmit={handleSubmit} id='form'>
            <div>
                <label className='form-label'>Title:</label>
                <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" className='form-input' id='input'></input>
            </div>
            <div>
                <label className='form-label'>Price:</label>
                <input onChange={(e)=>setPrice(e.target.value)} value={price} type="text" className='form-input' id='input'></input>
            </div>
            <div>
                <label className='form-label'>Description:</label>
                <input onChange={(e)=>setDescription(e.target.value)} value={description} type="text" className='form-input'></input>
            </div>
            <button className='btn btn-primary' type='submit'>Update Item</button>
        </form>
    </div>
  )
}

export default EditForm