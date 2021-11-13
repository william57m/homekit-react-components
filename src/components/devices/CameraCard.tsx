import React, { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { CardContainer, CardTitle } from '../common/cards';
import { ReactComponent as NoVideoIconSvg } from '../../resources/icons/no-video.svg';

const CameraCardContainer = styled(CardContainer)`
  width: ${props => props.theme.cameraCard.width};
  height: ${props => props.theme.cameraCard.height};
`;

const ImageCamera = styled.img`
  width: 100%;
`;

const OfflineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(${props => props.theme.cameraCard.height} - 30px);
  color: gray;
  font-weight: bold;
  background: black;
`;

const IconContainer = styled.div`
  width: 40px;
`;

const TextContainer = styled.div`
  font-size: 12px;
`;

interface CameraCardProps {
  /** Name of the camera */
  name: string;
  /** Image URL for the camera preview */
  previewImageSrc: string;
}


export const CameraCard: FC<CameraCardProps> = (props) => {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(true);
  
  useEffect(() => {
    try {
      fetch(props.previewImageSrc).then(r => {
        if(r.status !== 200) {
          setSuccess(false);
        }
        setLoading(false);
      });
    } catch (e) {
      setSuccess(false);
      setLoading(false);
    }
  }, [props.previewImageSrc]);
  
  return (
    <CameraCardContainer>
      <CardTitle>{props.name}</CardTitle>
      {loading ? null : (success ? <ImageCamera src={props.previewImageSrc} /> : <Offline/>)}
    </CameraCardContainer>
  );
};

const Offline: FC<{}> = () => {
  return (
    <OfflineContainer>
      <IconContainer>
        <NoVideoIconSvg />
      </IconContainer>
      <TextContainer>
        Camera offline
      </TextContainer>
    </OfflineContainer>
  );
};
