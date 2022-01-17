import React from 'react';

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  prefixCls?: string;
  children?: React.ReactNode;
}

export default (props: FooterProps = {}) => {
  const { prefixCls = 'w-layout-footer', className, children, ...other } = props;
  return (
    <footer className={[prefixCls, className].filter(Boolean).join(' ').trim()} {...other}>
      {children}
    </footer>
  );
};
