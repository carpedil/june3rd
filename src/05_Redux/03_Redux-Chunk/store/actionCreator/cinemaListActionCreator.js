import axios from "axios"

function getCinemaList(){
   return (dispatch)=>{
    axios({
        url: 'https://m.maizuo.com/gateway?cityId=510100&ticketFlag=1&k=5261156',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1654244811799267643981825"}',
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res => {
        dispatch({
            type:'change-list',
            payload:res.data.data.cinemas
        })
      })
   }
}

export default getCinemaList