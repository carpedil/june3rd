import { useEffect } from "react"
import { connect } from "react-redux"
import { hiddeTabBar, showTabBar } from "../../store/actionCreator/TabBarActionCreator"
function Detail(props) {
    // 解构需要用到的属性
    let { showTabBar, hiddeTabBar, match } = props
    useEffect(() => {
        hiddeTabBar()
        return () => {
            showTabBar()
        }
    }, [showTabBar, hiddeTabBar])

    return <div>Detail-{match.params.id} <button onClick={() => {
        props.history.goBack()
    }}>back</button></div>
}

// connect()函数，第一个参数传给子组件的属性,
// 第二个参数用来传给子组件的回调函数
const mapDispatchToProps = {
    showTabBar, hiddeTabBar
}
export default connect(null, mapDispatchToProps)(Detail)