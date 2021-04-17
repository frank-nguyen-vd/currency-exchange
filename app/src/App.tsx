import React from "react";
import "./App.css";
import { Layout, Menu, Row, Col, Card } from "antd";
import "antd/dist/antd.css";
import SubMenu from "antd/lib/menu/SubMenu";
import getSymbolFromCurrency from "currency-symbol-map";

function CurrencyExchangeCard(props: any) {
    const symbol = getSymbolFromCurrency(props.currency);
    const rate = props.rate > 0.01 ? Number(props.rate).toFixed(2) : props.rate;
    const extra = `${rate} ${symbol}`;
    return (
        <Card
            title={props.currency}
            extra={extra}
            bordered={true}
            style={{ width: 200, margin: 5 }}
        >
            <i>{props.currency_desc}</i>
        </Card>
    );
}

class CurrencyExchangeGrid extends React.Component<{
    enable: boolean;
    symbol: string;
}> {
    state = {
        data: { USD: 0, AUD: 0, CAD: 0, VND: 0, MYR: 0, SGD: 0 },
        symbol: "SGD"
    };

    getRate() {
        return fetch(`http://localhost:3000/rates?base=${this.props.symbol}`)
            .then((response) => response.json())
            .then((result) => {
                return this.setState({ data: result });
            });
    }

    componentDidMount() {
        this.getRate();
    }

    componentDidUpdate() {
        if (this.props.symbol !== this.state.symbol) {
            if (this.state.symbol === "") this.setState({ symbol: "SGD" });
            else this.setState({ symbol: this.props.symbol });
            this.getRate();
        }
    }

    render() {
        const { data } = this.state;
        const spanWidth = 4;

        if (this.props.enable) {
            return (
                <div>
                    <Row>
                        <Col className="gutter-row" span={spanWidth}>
                            <CurrencyExchangeCard
                                currency="USD"
                                rate={data.USD}
                                currency_desc="US Dollar"
                            />
                        </Col>
                        <Col className="gutter-row" span={spanWidth}>
                            <CurrencyExchangeCard
                                currency="AUD"
                                rate={data.AUD}
                                currency_desc="Australian Dollar"
                            />
                        </Col>
                        <Col className="gutter-row" span={spanWidth}>
                            <CurrencyExchangeCard
                                currency="CAD"
                                rate={data.CAD}
                                currency_desc="Canadian Dollar"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="gutter-row" span={spanWidth}>
                            <CurrencyExchangeCard
                                currency="VND"
                                rate={data.VND}
                                currency_desc="Vietnamese Dong"
                            />
                        </Col>
                        <Col className="gutter-row" span={spanWidth}>
                            <CurrencyExchangeCard
                                currency="MYR"
                                rate={data.MYR}
                                currency_desc="Malaysian Ringgit"
                            />
                        </Col>
                        <Col className="gutter-row" span={spanWidth}>
                            <CurrencyExchangeCard
                                currency="SGD"
                                rate={data.SGD}
                                currency_desc="Singapore Dollar"
                            />
                        </Col>
                    </Row>
                </div>
            );
        }

        return <div></div>;
    }
}

class App extends React.Component {
    state = {
        current: "currency",
        symbol: "SGD"
    };

    handleClick = (e: any) => {
        if (e.key === "assessment" || e.key === "currency")
            this.setState({ current: e.key });
        else this.setState({ symbol: e.key });
    };

    render() {
        const { Header, Content } = Layout;
        const { current, symbol } = this.state;

        return (
            <div className="App">
                <Layout>
                    <Header>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={["currency"]}
                            selectedKeys={[current]}
                            onClick={this.handleClick}
                        >
                            <Menu.Item key="assessment">Assessment</Menu.Item>
                            <Menu.Item key="currency">Currency</Menu.Item>
                            <SubMenu key="base" title={`Base: ${symbol}`}>
                                <Menu.Item key="SGD">SGD</Menu.Item>
                                <Menu.Item key="USD">USD</Menu.Item>
                                <Menu.Item key="AUD">AUD</Menu.Item>
                                <Menu.Item key="CAD">CAD</Menu.Item>
                                <Menu.Item key="VND">VND</Menu.Item>
                                <Menu.Item key="MYR">MYR</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Header>
                    <Content>
                        <CurrencyExchangeGrid
                            enable={current === "currency"}
                            symbol={symbol}
                        />
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;
