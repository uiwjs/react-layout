import React from 'react';

export interface LayoutFooterProps extends React.HTMLAttributes<HTMLElement> {
  prefixCls?: string;
  children?: React.ReactNode;
}

export function LayoutFooter(props: LayoutFooterProps) {
  const { prefixCls = 'w-layout-footer', className, children, ...other } = props;
  return (
    <footer className={[prefixCls, className].filter(Boolean).join(' ').trim()} {...other}>
      {children}
    </footer>
  );
}
