import React/* ,{Component}  */ from 'react'

/* export default class Tabbar extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.list.map((item,index) =>
                        <li key={index}
                            className={this.props.current === index ? 'active' : ''}
                            onClick={() => this.props.myevent(index)}>{item.text}
                        </li>)}
                </ul>
            </div>
        )
    }
} */

/* 函数式组件 (没有this!!!!) */
const TabBar = (props) => {
    return (
        <div>
            <ul>
                {props.list.map((item, index) =>
                    <li key={index}
                        className={props.current === index ? 'active' : ''}
                        onClick={() => props.myevent(index)}>{item.text}
                    </li>)}
            </ul>
        </div>
    )
}

export default TabBar