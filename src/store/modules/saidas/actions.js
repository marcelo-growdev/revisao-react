export function getSaidas(payload) {
  return {
    type: 'saidas/GET',
    payload,
  };
}

export function setSaidas(payload) {
  return {
    type: 'saidas/SET',
    payload,
  };
}
