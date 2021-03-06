import * as actionTypes from "../../actions/Types/ActionTypes";
import InitialState from "../InitialState";

export default function GetTrackReducer(state = InitialState, action) {
  switch (action.type) {
    case actionTypes.GET_TRACK:
      return {
        ...state.track_list,
        track_list: action.payload.track_list
      };

    default:
      return state;
  }
}
