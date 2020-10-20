import React from "react";
import auth from "../auth";
import { withRouter } from "react-router";
import "../styles/signoutButton.css";
import { connect } from "react-redux";
import { setInitial } from "../redux/user/userActions";

function SignOut(props) {
  return (
    <button
      className="signout-btn"
      onClick={() => {
        if (auth.isAuthenticated()) {
          auth.logout(() => {
            props.setInitial();
            props.history.push("/");
          });
        }
      }}
    >
      Sign Out
    </button>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setInitial: () => dispatch(setInitial()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignOut));
