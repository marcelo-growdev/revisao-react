const defaultState = [];

export default function saidas(state = defaultState, action) {
  switch (action.type) {
    case 'saidas/GET':
      return state;

    case 'saidas/SET':
      const draft = [...state, action.payload];
      return draft;

    default:
      return state;
  }
}
