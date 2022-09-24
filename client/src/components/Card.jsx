import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  object-fit: cover;
`;

const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <Container>
      <Image src="https://img.freepik.com/free-vector/gradient-galaxy-background_23-2148983655.jpg?w=1380&t=st=1664010711~exp=1664011311~hmac=4af2e3514ff6c06b894fb4ffaccdf35c7009454e8278f90d13c639c051e94dd9" />
      <Details>
        <ChannelImage src="https://img.freepik.com/free-photo/cheerful-beautiful-young-asian-woman-feeling-happy-smiling-camera-while-traveling-chinatown-beijing-china_7861-1341.jpg?w=1480&t=st=1664010865~exp=1664011465~hmac=20f4181c8399daf64ac362b96f8d66b618e0334b79af97bb041e6e8916b54ceb" />
        <Texts>
          <Title>Test Video</Title>
          <ChannelName>Quan Phung</ChannelName>
          <Info>660,908 views • 1 day ago</Info>
        </Texts>
      </Details>
    </Container>
  );
};

export default Card;
