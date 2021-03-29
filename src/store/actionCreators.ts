import {
  MENU_TOGGLE,
  SHOW_LOADING,
  HIDDEN_LOADING
} from './actionType'

export const menuToggleAction = () => ({
  type: MENU_TOGGLE
})
export const showLoadingAction = () => ({
  type: SHOW_LOADING
})
export const hiddenLoadingAction = () => ({
  type: HIDDEN_LOADING
})
