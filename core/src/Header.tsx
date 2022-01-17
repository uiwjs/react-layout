import React from 'react';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  prefixCls?: string;
  children?: React.ReactNode;
}

export default (props: HeaderProps = {}) => {
  const { prefixCls = 'w-layout-header', className, children, ...other } = props;
  return (
    <header className={[prefixCls, className].filter(Boolean).join(' ').trim()} {...other}>
      {children}
    </header>
  );
};
