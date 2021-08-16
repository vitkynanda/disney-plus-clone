import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";

export default function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => setMovie(doc.data()));
  }, [id]);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} alt="" />
          </Background>
          <ImageTitle>
            <img src={movie.titleImg} alt="title" />
          </ImageTitle>
          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" alt="" />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src="images/play-icon-white.png" alt="" />
              <span>TRAILER</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupButton>
              <img src="/images/group-icon.png" alt="" />
            </GroupButton>
          </Controls>
          <Subtitle>{movie.subTitle}</Subtitle>
          <Description>{movie.description}</Description>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  min-width: 170px;
  min-height: 120px;
  width: 35vw;
  height: 30vh;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.5s ease-in-out;
  button {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const PlayButton = styled.button`
  padding-right: 15px;
  border-radius: 4px;
  padding: 0 24px;
  font-size: 15px;
  margin-right: 22px;
  height: 56px;
  border: none;
  background: rgb(249, 249, 249);

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  color: rgb(249, 249, 249);
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;
const AddButton = styled.button`
  color: rgb(249, 249, 249);
  display: flex;
  justify-content: center;
  height: 44px;
  width: 44px;
  border-radius: 50%;
  margin-right: 10px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  span {
    font-size: 30px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;
const GroupButton = styled(AddButton)``;

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  margin-top: 20px;
  min-height: 20px;
`;

const Description = styled.div`
  color: rgb(249, 249, 249);
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
`;
