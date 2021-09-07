import React, { useState } from 'react';
import { minhasInformacoes } from "./api/usuario"

function SobreMim() {
  const [info, setInfo] = useState("")

  const fetchInfo = async () => {
    const info = await minhasInformacoes()
    setInfo(info.data)
  }

  return (
    <div>
      <button onClick={() => fetchInfo()}>Fetch</button>
      {info && (
        <div>
          <p>{info.name}</p>
          <p>{info.email}</p>
          <p>{info.age}</p>
        </div>
      )}
    </div>
  );
}

export default SobreMim;
