import React, { FC } from 'react';

import { ReactComponent as NoVideoIconSvg } from '../../../resources/icons/no-video.svg';
import { EmptyContainer, IconContainer, TextContainer } from './CameraCardPlaceholderLoading';


export const OfflinePlaceholder: FC<{}> = () => {
  return (
    <EmptyContainer>
      <IconContainer>
        <NoVideoIconSvg />
      </IconContainer>
      <TextContainer>
        Camera offline
      </TextContainer>
    </EmptyContainer>
  );
};
