import React from "react";
import { Link } from "react-router-dom";
import { selectMovies } from "../features/movie/movieSlice";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function Movies() {
  const movies = useSelector(selectMovies);

  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        {movies
          .map((item, index) => (
            <Wrap key={index}>
              <Link to={`/detail/${item.id}`}>
                <img src={item.cardImg} alt={item.title} />
              </Link>
            </Wrap>
          ))
          .slice(0, 4)}
      </Content>
      <h4>New to Disney+</h4>
      <Content>
        {movies
          .map((item, index) => (
            <Wrap key={index}>
              <Link to={`/detail/${item.id}`}>
                <img src={item.cardImg} alt={item.title} />
              </Link>
            </Wrap>
          ))
          .slice(4, 8)}
      </Content>
      <h4>Kids</h4>
      <Content>
        {movies
          .map((item, index) => (
            <Wrap key={index}>
              <Link to={`/detail/${item.id}`}>
                <img src={item.cardImg} alt={item.title} />
              </Link>
            </Wrap>
          ))
          .slice(9, 13)}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;

  margin-bottom: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0 16px 10px -10px;
  }
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 25px;
`;
