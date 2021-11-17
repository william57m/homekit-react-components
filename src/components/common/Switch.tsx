import React, { FC } from 'react';
import styled from '@emotion/styled';

import { WithActiveProps } from './types';


const Slider = styled.div<WithActiveProps>`
  -webkit-transition: .4s;
  transition: .4s;

  &:before {
    position: absolute;
    content: "";
    margin: 5px 0 0 5px;
    height: 125px;
    width: 80px;
    left: 0px;
    top: 125px;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 18px;
    background-color: ${props => props.isActive ? props.theme.colors.lightActive : props.theme.colors.lightGray};
  }
`;

const SwitchContainer = styled.label`
  background: ${props => props.theme.colors.light2};
  height: 260px;
  width: 90px;
  border-radius: 20px;
  cursor: pointer;
  position: relative;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + ${Slider}:before  {
    -webkit-transform: translateY(-125px);
    -ms-transform: translateY(-125px);
    transform: translateY(-125px);
  }
`;

interface SwitchProps {
  /** State of the switch */
  readonly isActive: boolean;
  /** Action triggered on toggle */
  readonly onToggle: () => void;
}

export const Switch: FC<SwitchProps> = (props) => {
  return (
    <SwitchContainer>
      <input type="checkbox" defaultChecked={props.isActive} onChange={props.onToggle} />
      <Slider isActive={props.isActive} />
    </SwitchContainer>
  );
};
