import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

import { Title } from './Title';


const SectionLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface SectionLayoutProps {
  children: ReactNode;
  title: string;
}

const Components = styled.div`
  display: flex;
  flex-direction: row;
  & > div {
    margin: 5px 5px 5px 0px;
  }
`;

/**
 * Base Card to be customized
 */
export const SectionLayout: FC<SectionLayoutProps> = ({ children, title }) => {
  return (
    <SectionLayoutContainer>
      <Title>{title}</Title>
      <Components>
        {children}
      </Components>
    </SectionLayoutContainer>
  );
};
