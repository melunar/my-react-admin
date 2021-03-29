import {
  MENU_TOGGLE,
  HIDDEN_LOADING,
  SHOW_LOADING
} from './actionType'

const defaultStore = {
  menuToggle: false,
  globalLoading: false,
}

export default (state = defaultStore, action) => {
  switch (action.type) {
    case MENU_TOGGLE:
      return { ...state, menuToggle: !state.menuToggle }
    case SHOW_LOADING:
      return { ...state, globalLoading: true }
    case HIDDEN_LOADING:
      return { ...state, globalLoading: !true }
    default:
      return state
  }
}
