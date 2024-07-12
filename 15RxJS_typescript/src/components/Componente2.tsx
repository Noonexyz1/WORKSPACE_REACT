import { useEffect, useState } from "react"
import { subjectAdapter } from "../services/SubjectAdapterInstance";
import { Subscription } from "rxjs";

function Componente2() {

  const myObservable$ = subjectAdapter.obtenerObservable();
  const [count, setCount] = useState<any>();

  useEffect(() => {
    const subscription: Subscription = myObservable$.subscribe((data: null) => {
      console.log(data);
      setCount(data);
    });

    return () => subscription.unsubscribe();

  }, [myObservable$]);

  return (
    <div>Valor recibido: {count}</div>
  )
}

export default Componente2