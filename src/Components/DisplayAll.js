import React,{useState,useEffect} from 'react'
import axios from 'axios'
import '../App.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {faker} from '@faker-js/faker'


const DisplayAll = () => {

    const [list,setList] = useState([])
    const randomPhoto = faker.image.technics()

    useEffect(() =>{
        axios.get('http://localhost:8000/api/allProducts')
        .then((res) =>{
        console.log(res)
        setList(res.data)
        }).catch(err => console.log(err))
    },[])





  return (
    <div className='row' id='allContainer'>
    <h3>All Products</h3>
    <div id='allLink'>
    <Link to='/' id='link' className='nav-link'>Add A Product</Link>
    </div>
    {
        list.map((product) =>(
    <div className='card' id='oneCard'>
    <div class="card-header" >
    <ul class="nav nav-tabs card-header-tabs">
      <img src={randomPhoto} alt='product preview' id='oneImage'></img>
        <li class="nav-item">
        <h4 className='card-title'>{product.title}</h4>
            <p className='card-title'>{product.price}</p>
        </li>
        <li class="nav-item">
        </li>
      </ul>
    </div>
                <div className='card-body'>
                    <p>{product.description}</p>
                </div>
            <Link to={`/product/${product._id}`} className='nav-link' id='moreLink'>More Info</Link>            </div>
        ))
    }
    </div>
  )
}

export default DisplayAll