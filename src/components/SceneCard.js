import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { CardContainer } from './Card';


const SceneCardContainer = styled(CardContainer)`
  width: ${props => props.theme.sceneCard.width};
  height: 60px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const SceneCardIcon = styled.div`
  vertical-align: middle;
  color: ${props => props.theme.card.name.colorInactive};
  text-align: center;
  margin-right: 20px;
  margin-left: 10px;
`;

const SceneCardName = styled.div`
  font-size: ${props => props.theme.sceneCard.name.size};
  font-weight: ${props => props.theme.sceneCard.name.weight};
  color: ${props => props.isActive ? props.theme.card.name.colorActive : props.theme.card.name.colorInactive};
`;

export function SceneCard(props) {

  function handlePress() {
    if (props.handlePress) {
      props.handlePress();
    }
  }

  return (
    <SceneCardContainer isActive={props.isActive} onClick={handlePress}>
      <SceneCardIcon isActive={props.isActive}>{props.icon}</SceneCardIcon>
      <SceneCardName isActive={props.isActive}>{props.name}</SceneCardName>
    </SceneCardContainer>
  );
}

SceneCard.propTypes = {
  /** Action triggered on press */
  handlePress: PropTypes.func,
  /** Icon of the card */
  icon: PropTypes.element.isRequired,
  /** State of the card */
  isActive: PropTypes.bool.isRequired,
  /** Name label of the card */
  name: PropTypes.string.isRequired,
};
