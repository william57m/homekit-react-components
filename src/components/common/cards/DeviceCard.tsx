import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

import { ActionableCardContainer } from './Card';

interface DeviceCardContainerProps {
  readonly isActive?: boolean;
}

export const DeviceCardContainer = styled<FC<DeviceCardContainerProps>>(ActionableCardContainer)`
  display: grid;
  padding: 10px;
  grid-template-areas: 
    "icon info"
    "name name"
    "status status"
  ;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 2fr 1fr;
  max-height: ${props => props.theme.card.size};
  align-items: start;
  overflow: hidden;
  width: ${props => props.theme.card.size};
  height: ${props => props.theme.card.size};
  cursor: pointer;
  font-family: 'SF UI Display';
`;

const GridCardName = styled.div<DeviceCardContainerProps>`
  justify-self: start;
  align-self: flex-end;
  grid-area: name;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: ${props => props.theme.card.name.size};
  font-weight: ${props => props.theme.card.name.weight};
  color: ${props => props.isActive ? props.theme.card.name.colorActive : props.theme.card.name.colorInactive};
  margin-bottom: 0.2rem;
  text-overflow: ellipsis;
`;

const GridCardStatus = styled.div<DeviceCardContainerProps>`
  justify-self: start;
  align-self: center;
  grid-area: status;
  font-size: ${props => props.theme.card.state.size};
  font-weight: ${props => props.theme.card.state.weight};
  color: ${props => props.isActive ? props.theme.card.state.colorActive : props.theme.card.state.colorInactive};
`;

export const GridCardIcon = styled.div<DeviceCardContainerProps>`
  justify-self: start;
  grid-area: icon;
  width: 1.8rem;
  filter: ${props => props.isActive ? 'grayscale(0%)' : 'grayscale(100%)'} ;
  margin-bottom: 0.5rem;
`;

let buttonPressTimer: NodeJS.Timeout;

interface DeviceCardProps {
  /** Children */
  children?: ReactNode;
  /** Action triggered on long press */
  handleLongPress?: () => void;
  /** Action triggered on press */
  handlePress?: () => void;
  /** Icon of the card */
  icon: ReactNode;
  /** State of the card */
  isActive: boolean;
  /** Name label of the card */
  name: string;
  /** State label of the card */
  state: string;
}

/**
 * Base device card to be customized
 */
export const DeviceCard: FC<DeviceCardProps> = (props) => {

  function handlePress() {
    if (props.handlePress) {
      props.handlePress();
    }
  }

  function handleButtonPress () {
    if (props.handleLongPress) {
      buttonPressTimer = setTimeout(() => props.handleLongPress && props.handleLongPress(), 1000);
    }
  }

  function handleButtonRelease () {
    clearTimeout(buttonPressTimer);
  }

  return (
    <DeviceCardContainer
      isActive={props.isActive}
      onClick={handlePress}
      onTouchStart={handleButtonPress}
      onTouchEnd={handleButtonRelease}
      onMouseDown={handleButtonPress}
      onMouseUp={handleButtonRelease}
      onMouseLeave={handleButtonRelease}
    >
      <GridCardIcon isActive={props.isActive}>{props.icon}</GridCardIcon>
      <GridCardName isActive={props.isActive}>{props.name}</GridCardName>
      <GridCardStatus>{props.state}</GridCardStatus>
      {props.children}
    </DeviceCardContainer>
  );
};
