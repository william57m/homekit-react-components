import React, { FC, ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import classNames from 'classnames';
import { Bounce} from "./Card";

const Wrapper = styled.div`
  display: inline-block;
`;

interface GridCardContainerProps {
  readonly isActive?: boolean;
  readonly animate?: boolean;
}

export const GridCardContainer = styled.div<GridCardContainerProps> `
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
  width: ${props => props.theme.card.size};
  height: ${props => props.theme.card.size};
  background-color: ${props => props.isActive ? props.theme.card.background.colorActive : props.theme.card.background.colorInactive};
  border-radius:  ${props => props.theme.card.borderRadius};
  box-sizing: border-box;
  cursor: pointer;
  font-family: 'SF UI Display';
  opacity: ${props => props.isActive ? '100%' : (props.isActive === false ? '50%' : '100%')};
  &.animate {
    animation: ${Bounce} 0.5s linear
  }
`;

const CardName = styled.div<GridCardContainerProps>`
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
`;

const CardStatus = styled.div`
  justify-self: start;
  align-self: center;
  grid-area: status;
  font-size: 0.8rem;
  font-weight: bold;
  color: darkgrey;
`;

export const CardIcon = styled.div<GridCardContainerProps>`
  justify-self: start;
  grid-area: icon;
  width: 2.2rem;
  filter: ${props => props.isActive ? 'grayscale(0%)' : 'grayscale(100%)'} ;
  margin-bottom: 0.5rem;
`;

let buttonPressTimer: NodeJS.Timeout;

interface GridCardProps {
  /** Children */
  children?: ReactNode;
  /** Action triggered on press */
  handlePress?: () => void;
  /** Action triggered on long press */
  handleLongPress?: () => void;
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
 * Base Card to be customized
 */
export const GridCard: FC<GridCardProps> = (props) => {
  const [animate, setAnimate] = useState(false);

  function handlePress() {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 500);
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
    <Wrapper>
      <GridCardContainer
          className={classNames({
            'animate': animate,
          })}
        isActive={props.isActive}
        onClick={handlePress}
        onTouchStart={handleButtonPress}
        onTouchEnd={handleButtonRelease}
        onMouseDown={handleButtonPress}
        onMouseUp={handleButtonRelease}
        onMouseLeave={handleButtonRelease}
        animate={animate}
      >
        <CardIcon isActive={props.isActive}>{props.icon}</CardIcon>
        <CardName isActive={props.isActive}>{props.name}</CardName>
        <CardStatus>{props.state}</CardStatus>
        {props.children}
      </GridCardContainer>
    </Wrapper>
  );
};
