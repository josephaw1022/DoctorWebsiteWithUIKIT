import React from 'react'
import './Home.css'

class SideNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            values: [],
            change: false,
            current: '',
        }
    }

    componentWillMount() {
        let file = require('./navjs.json')
        this.setState({ values: file.Nav, change: true })
    }

    render() {
        if (this.state.change) {
            //  Map the side nav values out
            var list = this.state.values.map((index) => {
                const temp = String(index.Name)

                return (
                    <li key={temp}>
                        <a href={'#' + index.Name}>
                            <span className="cd-dot pointercolor" />
                            <span className="cd-label">{index.Name}</span>
                        </a>
                    </li>
                )
            })
        }

        return (
            <nav id="cd-vertical-nav" style={{ marginRight: '35px' }}>
                <ul>{list}</ul>
            </nav>
        )
    }
}
export default SideNav
