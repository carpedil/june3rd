
export default function Detail(props) {
    // props.match.params中可以获取动态路由路径参数
    return (
        <div>Detail-{props.match.params.id}</div>
    )
}
