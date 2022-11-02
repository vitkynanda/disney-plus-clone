import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "../features/user/userSlice";
import { auth, provider } from "../firebase";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";

export default function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            username: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/home");
      }
    });
  }, [dispatch, history]);

  const SignIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      const { user } = result;
      dispatch(
        login({
          username: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      history.push("/home");
    });
  };

  const SignOut = () => {
    auth.signOut().then(() => dispatch(logout()));
    history.push("/login");
  };

  return (
    <Nav>
      <Link to="/">
        <Logo src="/images/logo.svg" />
      </Link>
      {!user ? (
        <Login onClick={SignIn}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <Menu to="/">
              <img src="/images/home-icon.svg" alt="home-icon" />
              <span>HOME</span>
            </Menu>
            <Menu to="/search">
              <img src="/images/search-icon.svg" alt="home-icon" />
              <span>SEARCH</span>
            </Menu>
            <Menu to="/watchlist">
              <img src="/images/watchlist-icon.svg" alt="home-icon" />
              <span>WATCHLIST</span>
            </Menu>
            <Menu to="/originals">
              <img src="/images/original-icon.svg" alt="home-icon" />
              <span>ORIGINALS</span>
            </Menu>
            <Menu to="/movies">
              <img src="/images/movie-icon.svg" alt="home-icon" />
              <span>MOVIES</span>
            </Menu>
            <Menu to="/series">
              <img src="/images/series-icon.svg" alt="home-icon" />
              <span>SERIES</span>
            </Menu>
          </NavMenu>
          <UserImage
            onClick={SignOut}
            src="/images/myphoto.jpg"
            alt="profile-pict"
          />
        </>
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: #090b13;
  padding: 0 36px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Logo = styled.img`
  width: 80px;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  color: white;
`;

const Menu = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  color: white;
  text-decoration: none;
  img {
    height: 20px;
  }
  span {
    font-size: 13px;
    letter-spacing: 1.42px;
    position: relative;
    &:after {
      content: "";
      background-color: white;
      height: 2px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      opacity: 0;
      transform-origin: left center;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      transform: scaleX(0);
    }
  }

  &:hover {
    transform: scaleX(1.05);

    span:after {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;

const UserImage = styled.img`
  height: 48px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    &:after {
      content: "Sign Out";
    }
  }
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.5 ease-in-out;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
