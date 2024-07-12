import { subjectAdapter } from "../services/SubjectAdapterInstance";

function Componente1() {

  const handleClick = (): void => {
    subjectAdapter.publicarDatos("Hola Mundo");
  };

  return (
    <div>
      <button onClick={handleClick}>Enviar Información</button>
    </div>
  );
}

export default Componente1