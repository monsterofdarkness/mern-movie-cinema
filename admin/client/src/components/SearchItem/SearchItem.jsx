import React from 'react'
import { Link } from 'react-router-dom'
import "./searchItem.scss"


const SearchItem = (item) => {
  console.log(item.item.video)
  return (
    <div className="searchItem">
      <div className="searchItem__img">
        <img 
        className='searchItem__img-img'
        src= {item.item.imgSm}/>
      </div>

      <div className="item__info">
          <h4>{item.item.title}</h4>
          <h4>Year: { item.item.year }</h4>
          <h4 className="limit">Limit age: <span>{item.item.limit}+</span></h4>
          <h4 className="view">View: {item.item.view} <i className="ri-eye-fill"></i></h4>
          <span className='item__info-desc'>Description: { item.item.desc }</span>
      </div>

      <div className="item__button">
          <Link className='link' to={{ pathname: "/watch", hash: item.item.video,  }}> <i className="ri-play-circle-fill icon"></i> </Link>  
          <Link className='link' to={{ pathname: "/detail",  search: item.item._id,  }}> <i className="ri-information-fill icon"></i> </Link>  
        </div>
    </div>
  )
}

export default SearchItem