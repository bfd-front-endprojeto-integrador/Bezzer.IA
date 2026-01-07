import "./Button.css"

const Button = (props: any) => {
    return (
        <>
        <button type="submit" className="button">
            {props.children} {/* Isso faz o texto "Entrar" aparecer */}
        </button>
        </>
    )
}

export default Button