import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

const TitleContainer = styled.div`
  font-size: ${props => props.theme.layout.title.size};
  font-weight: ${props => props.theme.layout.title.weight};
  color: ${props => props.theme.layout.title.color};
  margin-bottom: 10px;
  position: relative;
`;

interface TitleProps {
  children: ReactNode;
}

export const Title: FC<TitleProps> = ({ children }) => {
  return (
    <TitleContainer>
      {children}
    </TitleContainer>
  );
};
