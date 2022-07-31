import styled from "styled-components"
import BgDigivice from '../../assets/imgs/digivice.png'

export const WrapperBgDigivice = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  min-height: 400px;
  background-color: rgba(16, 22, 17, 0.6);
  border-radius: 8px;
  border: 1px solid rgba(234,234,234, 0.4);

  div {
    color: #FFF;
    padding:15px;
    border:1px solid rgba(246, 247, 246, 0.4);
    border-radius: 8px;
    
    h1 {
      font-size: 3rem;
      margin:20px 0;
    }
    h2 {
      font-size: 2rem;
      margin:15px 0;
    }
  }
`;

export const DigiviceBg = styled.div`
  width:45%;
  height: 95%;
  background-image: url(${BgDigivice});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border: none !important;
`;