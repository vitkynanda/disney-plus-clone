import { useEffect } from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getMovies = async () => {
      const querySnapshot = await getDocs(collection(db, "series"));
      const movies = querySnapshot.docs.map((movie) => movie.data());
      dispatch(setMovies(movies));
    };
    getMovies();
  }, [dispatch]);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover fixed
      no-repeat;
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
