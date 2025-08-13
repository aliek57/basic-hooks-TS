import Contador from "../components/Contador/Contador.tsx"

const HookState: React.FC = () => {
  return (
    <div className="HookState">
      <h2>Hook useState</h2>
      <p>O useState é utilizado para gerenciar o estado de um dado</p>
      <Contador/>
    </div>
  )
}

export default HookState