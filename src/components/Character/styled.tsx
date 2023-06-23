import styled from 'styled-components'
export const StyledCharacterCard = styled.div`
  height: 280px;
  background-color: transparent;
  perspective: 1000px;

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  .flip-card-rotation {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    color: black;
    img {
      width: 100px;
      object-fit: cover;
      height: 150px;
      cursor: pointer;
    }
  }

  .flip-card-back {
    transform: rotateY(180deg);
  }
`
