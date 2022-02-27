import React from 'react';
import { LayoutHeader } from './Header';
import { LayoutSider } from './Sider';
import { LayoutFooter } from './Footer';
import { LayoutContent } from './Content';

export interface LayoutContextProps {
  siderHook: {
    addSider: (id: string) => void;
    removeSider: (id: string) => void;
  };
}
export const LayoutContext = React.createContext<LayoutContextProps>({
  siderHook: {
    addSider: () => null,
    removeSider: () => null,
  },
});

export interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
  prefixCls?: string;
  hasSider?: boolean;
}
export interface LayoutState {
  siders: string[];
}

export default class Layout extends React.Component<LayoutProps, LayoutState> {
  static Header: typeof LayoutHeader;
  static Footer: typeof LayoutFooter;
  static Sider: typeof LayoutSider;
  static Content: typeof LayoutContent;
  public static defaultProps: LayoutProps = {
    prefixCls: 'w-layout',
  };
  state = { siders: [] };
  getSiderHook() {
    return {
      addSider: (id: string) => {
        this.setState((state) => ({
          siders: [...state.siders, id],
        }));
      },
      removeSider: (id: string) => {
        this.setState((state) => ({
          siders: state.siders.filter((currentId) => currentId !== id),
        }));
      },
    };
  }
  render() {
    const { prefixCls, className, hasSider, children, ...other } = this.props;
    return (
      <LayoutContext.Provider value={{ siderHook: this.getSiderHook() }}>
        <section
          className={[
            prefixCls,
            className,
            (typeof hasSider === 'boolean' && hasSider) || this.state.siders.length > 0
              ? `${prefixCls}-has-sider`
              : null,
          ]
            .filter(Boolean)
            .join(' ')
            .trim()}
          {...other}
        >
          {children}
        </section>
      </LayoutContext.Provider>
    );
  }
}
