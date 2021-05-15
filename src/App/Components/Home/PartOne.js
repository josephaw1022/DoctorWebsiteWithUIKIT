import React from "react";
import PageHeader from "./ParallaxSections/PageHeader";

class PartOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Quote: "",
            QuoteBy: "",
            Change: false,
        };
    }

    componentWillMount() {
        this.setState({
            Quote: this.props.data.Quote,
            QuoteBy: this.props.data.QuoteBy,
            Change: true,
        });
    }

    render() {
        return (
            <>
                <PageHeader
                    Quote={this.state.Quote}
                    QuoteBy={this.state.QuoteBy}
                />
            </>
        );
    }
}

export default PartOne;
