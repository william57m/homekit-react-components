import React, { FC } from 'react';
import styled from '@emotion/styled';


const TemperatureLogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 2.2rem;
  height: 2.2rem;
  background-color: ${props => props.theme.colors.green};
  border-radius: 45px;
`;

const TemperatureText = styled.div`
  text-align: center;
  width: 100%;
  font-size: 0.7rem;
  font-weight: bold;
  color: ${props => props.theme.colors.light1};
`;

interface TemperatureIconProps {
  /** Temperature value */
  readonly temperature: number;
}

export const TemperatureIcon: FC<TemperatureIconProps> = (props) => {
  return (
    <TemperatureLogoContainer>
      <TemperatureText>{props.temperature.toFixed(1)}°</TemperatureText>
    </TemperatureLogoContainer>
  );
};
