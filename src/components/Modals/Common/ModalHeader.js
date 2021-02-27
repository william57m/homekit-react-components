import React from 'react';
import styled from '@emotion/styled';

import CloseIconSvg from '../../../resources/icons/close.svg';

const ModalHeaderContainer = styled.div`
  height: 24px;
  padding: 10px;
  position: relative;
  display: flex;
`
const IconContainer = styled.div`
  font-size: 24px;
  margin-right: 10px;

  img {
    height: 24px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.div`
  color: ${props => props.theme.modal.header.title.color};
  font-size: ${props => props.theme.modal.header.title.size};
  font-weight: ${props => props.theme.modal.header.title.weight};
`;

const Subtitle = styled.div`
  color: ${props => props.theme.modal.header.subtitle.color};
  font-size: ${props => props.theme.modal.header.subtitle.size};
  font-weight: ${props => props.theme.modal.header.subtitle.weight};
`;

const CloseIconContainer = styled.div`
  background: #F0F0F0;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  text-align: center;
  cursor: pointer;
  img {
    height: 18px;
    margin-top: 3px;
  }
`

 export function ModalHeader(props) {
  return (
    <ModalHeaderContainer>
      <IconContainer>
        <img src={props.icon} />
      </IconContainer>
      <TitleContainer>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
      </TitleContainer>
      <CloseIconContainer onClick={props.close}>
        <img src={CloseIconSvg} />
      </CloseIconContainer>
    </ModalHeaderContainer>
  );
}
