import React, {useState, useEffect} from 'react'
import "./search.scss"
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import SearchItem from '../../components/SearchItem/SearchItem'
import clientAxios from '../../apis';
import { Link, useLocation } from "react-router-dom";
import Filter from '../../components/Filter/Filter'

const Search = () => {
  const location = useLocation();
    const [lists, setLists] = useState([]);
    console.log(lists)

    useEffect(() => {

      const getMov = async () => {
        try {
          const res = await clientAxios.get(`/movies/findtitle/${location.hash.substring(1)}`, {
            headers: {
              token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
            },
          });
          setLists(res);
          console.log(res)
        } catch (err) {
          console.log(err);
        }
  
      }; getMov();
      
    },[]);
  return (
    <div className='search'>
        <NavBar />

        <div className="search__container">
          <div className="search__left">
            <Filter/>
          </div>

          <div className="search__right">
            {lists?.length && lists.map((item, index) => (
            <SearchItem item={item} key={index}/>
            ))}
          </div>

        </div>

        <Footer />
    </div>
  )
}

export default Search