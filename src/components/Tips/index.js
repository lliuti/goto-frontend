import React from 'react';

import airplane from '../../assets/airplane.png';

import { 
  Container,
  InnerContainer,
  Content,
  Title,
  Text,
  Picture,
  Img,
} from './styles';

export default function Tips() {
  return (
    <Container>
      <InnerContainer>
        <Content>
          <Title>Don't know where to go? Dont worry</Title>
          <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima aliquam libero magnam odit obcaecati possimus quos! Illum exercitationem illo porro delectus, commodi assumenda ad dolore totam autem natus quo. Mollitia.</Text>
        </Content>
        <Picture>
          <Img src={airplane} />
        </Picture>
      </InnerContainer>
    </Container>
  );
}
