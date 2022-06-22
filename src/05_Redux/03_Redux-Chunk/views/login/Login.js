

export default function Login(props) {
    return (
        <div>
            <input type="text" />
            <button onClick={() => {
                localStorage.setItem('token', 'auth123')
                props.history.push(`/center`)
            }}>Login</button>
        </div>
    )
}