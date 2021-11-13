import styled from '@emotion/styled';
import { WithActiveProps } from '../types';


export const CardContainer = styled.div`
  border-radius:  ${props => props.theme.card.borderRadius};
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'SF UI Display';
  user-select: none;
`;

export const ActionableCardContainer = styled(CardContainer)<WithActiveProps>`
  background-color: ${props => props.isActive ? props.theme.card.background.colorActive : props.theme.card.background.colorInactive};
  opacity: ${props => props.isActive ? '100%' : (props.isActive === false ? '70%' : '100%')};
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
`;

export const CardName = styled.div<WithActiveProps>`
  font-size: ${props => props.theme.card.name.size};
  font-weight: ${props => props.theme.card.name.weight};
  color: ${props => props.isActive ? props.theme.card.name.colorActive : props.theme.card.name.colorInactive};
`;

export const CardState = styled.div<WithActiveProps>`
  font-size: ${props => props.theme.card.state.size};
  font-weight: ${props => props.theme.card.state.weight};
  color: ${props => props.isActive ? props.theme.card.state.colorActive : props.theme.card.state.colorInactive};
`;

export const CardIcon = styled.div<WithActiveProps>`
  filter: ${props => props.isActive ? 'grayscale(0%)' : 'grayscale(100%)'} ;

  img {
    max-width: 28px;
  }
`;

export const CardTitle = styled.div`
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: ${props => props.theme.card.background.colorActive};
  color: ${props => props.theme.colors.textDark};
  padding-left: 10px;
  box-sizing: border-box;
  font-size: ${props => props.theme.card.name.size};
  font-weight: ${props => props.theme.card.name.weight};
`;
