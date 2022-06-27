import { useEffect ,useState} from "react"
import axios from "axios"

export default function ComingSoon() {
    const [list, setList] = useState([])


    useEffect(() => {
        axios.get('/ajax/comingList?ci=59&limit=10&movieIds=&token=&optimus_uuid=30FA15E0EF7911ECA8F2BFAB57C7314328702D038A1B4FA7BCEF96ED899AD23C&optimus_risk_level=71&optimus_code=10')
            .then(res => {
                console.log(res.data)
                if (res.data.coming) {
                    setList(res.data.coming)
                } else {
                    console.log("no data")
                }

            })
    }, [])

    return (
        <div>
            <ul>
                {
                    list.map(item =>
                        <li key={item.id}>{item.nm}</li>
                    )
                }
            </ul>
        </div>
    )
}
