import React from "react";
import "./App.css";
import { Layout, Menu, Row, Col, Card } from "antd";
import "antd/dist/antd.css";

function CurrencyExchangeCard(props: any) {
    return (
        <Card
            title={props.currency}
            extra={props.rate}
            bordered={true}
            style={{ width: 300, margin: 10 }}
        >
            <i>{props.currency_desc}</i>
        </Card>
    );
}

function CurrencyExchangeGrid() {
    return (
        <div>
            <Row gutter={[16, 24]}>
                <Col className="gutter-row" span={6}>
                    <CurrencyExchangeCard
                        currency="USD"
                        rate={0.72}
                        currency_desc="US Dollar"
                    />
                </Col>
                <Col className="gutter-row" span={6}>
                    <CurrencyExchangeCard
                        currency="AUD"
                        rate={1.02}
                        currency_desc="Australian Dollar"
                    />
                </Col>
                <Col className="gutter-row" span={6}>
                    <CurrencyExchangeCard
                        currency="CAD"
                        rate={1.32}
                        currency_desc="Canadian Dollar"
                    />
                </Col>
            </Row>
        </div>
    );
}

function App() {
    const { Header, Content } = Layout;

    return (
        <div className="App">
            <Layout>
                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["2"]}
                    >
                        <Menu.Item key="1">Assessment</Menu.Item>
                        <Menu.Item key="2">Currency</Menu.Item>
                        <Menu.Item key="3">Base: SGD</Menu.Item>
                    </Menu>
                </Header>
                <Content>
                    <CurrencyExchangeGrid />
                </Content>
            </Layout>
        </div>
    );
}

export default App;
