import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';


const TemperatureLogoContainer = styled.div`
  width: 26px;
  height: 26px;
  background-color: ${props => props.theme.colors.green};
  border-radius: 45px;
`;

const TemperatureText = styled.div`
  text-align: center;
  padding-top: 8px;
  font-size: 8px;
  font-weight: bold;
  color: ${props => props.theme.colors.light1};
`;

export function TemperatureIcon(props) {
  return (
    <TemperatureLogoContainer>
      <TemperatureText>{props.temperature.toFixed(1)}°</TemperatureText>
    </TemperatureLogoContainer>
  );
}

TemperatureIcon.propTypes = {
  /** Temperature value */
  temperature: PropTypes.number,
};
