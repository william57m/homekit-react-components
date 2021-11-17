import React, { ChangeEvent, FC, useState } from 'react';
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

let timeout: NodeJS.Timeout;

interface SliderProps {
  /** Color of the slider */
  readonly color: string;
  /** Action triggered on slider change */
  readonly onChange: (value: number) => void;
  /** Value of the slider */
  readonly value: number;
}

export const Slider: FC<SliderProps> = (props) => {
  const [value, setValue] = useState(props.value);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value);
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
};
