import React from 'react';

import copacabana from '../../assets/copacabana.jpg';

import { 
  Container,
  //
  Top,
  Title,
  Description,
  //
  GridContainer,
  Boxes,
  Box,
  BoxTitle,
  BoxImg,
  BoxPrice,
  Promo,
  PromoTitle,
  PromoImg,
  PromoDescription,
  Content,
} from './styles';

export default function Intro() {
  return (
    <Container>
      <Top>
        <Title>Go<span>To</span></Title>
        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eum blanditiis ut minima quaerat iste veniam debitis vero ad ipsa!</Description>
      </Top>
      <GridContainer>
        <Boxes>
          <Box>
            <BoxImg src={copacabana}/>
            <Content>
              <BoxTitle>Title</BoxTitle>
              <BoxPrice>$ 250.00</BoxPrice>
            </Content>
          </Box>
          <Box>
            <BoxImg src={copacabana}/>
            <Content>
              <BoxTitle>Title</BoxTitle>
              <BoxPrice>$ 250.00</BoxPrice>
            </Content>
          </Box>
          <Box>
            <BoxImg src={copacabana}/>
            <Content>
              <BoxTitle>Title</BoxTitle>
              <BoxPrice>$ 250.00</BoxPrice>
            </Content>
          </Box>
          <Box>
            <BoxImg src={copacabana}/>
            <Content>
              <BoxTitle>Title</BoxTitle>
              <BoxPrice>$ 250.00</BoxPrice>
            </Content>
          </Box>
        </Boxes>
        <Promo>
          <PromoImg src={copacabana}/>
          <Content>
            <PromoTitle>65% OFF!</PromoTitle>
            <PromoDescription>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</PromoDescription>
          </Content>
        </Promo>
      </GridContainer>
    </Container>
  );
}
