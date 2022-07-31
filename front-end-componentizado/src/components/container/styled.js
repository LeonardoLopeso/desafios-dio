import styled from "styled-components"
import SpaceDigital from '../../assets/imgs/bgdigiworld.jpg'


export const WrapperContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: calc(100vh - 160px);
  padding: 20px 0;

  background-image: url(${SpaceDigital});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;

export const SectionCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1400px;
  width:100%;
  padding: 5px;
`;