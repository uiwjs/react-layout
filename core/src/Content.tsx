import React from 'react';

export interface ContentProps extends React.HTMLAttributes<HTMLElement> {
  prefixCls?: string;
  children?: React.ReactNode;
}

export default (props: ContentProps = {}) => {
  const { prefixCls = 'w-layout-content', className, children, ...other } = props;
  return (
    <main className={[prefixCls, className].filter(Boolean).join(' ').trim()} {...other}>
      {children}
    </main>
  );
};
