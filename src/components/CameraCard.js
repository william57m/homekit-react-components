import React, {useEffect, useState} from 'react';
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

const OfflineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(${props => props.theme.cameraCard.height} - 30px);
  color: white;
  font-weight: bold;
`;

const Image = styled.img`
  width: 100%;
`;

export function CameraCard(props) {
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(true);

    useEffect(() => {
        try {
            fetch(props.imageSrc).then(r => {
                if(r.status !== 200) {
                    setSuccess(false);
                }
                setLoading(false);
            });
        } catch (e) {
            setSuccess(false);
            setLoading(false);
        }
    },[]);

  return (
    <CameraCardContainer>
      <CardTitle>{props.name}</CardTitle>
        {loading ? null : (success ? <Image src={props.imageSrc} /> : <Offline/>)}
    </CameraCardContainer>
  );
}

function Offline() {
    return (
        <OfflineContainer>
            Camera Offline
        </OfflineContainer>
    );
}

CameraCard.propTypes = {
  /** Name of the camera */
  name: PropTypes.string.isRequired,
  /** URL of the camera preview */
  imageSrc: PropTypes.string.isRequired,
};
