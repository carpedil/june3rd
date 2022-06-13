import React, { Component } from 'react'

export default class App extends Component {
    state = {
        list :['00','01','02','03','04','05','06','07','08','09'],
        current:0
    }
    render() {
        return (
            <div>App
                <input type="number" value={this.state.current} onChange={(evt)=>{
                    let num = Number(evt.target.value)
                    if(num >= this.state.list.length){
                        num = 0
                    }
                    this.setState({
                        current:num
                    })
                }}/>
                <div style={{
                    overflow:'hidden'
                }}> 
                {
                    this.state.list.map((item,index)=>{
                       return <Box key={item} current={this.state.current} index={index}></Box>
                    })
                }
                </div>
            </div>
        )
    }
}


class Box extends Component{
    shouldComponentUpdate(nextProps) { 
        if(this.props.current === this.props.index || nextProps.current === nextProps.index){
            return true
        }
        return false
     }

    render(){
        console.log('render....')
        return (
            <div style={{
                width:'100px',
                height:'100px',
                border: this.props.current === this.props.index ?  '1px solid red':'1px solid gray',
                margin:'10px',
                float:'left'
            }}></div>
        )
    }

}