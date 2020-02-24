import styled from 'styled-components';

import norway from '../../assets/light-norway.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  background-image: url(${norway});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  padding: 50px 0;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;
export const Title = styled.h2`
  margin-bottom: 50px;
  color: #fff;
`;
export const Text = styled.p`
  color: #f5f5f5;
`;
export const Picture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Img = styled.img`
  width: 250px;
`;
