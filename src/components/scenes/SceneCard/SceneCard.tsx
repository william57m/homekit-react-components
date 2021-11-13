import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

import { ActionableCardContainer, CardIcon, CardName } from '../../common/cards';


const SceneCardContainer = styled(ActionableCardContainer)`
  width: ${props => props.theme.sceneCard.width};
  height: ${props => props.theme.sceneCard.height};
  display: flex;
  align-items: center;
  padding: 10px;
`;

const SceneCardIcon = styled(CardIcon)`
  color: ${props => props.theme.card.name.colorInactive};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  max-width: 28px;
`;

const SceneCardName = styled(CardName)`
  padding: 10px;
  flex-grow: 1;
`;

interface SceneCardProps {
  /** Icon of the card */
  readonly icon: ReactNode;
  /** State of the card */
  readonly isActive: boolean;
  /** Name label of the card */
  readonly name: string;
  /** Action triggered on press */
  readonly onPress: () => void;
}

export const SceneCard: FC<SceneCardProps> = ({
  isActive,
  icon,
  name,
  onPress,
}) => {
  return (
    <SceneCardContainer isActive={isActive} onClick={onPress}>
      <SceneCardIcon isActive={isActive}>{icon}</SceneCardIcon>
      <SceneCardName isActive={isActive}>{name}</SceneCardName>
    </SceneCardContainer>
  );
};
