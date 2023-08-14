import { Button, Col, Input, Layout, List, Menu, Radio, Row, theme } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import moment from 'moment'

const { Header, Content, Footer, Sider } = Layout

const Chat = () => {
    const [chatLayout, setChatLayout] = useState('open')
    const [closedLeads, setClosedLeads] = useState([])
    const [openLeads, setOpenLeads] = useState([])
    const [chats, setChats] = useState([])
    const [message, setMessage] = useState('')
    const [leadId, setLeadId] = useState()
    const [allData, setAllData] = useState([])

    useEffect(() => {
        getLeads()
        setInterval(() => {
            getLeads()
        }, 1000)
    }, [])

    useEffect(() => {
        const selectedData = allData.find((e) => e.lead_id == leadId)
        if (selectedData?.chat_history.length > 0) {
            setChats(selectedData?.chat_history)
        }
    }, [chats, closedLeads, openLeads, allData])
    const BASE_URL = 'https://secure.penntelco.com'
    const userId = localStorage.getItem('userid')
    const getLeads = async () => {
        await axios
            .post(`${BASE_URL}/chat/getleads`, {
                user_id: userId,
            })
            .then((response) => {
                setAllData([
                    ...response.data.open_leads,
                    ...response.data.closed_leads,
                ])
                setOpenLeads(response.data.open_leads)
                setClosedLeads(response.data.closed_leads)
            })
            .catch((err) => console.log(err))
    }

    const sendMessage = async () => {
        await axios
            .post(`${BASE_URL}/chat/sendmsgadmin`, {
                sender_id: userId,
                lead_id: leadId,
                message: message,
            })
            .then(() => {
                setMessage('')
            })
            .catch((err) => console.log(err))
    }
    const {
        token: { colorBgContainer },
    } = theme.useToken()
    console.log(openLeads)
    return (
        <Layout
            style={{
                backgroundColor: '#fff',
                border: '0.6px solid black',
                padding: '5px',
                borderRadius: '10px',
            }}
        >
            <Radio.Group onChange={(e) => setChatLayout(e.target.value)}>
                <Radio.Button value="open">Open</Radio.Button>
                <Radio.Button value="closed">Closed</Radio.Button>
            </Radio.Group>
            {chatLayout === 'open' ? (
                <Content>
                    <Layout
                        style={{
                            padding: '24px 0',
                            background: colorBgContainer,
                        }}
                    >
                        <Sider
                            style={{ background: colorBgContainer }}
                            width={200}
                        >
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                                // items={items1}
                            >
                                {openLeads?.map((item, index) => (
                                    <Menu.Item
                                        key={index}
                                        onClick={() => {
                                            setLeadId(item?.lead_id)
                                            setChats(item?.chat_history)
                                        }}
                                    >
                                        <div className="d-flex align-items-center gap-3">
                                            <img
                                                src="https://i.pravatar.cc/50"
                                                style={{
                                                    width: '30px',
                                                    height: '30px',
                                                    borderRadius: '90px',
                                                }}
                                            />
                                            <span className="fs-6">
                                                {item.name}
                                            </span>
                                        </div>
                                    </Menu.Item>
                                ))}
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <div>
                                <List
                                    style={{ height: 400, overflow: 'auto' }}
                                    dataSource={chats}
                                    renderItem={(message) => {
                                        const isCurrentUser =
                                            message.responder_id == userId
                                        return (
                                            <List.Item
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: isCurrentUser
                                                        ? 'row-reverse'
                                                        : 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                }}
                                            >
                                                <img
                                                    src="https://i.pravatar.cc/50"
                                                    style={{
                                                        width: '30px',
                                                        height: '30px',
                                                        borderRadius: '90px',
                                                    }}
                                                />
                                                <div
                                                    style={{
                                                        marginLeft: 8,
                                                        marginRight: 8,
                                                        textAlign: isCurrentUser
                                                            ? 'right'
                                                            : 'left',
                                                    }}
                                                >
                                                    <div>{message.sender}</div>
                                                    <div>{message.message}</div>
                                                    <div
                                                        style={{
                                                            fontSize: 12,
                                                            color: 'gray',
                                                        }}
                                                    >
                                                        {moment(
                                                            message.timestamp
                                                        ).format('h:mm A')}
                                                    </div>
                                                </div>
                                            </List.Item>
                                        )
                                    }}
                                />
                                {chats[0] && (
                                    <Row className="gap-3">
                                        <Col span={19}>
                                            <Input
                                                value={message}
                                                onChange={(e) =>
                                                    setMessage(e.target.value)
                                                }
                                                placeholder="Type a message..."
                                            />
                                        </Col>
                                        <Col span={4}>
                                            <Button onClick={sendMessage}>
                                                Send
                                            </Button>
                                        </Col>
                                    </Row>
                                )}
                            </div>
                        </Content>
                    </Layout>
                </Content>
            ) : (
                <Content>
                    <Layout
                        style={{
                            padding: '24px 0',
                            background: colorBgContainer,
                        }}
                    >
                        <Sider
                            style={{ background: colorBgContainer }}
                            width={200}
                        >
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                                // items={items1}
                            >
                                {closedLeads?.map((item, index) => (
                                    <Menu.Item
                                        key={index}
                                        onClick={() => {
                                            setLeadId(item?.lead_id)
                                            setChats(item?.chat_history)
                                        }}
                                    >
                                        <div className="d-flex align-items-center gap-3">
                                            <img
                                                src="https://i.pravatar.cc/50"
                                                style={{
                                                    width: '30px',
                                                    height: '30px',
                                                    borderRadius: '90px',
                                                }}
                                            />
                                            <span className="fs-6">
                                                {item.name}
                                            </span>
                                        </div>
                                    </Menu.Item>
                                ))}
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <div>
                                <List
                                    style={{ height: 400, overflow: 'auto' }}
                                    dataSource={chats}
                                    renderItem={(message) => {
                                        const isCurrentUser =
                                            message.responder_id == userId
                                        return (
                                            <List.Item
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: isCurrentUser
                                                        ? 'row-reverse'
                                                        : 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                }}
                                            >
                                                <img
                                                    src="https://i.pravatar.cc/50"
                                                    style={{
                                                        width: '30px',
                                                        height: '30px',
                                                        borderRadius: '90px',
                                                    }}
                                                />
                                                <div
                                                    style={{
                                                        marginLeft: 8,
                                                        marginRight: 8,
                                                        textAlign: isCurrentUser
                                                            ? 'right'
                                                            : 'left',
                                                    }}
                                                >
                                                    <div>{message.sender}</div>
                                                    <div>{message.message}</div>
                                                    <div
                                                        style={{
                                                            fontSize: 12,
                                                            color: 'gray',
                                                        }}
                                                    >
                                                        {moment(
                                                            message.timestamp
                                                        ).format('h:mm A')}
                                                    </div>
                                                </div>
                                            </List.Item>
                                        )
                                    }}
                                />
                                {chats[0] && (
                                    <Row className="gap-3">
                                        <Col span={19}>
                                            <Input
                                                value={message}
                                                onChange={(e) =>
                                                    setMessage(e.target.value)
                                                }
                                                placeholder="Type a message..."
                                            />
                                        </Col>
                                        <Col span={4}>
                                            <Button onClick={sendMessage}>
                                                Send
                                            </Button>
                                        </Col>
                                    </Row>
                                )}
                            </div>
                        </Content>
                    </Layout>
                </Content>
            )}
        </Layout>
    )
}

export default Chat
