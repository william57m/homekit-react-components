import React, { FC } from 'react';
import styled from '@emotion/styled';

import { CardContainer, CardTitle } from '../../common/cards';
import { useLoadImage } from '../../common/hooks';
import { LoadingPlaceholder } from './CameraCardPlaceholderLoading';
import { OfflinePlaceholder } from './CameraCardPlaceholderOffline';


const CameraCardContainer = styled(CardContainer)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${props => props.theme.cameraCard.width};
  height: ${props => props.theme.cameraCard.height};
  background: black;
`;

const CameraCardContent = styled.div`
  flex-grow: 1;
`;

const CameraImage = styled.img`
  width: 100%;
`;

interface CameraCardProps {
  /** Name of the camera */
  readonly name: string;
  /** Image URL for the camera preview */
  readonly previewImageSrc: string;
}

export const CameraCard: FC<CameraCardProps> = (props) => {
  const { isLoading, isLoaded } = useLoadImage(props.previewImageSrc);
  
  return (
    <CameraCardContainer>
      <CardTitle>{props.name}</CardTitle>
      <CameraCardContent>
        {isLoading ?
          <LoadingPlaceholder /> :
          (isLoaded ?
            <CameraImage src={props.previewImageSrc} /> :
            <OfflinePlaceholder/>
          )
        }
      </CameraCardContent>
    </CameraCardContainer>
  );
};
