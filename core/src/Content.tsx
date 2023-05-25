import React from 'react';

export interface LayoutContentProps extends React.HTMLAttributes<HTMLElement> {
  prefixCls?: string;
  children?: React.ReactNode;
}

export const LayoutContent = React.forwardRef<HTMLElement, LayoutContentProps>((props, ref) => {
  const { prefixCls = 'w-layout-content', className, children, ...other } = props;
  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  return (
    <main ref={ref} className={cls} {...other}>
      {children}
    </main>
  );
});
