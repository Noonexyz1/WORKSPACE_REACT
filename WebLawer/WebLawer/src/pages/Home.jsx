import { useState } from 'react';

function Home() {
    const [data, setData] = useState(1)

    const handlerClick = () => {
        setData(10);
    };

    return (
    <>
        <div>Hola, soy un componente React!</div>
        <span>{data}</span>
        <button onClick={handlerClick} >Transformamos A</button>
    </>
  );
}

export default Home;
