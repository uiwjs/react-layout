import React from 'react';

export interface LayoutHeaderProps extends React.HTMLAttributes<HTMLElement> {
  prefixCls?: string;
  children?: React.ReactNode;
}

export function LayoutHeader(props: LayoutHeaderProps) {
  const { prefixCls = 'w-layout-header', className, children, ...other } = props || {};
  return (
    <header className={[prefixCls, className].filter(Boolean).join(' ').trim()} {...other}>
      {children}
    </header>
  );
}
