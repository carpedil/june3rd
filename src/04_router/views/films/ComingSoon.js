import axios from 'axios'
import { Component } from 'react'

export default class ComingSoon extends Component {
    state = {
        list:[]
    }

    componentDidMount() {
        axios.get('/ajax/comingList?ci=59&limit=10&movieIds=&token=&optimus_uuid=30FA15E0EF7911ECA8F2BFAB57C7314328702D038A1B4FA7BCEF96ED899AD23C&optimus_risk_level=71&optimus_code=10')
            .then(res => {
                console.log(res.data)
                if(res.data.coming){
                    this.setState({
                        list:res.data.coming
                    })
                }else{
                    console.log("no data")
                }
                
            })
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map(item=>
                            <li key={item.id}>{item.nm}</li>
                            )
                    }
                </ul>
            </div>
        )
    }
}
