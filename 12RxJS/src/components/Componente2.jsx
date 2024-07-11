import { useEffect, useState } from "react";
import { subjectAdapter } from "../services/SubjectAdapterInstance";

//este componente recibira la informacion
function Componente2() {
  const [count, setCount] = useState(0);
  const myObservable$ = subjectAdapter.getObservable();

  //efecto secundario
  useEffect(() => {
    myObservable$.subscribe(data => {
      console.log(data);
      setCount(data);
    });
  });

  return <div>Componente2 valor recibido: {count}</div>;
}

export default Componente2;
