import React from 'react';

export interface LayoutFooterProps extends React.HTMLAttributes<HTMLElement> {
  prefixCls?: string;
  children?: React.ReactNode;
}

export const LayoutFooter = React.forwardRef<HTMLElement, LayoutFooterProps>((props, ref) => {
  const { prefixCls = 'w-layout-footer', className, children, ...other } = props;
  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  return (
    <footer ref={ref} className={cls} {...other}>
      {children}
    </footer>
  );
});
