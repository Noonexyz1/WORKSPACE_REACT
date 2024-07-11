import { subjectAdapter } from "../services/SubjectAdapterInstance"

//emitir informacion
function Componente1() {
  const handleClick = () => {
    subjectAdapter.shareDataToObservable(100);
  }
  return (
    <div>
      <button onClick={handleClick}>Enviar informacion</button>
    </div>
  )
}

export default Componente1