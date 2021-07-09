import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { keyframes } from "@emotion/react";

export const Bounce = keyframes`
  40% {
    -webkit-transform: scale(1.08);
  }
  50% {
    -webkit-transform: scale(0.98);
  }
  55% {
    -webkit-transform: scale(1.02);
  }
  60% {
    -webkit-transform: scale(0.98);
  }
  100% {
    -webkit-transform: scale(1);
  }
`;

export const CardContainer = styled.div`
  position: relative;
  display: inline-block;
  width: ${props => props.theme.card.size};
  height: ${props => props.theme.card.size};
  background-color: ${props => props.isActive ? props.theme.card.background.colorActive : props.theme.card.background.colorInactive};
  border-radius:  ${props => props.theme.card.borderRadius};
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
  font-family: 'SF UI Display';
  user-select: none;
  opacity: ${props => props.isActive ? '100%' : (props.isActive === false ? '70%' : '100%')};
`;

export const CardName = styled.div`
  position: absolute;
  bottom: 26px;
  left: 10px;
  width: calc(100% - 20px);
  font-size: ${props => props.theme.card.name.size};
  font-weight: ${props => props.theme.card.name.weight};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.isActive ? props.theme.card.name.colorActive : props.theme.card.name.colorInactive};

`;

export const CardState = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: ${props => props.theme.card.state.size};
  font-weight: ${props => props.theme.card.state.weight};
  color: ${props => props.isActive ? props.theme.card.state.colorActive : props.theme.card.state.colorInactive};
`;

export const CardIcon = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 30px;
  filter: ${props => props.isActive ? 'grayscale(0%)' : 'grayscale(100%)'} ;
`;

var buttonPressTimer;

/**
 * Base Card to be customized
 */
export function Card(props) {

  function handlePress() {
    if (props.handlePress) {
      props.handlePress();
    }
  }

  function handleButtonPress () {
    if (props.handleLongPress) {
      buttonPressTimer = setTimeout(() => props.handleLongPress(), 1000);
    }
  }

  function handleButtonRelease () {
    clearTimeout(buttonPressTimer);
  }

  return (
    <CardContainer
      isActive={props.isActive}
      onClick={handlePress}
      onTouchStart={handleButtonPress}
      onTouchEnd={handleButtonRelease}
      onMouseDown={handleButtonPress}
      onMouseUp={handleButtonRelease}
      onMouseLeave={handleButtonRelease}
    >
      <CardIcon isActive={props.isActive}>{props.icon}</CardIcon>
      <CardName isActive={props.isActive}>{props.name}</CardName>
      <CardState isActive={props.isActive}>{props.state}</CardState>
      {props.children}
    </CardContainer>
  );
}

Card.propTypes = {
  /** Children */
  children: PropTypes.element,
  /** Action triggered on press */
  handlePress: PropTypes.func,
  /** Action triggered on long press */
  handleLongPress: PropTypes.func,
  /** Icon of the card */
  icon: PropTypes.element.isRequired,
  /** State of the card */
  isActive: PropTypes.bool.isRequired,
  /** Name label of the card */
  name: PropTypes.string.isRequired,
  /** State label of the card */
  state: PropTypes.string.isRequired,
};
