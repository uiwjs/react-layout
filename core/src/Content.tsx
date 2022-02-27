import React from 'react';

export interface LayoutContentProps extends React.HTMLAttributes<HTMLElement> {
  prefixCls?: string;
  children?: React.ReactNode;
}

export function LayoutContent(props: LayoutContentProps) {
  const { prefixCls = 'w-layout-content', className, children, ...other } = props;
  return (
    <main className={[prefixCls, className].filter(Boolean).join(' ').trim()} {...other}>
      {children}
    </main>
  );
}
