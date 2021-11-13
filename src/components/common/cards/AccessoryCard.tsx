import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

import { ActionableCardContainer, CardIcon, CardName, CardState } from './Card';


export const AccessoryCardContainer = styled(ActionableCardContainer)`
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

export const AccessoryCardName = styled(CardName)`
  justify-self: start;
  align-self: flex-end;
  grid-area: name;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 0.2rem;
  text-overflow: ellipsis;
`;

export const AccessoryCardStatus = styled(CardState)`
  justify-self: start;
  align-self: center;
  grid-area: status;
`;

export const AccessoryCardIcon = styled(CardIcon)`
  justify-self: start;
  grid-area: icon;
  width: 1.8rem;
  margin-bottom: 0.5rem;
`;

let buttonPressTimer: NodeJS.Timeout;

interface AccessoryCardProps {
  /** Children */
  readonly children?: ReactNode;
  /** Custom className */
  readonly className?: string;
  /** Action triggered on long press */
  readonly handleLongPress?: () => void;
  /** Action triggered on press */
  readonly handlePress?: () => void;
  /** Icon of the card */
  readonly icon: ReactNode;
  /** State of the card */
  readonly isActive: boolean;
  /** Name label of the card */
  readonly name: string;
  /** State label of the card */
  readonly state: string;
}

export const AccessoryCard: FC<AccessoryCardProps> = (props) => {

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
    <AccessoryCardContainer
      className={props.className}
      isActive={props.isActive}
      onClick={handlePress}
      onTouchStart={handleButtonPress}
      onTouchEnd={handleButtonRelease}
      onMouseDown={handleButtonPress}
      onMouseUp={handleButtonRelease}
      onMouseLeave={handleButtonRelease}
    >
      <AccessoryCardIcon isActive={props.isActive}>{props.icon}</AccessoryCardIcon>
      <AccessoryCardName isActive={props.isActive}>{props.name}</AccessoryCardName>
      <AccessoryCardStatus isActive={props.isActive}>{props.state}</AccessoryCardStatus>
      {props.children}
    </AccessoryCardContainer>
  );
};
