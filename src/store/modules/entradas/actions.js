export function getEntradas(payload) {
  return {
    type: 'entradas/GET',
    payload,
  };
}

export function setEntradas(payload) {
  return {
    type: 'entradas/SET',
    payload,
  };
}
