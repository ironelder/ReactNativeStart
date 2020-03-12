//import

//actions
const DATA_LOAD_COMPLETE = "DATA_LOAD_COMPLETE"

//action Creator
function dataLoadComplete(response) {
  return {
    type: DATA_LOAD_COMPLETE,
    response: {
      is_end: response.meta.is_end,
      datas: response.documents
    }
  }
}

//reducer
const MAX_PAGE = 50;
const initialState = {
  isEndPage: false,
  currentPage: 1,
  datas: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case DATA_LOAD_COMPLETE:
      return applyDataLoadComplete(state, action);
    default:
      return state;
  }
}

//reducer Function
function applyDataLoadComplete(state, action) {
  return {
    ...state,
    isEndPage: action.response.meta.is_end,
    datas: action.response.documents
  }
}

//Export Action Creators
export const actionCreatorsForKaKao = {
  dataLoadComplete
};

//Export Reducer
export default reducer;