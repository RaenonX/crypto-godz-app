import React from 'react';

import {GodzAsset} from './godz';
import {SentzAsset} from './sentz';
import {AssetProps} from './type';


export const Assets = ({account, setAccount}: AssetProps) => {
  return (
    <>
      <GodzAsset account={account} setAccount={setAccount}/>
      <SentzAsset account={account} setAccount={setAccount}/>
    </>
  );
};
