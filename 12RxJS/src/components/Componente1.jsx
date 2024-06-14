import { publisherService } from "../services/SharingInfoService"

//emitir informacion
function Componente1() {
  const handleClick = () => {
    publisherService.shareDataToObservable(100);
  }
  return (
    <div>
      <button onClick={handleClick}>Enviar informacion</button>
    </div>
  )
}

export default Componente1