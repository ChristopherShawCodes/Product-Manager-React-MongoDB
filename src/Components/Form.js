import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import ('../App.css')

const Form = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [errors,setErrors] = useState({})
    const navigate = useNavigate()



    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/addProduct',{
            title,
            price,
            description
        }).then((res) =>{
            console.log(res)
            navigate('/allProducts')
        }).catch((err)=>{
            console.log('Unable to Submit to DB')
            console.log(err)
            // setErrors(err.response.data.errors)
        })
    }




  return (
    <div className='row' id='container'>
        <h3 id='singleTitle'>Add A Product</h3>
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
            <button className='btn btn-primary' type='submit'>Create</button>
        </form>
    </div>
  )
}

export default Form