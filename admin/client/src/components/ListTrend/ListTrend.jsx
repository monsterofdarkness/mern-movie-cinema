import React from 'react'
import { useRef, useState, useEffect } from "react";
import TrendItem from '../TrendItem/TrendItem';
import './listTrend.scss'
import clientAxios from '../../apis';

export default function List() {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [trendList, setTrendList] = useState([])

  const listRef = useRef();

  useEffect(() => {
    const getMovc = async () => {
      try {
        const res = await clientAxios.get(`/movies/findtrend/`, {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setTrendList(res);
        console.log(res)
        trendList.sort((a, b) => (a.view > b.view) ? 1 : -1)
      } catch (err) {
        console.log(err);
      }
    }; getMovc();
  },[]);

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">TRENDING </span>
      <div className="wrapper">
        <i
          className="ri-arrow-left-s-line sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}>
        </i>
        <div className="container" ref={listRef}>
          {trendList && trendList.map((item, i) => (
              <TrendItem key={i} index={i} item={item} />
            ))}
        </div>
        <i
          className="ri-arrow-right-s-line sliderArrow right"
          onClick={() => handleClick("right")}>
        </i>
      </div>
    </div>
  );
}
