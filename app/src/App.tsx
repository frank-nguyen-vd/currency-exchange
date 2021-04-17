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

class CurrencyExchangeGrid extends React.Component {
    state = {
        data: { USD: 0, AUD: 0, CAD: 0, VND: 0, MYR: 0, PHP: 0 }
    };

    componentDidMount() {
        fetch("http://localhost:3000/rates?base=SGD")
            .then((response) => response.json())
            .then((result) => this.setState({ data: result }));
    }

    render() {
        const data = this.state.data;
        return (
            <div>
                <Row gutter={[16, 24]}>
                    <Col className="gutter-row" span={6}>
                        <CurrencyExchangeCard
                            currency="USD"
                            rate={data.USD}
                            currency_desc="US Dollar"
                        />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <CurrencyExchangeCard
                            currency="AUD"
                            rate={data.AUD}
                            currency_desc="Australian Dollar"
                        />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <CurrencyExchangeCard
                            currency="CAD"
                            rate={data.CAD}
                            currency_desc="Canadian Dollar"
                        />
                    </Col>
                </Row>
                <Row gutter={[16, 24]}>
                    <Col className="gutter-row" span={6}>
                        <CurrencyExchangeCard
                            currency="VND"
                            rate={data.VND}
                            currency_desc="Vietnamese Dong"
                        />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <CurrencyExchangeCard
                            currency="MYR"
                            rate={data.MYR}
                            currency_desc="Malaysian Ringgit"
                        />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <CurrencyExchangeCard
                            currency="PHP"
                            rate={data.PHP}
                            currency_desc="Philippine Peso"
                        />
                    </Col>
                </Row>
            </div>
        );
    }
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
