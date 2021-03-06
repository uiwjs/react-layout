import React, { useEffect, useState, useMemo } from 'react';
import { LayoutContext, LayoutContextProps } from './Layout';

export function randomid(): string {
  return parseInt(String(Math.random() * 1e15), 10).toString(36);
}

export interface LayoutSiderProps extends React.HTMLAttributes<HTMLElement> {
  prefixCls?: string;
  children?: React.ReactNode;
  width?: number | string;
  collapsedWidth?: number;
  collapsed?: boolean;
}

function Sider(props = {} as LayoutSiderProps & LayoutContextProps) {
  const {
    prefixCls = 'w-layout-sider',
    className,
    style,
    children,
    width = 200,
    collapsedWidth = 80,
    collapsed = false,
    siderHook,
    ...other
  } = props;
  const [sliderId] = useState(`w-layout-${randomid()}`);
  const [rawWidth, setRawWidth] = useState(collapsed ? collapsedWidth : width);

  useEffect(() => {
    if (siderHook && !!siderHook.addSider) {
      siderHook.addSider(sliderId);
    }
    return () => {
      if (siderHook && !!siderHook.removeSider) {
        siderHook.removeSider(sliderId);
      }
    };
  }, []);

  useMemo(() => setRawWidth(collapsed ? collapsedWidth : width), [width, collapsedWidth, collapsed]);

  const divStyle = {
    ...style,
    flex: `0 0 ${rawWidth}`,
    maxWidth: rawWidth,
    minWidth: rawWidth,
    width: rawWidth,
  };
  return (
    <div className={[prefixCls, className].filter(Boolean).join(' ').trim()} style={divStyle} {...other}>
      {children}
    </div>
  );
}

export function LayoutSider(props: LayoutSiderProps) {
  return (
    <LayoutContext.Consumer>
      {(context: LayoutContextProps) => <Sider {...props} {...context} />}
    </LayoutContext.Consumer>
  );
}
