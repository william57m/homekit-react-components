import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { CardContainer, CardIcon } from './Card';


const SceneCardContainer = styled(CardContainer)`
  width: ${props => props.theme.sceneCard.width};
  height: ${props => props.theme.sceneCard.height};
  line-height: 48px;
  display: flex;
  align-items: center;
`;

const SceneCardIcon = styled(CardIcon)`
  vertical-align: middle;
  color: ${props => props.theme.card.name.colorInactive};
  margin-right: 5px;
`;

const SceneCardName = styled.div`
  font-size: ${props => props.theme.sceneCard.name.size};
  font-weight: ${props => props.theme.sceneCard.name.weight};
  color: ${props => props.isActive ? props.theme.card.name.colorActive : props.theme.card.name.colorInactive};
  margin-left: 50px;
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
