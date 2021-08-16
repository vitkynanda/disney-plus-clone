import React, { useState } from "react";
import styled from "styled-components";

export default function Viewers() {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);

  return (
    <Container>
      <Wrap
        onMouseEnter={() => setHover1(true)}
        onMouseLeave={() => setHover1(false)}
      >
        {hover1 ? (
          <video autoPlay src="videos/1564674844-disney.mp4" loop>
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src="/images/viewers-disney.png" alt="" />
        )}
      </Wrap>
      <Wrap
        onMouseEnter={() => setHover2(true)}
        onMouseLeave={() => setHover2(false)}
      >
        {hover2 ? (
          <video autoPlay src="videos/1564676296-national-geographic.mp4" loop>
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src="/images/viewers-national.png" alt="" />
        )}
      </Wrap>
      <Wrap
        onMouseEnter={() => setHover3(true)}
        onMouseLeave={() => setHover3(false)}
      >
        {hover3 ? (
          <video autoPlay src="videos/1564676115-marvel.mp4" loop>
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src="/images/viewers-marvel.png" alt="" />
        )}
      </Wrap>
      <Wrap
        onMouseEnter={() => setHover4(true)}
        onMouseLeave={() => setHover4(false)}
      >
        {hover4 ? (
          <video autoPlay src="videos/1564676714-pixar.mp4" loop>
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src="/images/viewers-pixar.png" alt="" />
        )}
      </Wrap>
      <Wrap
        onMouseEnter={() => setHover5(true)}
        onMouseLeave={() => setHover5(false)}
      >
        {hover5 ? (
          <video autoPlay src="videos/1608229455-star-wars.mp4" loop>
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src="/images/viewers-starwars.png" alt="" />
        )}
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0 26px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 24px;

  @media screen and (max-width: 640px) {
    margin-top: 30px;
    display: grid;
    padding: 10px 0 16px;
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
`;

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  cursor: pointer;
  transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    &:after {
    }
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }

  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
