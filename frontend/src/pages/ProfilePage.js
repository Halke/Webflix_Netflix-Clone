import React, { useEffect, useState } from "react";
import Navbar from "../components/signedIn.navbar";
import LikedItem from "../components/liked.item";
import { connect } from "react-redux";
import { setUser, getUser } from "../redux/user/userActions";
import axios from "axios";

function ProfilePage(props) {
  const [liked, setLiked] = useState({
    likedMovies: [],
    likedSeries: [],
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get-watched/${props.user.email}`)
      .then((res) => {
        setLiked({
          likedMovies: res.data.likedMovies,
          likedSeries: res.data.likedSeries,
        });
      })
      .catch((err) => {
        console.log("Fetching error: " + err);
      });
  }, [props.user.email]);

  return (
    <div className="profilePage">
      <Navbar />
      <div className="profilePage__heading">
        <div className="profilePage__image">
          <img
            src={`${process.env.PUBLIC_URL}/images/profileIcon1.png`}
            alt="Profile avatar"
          />
        </div>
        <div className="profilePage__info">
          <h3>{props.user.email}</h3>
          <h3>{props.user.name}</h3>
        </div>
      </div>
      <div className="profilePage__liked">
        <h2>Liked Movies</h2>
        <div id="profilePage__liked-movies">
          {liked.likedSeries.length === 0 ? (
            <h3 className="profilePage__empty-array">
              Nothing has been liked..
            </h3>
          ) : (
            liked.likedMovies.map((content) => (
              <LikedItem key={content.id} id={content.id} type="movie" />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
    getUser: () => dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
