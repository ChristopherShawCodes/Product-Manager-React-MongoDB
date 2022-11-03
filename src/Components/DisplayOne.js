import React,{useState, useEffect} from 'react'
import {useParams, useNavigate, Link} from 'react-router-dom'
import axios from 'axios'
import {faker} from '@faker-js/faker'


const DisplayOne = () => {

    const {id} = useParams()
    const [product,setProduct] = useState({})
    const navigate = useNavigate()
    const randomPhoto = faker.image.technics()

    useEffect(() =>{
        //Server --> Routes --> Get One Movie
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res)=>{
            //storing to State
            setProduct(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const handleDelete = (id) =>{
      axios.delete(`http://localhost:8000/api/delete/${id}`)
      .then((res)=>{
        navigate('/allProducts')
        console.log('Deleted item from db.')
      }).catch((err)=>{
        console.log(err, 'Unable to delete item from db.')
      })
    }


  return (
    <div className='row'>
    <h3 id='singleTitle'>A Single Product</h3>
    <div id='allLink'>
    <Link to='/allProducts' id='link' className='nav-link'>All Products</Link>
    <Link to='/' id='link' className='nav-link'>Add A Product</Link>
    </div>
    <div class="card" id='oneCard'>
    <div class="card-header" >
      <ul class="nav nav-tabs card-header-tabs">
      <img src={randomPhoto} alt='product preview' id='oneImage'></img>
        <li class="nav-item">
        <Link className='nav-link' to={`/update/${product._id}`}>Edit product</Link>
        </li>
        <li class="nav-item">
                <a><button onClick={(e)=> handleDelete(product._id)} className='nav-link text-danger'>Delete product</button></a>
        </li>
      </ul>
    </div>
    <div class="card-body">
                    <p class="card-title"> {product.title}</p>
                    <p> {product.description}</p>
                    <p> {product.price}</p>
    </div>
  </div>
  </div>
  )
}

export default DisplayOne