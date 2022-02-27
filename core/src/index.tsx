import Layout from './Layout';
import { LayoutHeader } from './Header';
import { LayoutFooter } from './Footer';
import { LayoutSider } from './Sider';
import { LayoutContent } from './Content';
import './style/index.less';

Layout.Header = LayoutHeader;
Layout.Footer = LayoutFooter;
Layout.Sider = LayoutSider;
Layout.Content = LayoutContent;

export * from './Layout';
export * from './Header';
export * from './Footer';
export * from './Sider';
export * from './Content';
export default Layout;
