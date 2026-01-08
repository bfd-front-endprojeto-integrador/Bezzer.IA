import "./Button.css"

const Button = (props: any) => {
    return (
        <>
        <button type="submit" className="button" onClick={props.onClick}>
            {props.children} {/* Isso faz o texto "Entrar" aparecer */}
        </button>
        </>
    )
}

export default Button