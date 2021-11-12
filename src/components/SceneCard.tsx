import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

import { CardContainer } from './Card';

interface SceneCardContainerProps {
  isActive: boolean;
}

const SceneCardContainer = styled(CardContainer)<SceneCardContainerProps>`
  width: ${props => props.theme.sceneCard.width};
  height: 60px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

interface SceneCardIconProps {
  isActive: boolean;
}

const SceneCardIcon = styled.div<SceneCardIconProps>`
  vertical-align: middle;
  color: ${props => props.theme.card.name.colorInactive};
  text-align: center;
  margin-right: 20px;
  margin-left: 10px;
`;

interface SceneCardNameProps {
  isActive: boolean;
}

const SceneCardName = styled.div<SceneCardNameProps>`
  font-size: ${props => props.theme.sceneCard.name.size};
  font-weight: ${props => props.theme.sceneCard.name.weight};
  color: ${props => props.isActive ? props.theme.card.name.colorActive : props.theme.card.name.colorInactive};
`;

interface SceneCardProps {
  /** Action triggered on press */
  handlePress?: () => void;
  /** Icon of the card */
  icon: ReactNode;
  /** State of the card */
  isActive: boolean;
  /** Name label of the card */
  name: string;
}

export const SceneCard: FC<SceneCardProps> = ({
  isActive,
  icon,
  name,
  handlePress,
}) => {

  function onClick() {
    if (handlePress) {
      handlePress();
    }
  }

  return (
    <SceneCardContainer isActive={isActive} onClick={onClick}>
      <SceneCardIcon isActive={isActive}>{icon}</SceneCardIcon>
      <SceneCardName isActive={isActive}>{name}</SceneCardName>
    </SceneCardContainer>
  );
};
