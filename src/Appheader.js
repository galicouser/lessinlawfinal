import React, { useState } from 'react'
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import Routes from './Routes'
const { Header, Content, Footer, Sider } = Layout
function getItem(label, key, icon, link, children) {
    return {
        key,
        icon,
        children,
        label,
        link,
    }
}
const items = [
    getItem('Dashboard', '1', <PieChartOutlined />, '/'),
    getItem('Chat', '2', <DesktopOutlined />, '/chat'),
    //   getItem("User", "sub1", <UserOutlined />, [
    //     getItem("Tom", "3"),
    //     getItem("Bill", "4"),
    //     getItem("Alex", "5"),
    //   ]),
    //   getItem("Team", "sub2", <TeamOutlined />, [
    //     getItem("Team 1", "6"),
    //     getItem("Team 2", "8"),
    //   ]),
    getItem('Log Out', '3', <UserOutlined />, '/logout'),
]
const App = () => {
    const [collapsed, setCollapsed] = useState(false)
    const {
        token: { colorBgContainer },
    } = theme.useToken()
    return (
        <Layout style={{ minHeight: '100vh' }}>
            {localStorage.getItem('userid') && (
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={(value) => setCollapsed(value)}
                >
                    <div
                        style={{
                            height: 32,
                            margin: 16,
                            background: 'rgba(255, 255, 255, 0.2)',
                        }}
                    />
                    <Menu
                        theme="dark"
                        mode="inline"
                        selectedKeys={[
                            items
                                .find(
                                    (item) =>
                                        window.location.pathname == item.link
                                )
                                ?.key.toString(),
                        ]}
                    >
                        {items.map((item) => (
                            <Menu.Item key={item.key} icon={item.icon}>
                                {item.link !== '/logout' ? (
                                    <a href={item.link}>{item.label}</a>
                                ) : (
                                    <span
                                        onClick={async () => {
                                            await localStorage.removeItem(
                                                'userid'
                                            )
                                            window.location.reload()
                                        }}
                                    >
                                        Log Out
                                    </span>
                                )}
                            </Menu.Item>
                        ))}
                    </Menu>
                </Sider>
            )}
            <Layout className="site-layout">
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '0 16px' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        <Routes />
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default App
