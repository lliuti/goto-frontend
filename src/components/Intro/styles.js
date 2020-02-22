import styled from 'styled-components';

import norway from '../../assets/dark-norway.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${norway});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  padding: 50px 100px;
`;
//
export const Top = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 50px 100px; */
`;
export const Title = styled.h1`
  color: #777fff;
  margin-bottom: 20px;
  font-size: 42px;

  span {
    color: #fff;
  }
`;
export const Description = styled.p`
  color: #f1f1f1;
`;
//
export const GridContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
`;
//
export const Boxes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
  column-gap: 20px;
`;
export const Box = styled.div`
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  border-radius: 4px;
  transition: 250ms all;
  cursor: pointer;

  &:hover {
    border-color: #777fff;
  };
`;
export const BoxTitle = styled.h2`
  color: #fff;
  margin: 10px 0;
`;
export const BoxImg = styled.img`
  width: 100%;
  border-radius: 4px;
`;
export const BoxPrice = styled.span`
  color: #f1f1f1;
  margin: 0 0 10px;
`;
//
export const Promo = styled.div``;
export const PromoTitle = styled.h2`
  color: #fff;
`;
export const PromoImg = styled.img``;
export const PromoDescription = styled.p`
  color: #f1f1f1;
`;











