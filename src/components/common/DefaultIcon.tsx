import React, { FC } from 'react';
import DefaultIconSvg from '../../resources/icons/user.svg';

export const DefaultIcon: FC<{}> = () => {
  return (
    <img src={DefaultIconSvg} alt="Light Icon" width="30px" />
  );
};
