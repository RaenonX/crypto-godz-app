import React from 'react';

import styles from './main.module.css';


type Props = React.PropsWithChildren<{
  className?: string,
}>;

export const AdsWrapper = ({children, className}: Props) => {
  const divClassName = `${className || 'mb-3'} ${process.env.NODE_ENV === 'production' ? '' : styles.adsTest}`;

  return (
    <div className={divClassName}>
      {children}
    </div>
  );
};
