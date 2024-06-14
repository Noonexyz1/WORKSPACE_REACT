import { useEffect, useState } from "react";
import { publisherService } from "../services/SharingInfoService";

//este componente recivira la informacion
function Componente2() {
  const [count, setCount] = useState(0);
  const myObservable$ = publisherService.getObservable();

  useEffect(() => {
    myObservable$.subscribe(data => {
      console.log(data);
      setCount(data);
    });
  });

  return <div>Componente2 valor recibido: {count}</div>;
}

export default Componente2;
