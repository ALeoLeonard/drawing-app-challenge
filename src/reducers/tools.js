import { SELECT_TOOL, CHANGE_SIZE, CHANGE_COLOR, STAMP_IMAGE } from "../constants/ActionTypes";
import { BRUSH } from "../constants/Tools";

const initialState = {
  tool: BRUSH,
  brush_size: "10",
  brush_color: "",
  image: ""
}

export default function tools(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SIZE:
      return Object.assign({}, state, {
        brush_size: action.text
      })

    case CHANGE_COLOR:
      return Object.assign({}, state, {
        brush_color: action.text
      })

    case STAMP_IMAGE:
    	return Object.assign({}, state, {
    		image: action.text
    	})

    case SELECT_TOOL:
      return Object.assign({}, state, {
        tool: action.text
      })

    default:
      return state
  }
}
