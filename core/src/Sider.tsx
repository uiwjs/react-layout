import React, { useEffect, useState, useMemo } from 'react';
import { LayoutContext, LayoutContextProps } from './Layout';

export function randomid(): string {
  return parseInt(String(Math.random() * 1e15), 10).toString(36);
}

export interface LayoutSiderProps extends React.HTMLAttributes<HTMLElement> {
  prefixCls?: string;
  children?: React.ReactNode;
  /** Width of the sidebar */
  width?: number | string;
  /** Width of the collapsed sidebar, by setting to 0 a special trigger will appear */
  collapsedWidth?: number;
  /** To set the current status */
  collapsed?: boolean;
}

const Sider = React.forwardRef<HTMLDivElement, LayoutSiderProps>((props, ref) => {
  const {
    prefixCls = 'w-layout-sider',
    className,
    style,
    children,
    width = 200,
    collapsedWidth = 80,
    collapsed = false,
    addSider,
    removeSider,
    ...other
  } = props as LayoutSiderProps & LayoutContextProps;
  const [sliderId] = useState(`w-layout-${randomid()}`);
  const [rawWidth, setRawWidth] = useState(collapsed ? collapsedWidth : width);

  useEffect(() => {
    if (addSider) {
      addSider(sliderId);
    }
    return () => {
      if (removeSider) {
        removeSider(sliderId);
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
    <div ref={ref} className={[prefixCls, className].filter(Boolean).join(' ').trim()} style={divStyle} {...other}>
      {children}
    </div>
  );
});

export const LayoutSider = React.forwardRef<HTMLDivElement, LayoutSiderProps>((props, ref) => {
  return (
    <LayoutContext.Consumer>
      {(context: LayoutContextProps) => <Sider ref={ref} {...props} {...context} />}
    </LayoutContext.Consumer>
  );
});
