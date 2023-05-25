import React from 'react';

export interface LayoutHeaderProps extends React.HTMLAttributes<HTMLElement> {
  prefixCls?: string;
  children?: React.ReactNode;
}

export const LayoutHeader = React.forwardRef<HTMLElement, LayoutHeaderProps>((props, ref) => {
  const { prefixCls = 'w-layout-header', className, children, ...other } = props || {};
  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  return (
    <header ref={ref} className={cls} {...other}>
      {children}
    </header>
  );
});
