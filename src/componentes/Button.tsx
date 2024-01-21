
interface PropsButton {
    name: string
}

const Button = ({name}:PropsButton) => {
  return (
    <button >
    {name}
  </button>
  )
}

export default Button