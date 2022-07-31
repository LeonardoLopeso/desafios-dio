import styled from "styled-components"

export const WrapperCard = styled.div`
  display:flex;
  flex-direction: column;
  width: 300px;
  height:355px;
  color: #FFF;
  background-color: rgba(16, 22, 17, 0.6);
  border-radius: 8px;
  margin:15px;
  padding:5px;
  border: 1px solid rgba(234,234,234, 0.4);
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;

  transition: all .2s;

  img {
    width:100%;
    height:65%;
    border-radius:4px;
  }

  &:hover {
    transform: scale(1.02)
  }

`;

export const WrapperDigimonInfo = styled.div`
  height:100%;
  border:1px solid rgba(246, 247, 246, 0.4);
  border-radius: 4px;
  padding: 5px;
  margin: 5px 0 5px 0;
`;

export const NameDigimon = styled.span`
  font-size: 1.3rem;
  width: 100%;
  margin: 80px 0;
  border-bottom: 1px solid #f1f2f3;
`;

export const LevelDigimon = styled.span`
  font-size: 1.1rem;
`;

export const LabelInfo = styled.span`
  font-size:0.8rem;
  display:block;
  margin:10px 0;
`;