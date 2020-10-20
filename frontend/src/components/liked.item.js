import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/likedItem.css";

function LikedItem({ id, type }) {
  const [item, setItem] = useState({});

  const apiRoute = `https://api.themoviedb.org/3/${type}/${id}?api_key=d12848de02e2a36cbdfe60e9860f6f6c&language=en-US`;

  useEffect(() => {
    axios
      .get(apiRoute)
      .then((res) => setItem(res.data))
      .catch((err) => console.log(err));
  }, [apiRoute]);

  return (
    <div className="likedItem">
      <img
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        alt={`${type} poster`}
      />
      <div className="likedItem__item-info">
        <h3>{item.original_title}</h3>
        <p>{item.overview}</p>
      </div>
    </div>
  );
}

export default LikedItem;
