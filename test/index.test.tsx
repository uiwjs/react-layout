/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Layout from '../core/src';

test('renders react-layout', () => {
  const { Header, Footer, Sider, Content } = Layout;
  render(
    <Layout style={{ marginBottom: 20 }}>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>learn @uiw/react-layout</Content>
      </Layout>
      <Footer>Footer</Footer>
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


test('renders react-layout', () => {
  const { Header, Footer, Sider, Content } = Layout;
  const Demo = () => {
    const [collapsed, setCollapsed] = React.useState(false)
    return (
      <Layout data-testid="layout" style={{ marginBottom: 20 }}>
        <Sider collapsed={collapsed}>Sider Menu</Sider>
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
  expect(siderElement.style.width).toEqual('200px');
  expect(siderElement.style.minWidth).toEqual('200px');
  expect(siderElement.style.maxWidth).toEqual('200px');

  fireEvent.click(screen.getByText(/ClickSiderButton/i));
  expect(siderElement.style.width).toEqual('80px');
  expect(siderElement.style.minWidth).toEqual('80px');
  expect(siderElement.style.maxWidth).toEqual('80px');
  expect(siderElement).toBeInTheDocument();

  const element = screen.getByTestId('layout');
  expect(element.className).toEqual('w-layout w-layout-has-sider');
});

test('renders react-layout hasSider props', () => {
  render(<Layout hasSider data-testid="layout" />);
  const element = screen.getByTestId('layout');
  expect(element.className).toEqual('w-layout w-layout-has-sider');
});
