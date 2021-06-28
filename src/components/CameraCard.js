import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { CardContainer } from './Card';
import { CardTitle } from './Common/CardTitle';


const CameraCardContainer = styled(CardContainer)`
  display: block;
  width: ${props => props.theme.cameraCard.width};
  height: ${props => props.theme.cameraCard.height};
  padding: 0px;

  &:active {
    transform: none;
  }
`;

const Image = styled.img`
  width: 100%;
`;

export function CameraCard(props) {
  return (
    <CameraCardContainer>
      <CardTitle>{props.name}</CardTitle>
      <Image src={props.imageSrc} />
    </CameraCardContainer>
  );
}

CameraCard.propTypes = {
  /** Name of the camera */
  name: PropTypes.string.isRequired,
  /** URL of the camera preview */
  imageSrc: PropTypes.string.isRequired,
};
