const defaultState = [];

export default function entradas(state = defaultState, action) {
  switch (action.type) {
    case 'entradas/GET':
      return state;

    case 'entradas/SET':
      const draft = [...state, action.payload];
      return draft;

    default:
      return state;
  }
}
