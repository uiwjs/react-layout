import React, { useState } from 'react';
import { LayoutHeader } from './Header';
import { LayoutSider } from './Sider';
import { LayoutFooter } from './Footer';
import { LayoutContent } from './Content';

export interface LayoutContextProps {
  addSider: (id: string) => void;
  removeSider: (id: string) => void;
}

export const LayoutContext = React.createContext<LayoutContextProps>({
  addSider: () => null,
  removeSider: () => null,
});

export interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
  prefixCls?: string;
  hasSider?: boolean;
}
export interface LayoutState {
  siders: string[];
}

const Layout = React.forwardRef<HTMLElement, LayoutProps>((props, ref) => {
  const { prefixCls = 'w-layout', className, hasSider, children, ...other } = props;
  const [siders, setSiders] = useState<string[]>([]);
  const addSider = (id: string) => {
    setSiders((state) => [...state, id]);
  };
  const removeSider = (id: string) => {
    setSiders((state) => [...state.filter((currentId) => currentId !== id)]);
  };
  const cls = [
    prefixCls,
    className,
    (typeof hasSider === 'boolean' && hasSider) || siders.length > 0 ? `${prefixCls}-has-sider` : null,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();
  return (
    <LayoutContext.Provider value={{ addSider, removeSider }}>
      <section ref={ref} className={cls} {...other}>
        {children}
      </section>
    </LayoutContext.Provider>
  );
});

type LoginComponent = typeof Layout & {
  Header: typeof LayoutHeader;
  Footer: typeof LayoutFooter;
  Sider: typeof LayoutSider;
  Content: typeof LayoutContent;
};
Layout.displayName = 'Layout';

export default Layout as LoginComponent;
