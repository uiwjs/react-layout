/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Layout, { LayoutHeader, LayoutContent, LayoutSider, LayoutFooter } from '../core/src';

test('renders LayoutHeader/LayoutContent/LayoutSider/LayoutFooter', () => {
  render(
    <Layout style={{ marginBottom: 20 }}>
      <LayoutHeader>LayoutHeader</LayoutHeader>
      <Layout>
        <LayoutSider>LayoutSider</LayoutSider>
        <LayoutContent>learn @uiw/react-layout</LayoutContent>
      </Layout>
      <LayoutFooter>LayoutFooter</LayoutFooter>
    </Layout>
  );
  const linkElement = screen.getByText(/learn @uiw\/react-layout/i);
  expect(linkElement.className).toEqual('w-layout-content')
  expect(linkElement).toBeInTheDocument();

  const footerElement = screen.getByText(/LayoutFooter/i);
  expect(footerElement.className).toEqual('w-layout-footer')
  expect(footerElement).toBeInTheDocument();

  const headerElement = screen.getByText(/LayoutHeader/i);
  expect(headerElement.className).toEqual('w-layout-header')
  expect(headerElement).toBeInTheDocument();

  const siderElement = screen.getByText(/LayoutSider/i);
  expect(siderElement.className).toEqual('w-layout-sider')
  expect(siderElement).toBeInTheDocument();
});

test('renders react-layout', () => {
  render(
    <Layout style={{ marginBottom: 20 }}>
      <Layout.Header>Header</Layout.Header>
      <Layout>
        <Layout.Sider>Sider</Layout.Sider>
        <Layout.Content>learn @uiw/react-layout</Layout.Content>
      </Layout>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  );
  const linkElement = screen.getByText(/learn @uiw\/react-layout/i);
  expect(linkElement.className).toEqual('w-layout-content')
  expect(linkElement).toBeInTheDocument();

  const footerElement = screen.getByText(/Footer/i);
  expect(footerElement.className).toEqual('w-layout-footer')
  expect(footerElement).toBeInTheDocument();

  const headerElement = screen.getByText(/Header/i);
  expect(headerElement.className).toEqual('w-layout-header')
  expect(headerElement).toBeInTheDocument();

  const siderElement = screen.getByText(/Sider/i);
  expect(siderElement.className).toEqual('w-layout-sider')
  expect(siderElement).toBeInTheDocument();
});

test('collapsed props', () => {
  const { Header, Footer, Sider, Content } = Layout;
  const Demo = () => {
    const [collapsed, setCollapsed] = React.useState(false)
    return (
      <Layout data-testid="layout" style={{ marginBottom: 20 }}>
        <Sider width={300} collapsed={collapsed}>Sider Menu</Sider>
        <Layout>
          <Header>
            <button onClick={() => setCollapsed(!collapsed)}>ClickSiderButton{collapsed ? '展开 Sider' : '缩进 Sider'}</button>
          </Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
  render(<Demo />);
  const siderElement = screen.getByText(/Sider Menu/i);
  expect(siderElement.className).toEqual('w-layout-sider');
  expect(siderElement.style.width).toEqual('300px');
  expect(siderElement.style.minWidth).toEqual('300px');
  expect(siderElement.style.maxWidth).toEqual('300px');

  fireEvent.click(screen.getByText(/ClickSiderButton/i));
  expect(siderElement.style.width).toEqual('80px');
  expect(siderElement.style.minWidth).toEqual('80px');
  expect(siderElement.style.maxWidth).toEqual('80px');
  expect(siderElement).toBeInTheDocument();

  const element = screen.getByTestId('layout');
  expect(element.className).toEqual('w-layout w-layout-has-sider');
  fireEvent.click(screen.getByText(/ClickSiderButton/i));
  expect(siderElement.style.width).toEqual('300px');
});

test('renders react-layout hasSider props', () => {
  render(<Layout hasSider data-testid="layout" />);
  const element = screen.getByTestId('layout');
  expect(element.className).toEqual('w-layout w-layout-has-sider');
});
