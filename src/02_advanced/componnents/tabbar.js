import React, { Component } from 'react'

export default class tabbar extends Component {
    state = {
        list: [{
            id: 0,
            text: 'movie'
        },
        {
            id: 1,
            text: 'cinema'
        },
        {
            id: 2,
            text: 'center'
        }],
        current:this.props.defaultValue
    }
    render() {
        
        return (
            <div>
                <ul>
                    {this.state.list.map(item =>
                        <li key={item.id}
                            className={this.state.current === item.id ? 'active' : ''}
                            onClick={() => this.handelClick(item.id)}>{item.text}
                        </li>)}
                </ul>
            </div>
        )
    }

    handelClick = (index) => {
        this.setState({
            current:index
        })
        this.props.current(index)
    }
}
