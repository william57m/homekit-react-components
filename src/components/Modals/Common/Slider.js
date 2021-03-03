import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';


const SliderContainer = styled.div`
  height: 280px;
`;

const CustomSlider = styled.input`
  -webkit-appearance: none;
  /* Width */
  height: 90px; 
  /* Height */
  width: 260px;
  margin-top: 80px;
  outline: none;
  border-radius: 20px;
  background: ${props => props.theme.colors.light2};
  overflow: hidden;
  transform: rotate(-90deg);

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 40px;
    border-radius: 20px;
    border: 8px solid ${props => props.color};
    box-shadow: -100vw 0 0 100vw ${props => props.color};
  }
`;

var timeout;

export function Slider(props) {
  const [value, setValue] = useState(props.value);

  function handleChange(event) {
    const value = event.target.value;
    setValue(value);
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      props.onChange(value);
    }, 200);
  }

  return (
    <SliderContainer>
      <CustomSlider
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        color={props.color}
      />
    </SliderContainer>
  );
}

Slider.propTypes = {
  /** Color of the slider */
  color: PropTypes.string.isRequired,
  /** Action triggered on slider change */
  onChange: PropTypes.func.isRequired,
  /** Value of the slider */
  value: PropTypes.number.isRequired,
};
