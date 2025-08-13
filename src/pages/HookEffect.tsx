import APIRequest from "../components/APIRequest.tsx"

const HookEffect: React.FC = () => {
  return (
    <div className="HookEffect">
        <h2>Hook useEffect</h2>
        <p>O useEffect sincroniza um componente com um sistema externo</p>
        <APIRequest/>
    </div>
  )
}

export default HookEffect