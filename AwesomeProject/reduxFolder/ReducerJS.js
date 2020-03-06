//import

//actions
const DATA_LOAD = "DATA_LOAD";
const DATA_LOADMORE = "DATA_LOADMORE";
const DATA_REFRESH = "DATA_REFRESH";
const DATA_LOAD_COMPLETE = "DATA_LOAD_COMPLETE"

//action Creator
function dataLoad() {
  return {
    type: DATA_LOAD
  };
}
function dataLoadMore() {
  return {
    type: DATA_LOADMORE
  };
}
function dataRefresh() {
  return {
    type: DATA_REFRESH
  };
}
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
  isLoading: false,
  isRefreshing: false,
  isEndPage: false,
  currentPage: 1,
  searchQuery: "",
  datas: []
}

function reducerForKaKao(state = initialState, action) {
  switch (action.type) {
    case DATA_LOAD:
      return applyDataLoad(state);
    case DATA_LOADMORE:
      return applyDataLoadMore(state);
    case DATA_REFRESH:
      return applyDataRefresh(state);
    case DATA_LOAD_COMPLETE:
      return applyDataLoadComplete(state, action);
    default:
      return state;
  }
}

//reducer Function

function applyDataLoad(state) {
  return {
    ...state,
    isLoading: true
  };
}

function applyDataLoadMore(state) {
  if (state.isEndPage === false && state.currentPage <= MAX_PAGE) {
    return {
      ...state,
      isLoading: true
    };
  } else {
    return {
      ...state,
      isLoading: false,
      isEndPage: true
    }
  }
}

function applyDataRefresh(state) {
  return {
    ...state,
    isRefreshing: true
  };
}

function applyDataLoadComplete(state, action) {
  return {
    ...state,
    isLoading: false,
    isRefreshing: false,
    currentPage: currentPage < 50 ? currentPage + 1 : currentPage,
    isEndPage: action.response.is_end,
    datas: action.response.datas
  }
}

//Export Action Creators
const actionCreatorsForKaKao = {
  dataLoad,
  dataLoadMore,
  dataRefresh,
  dataLoadComplete
};

//Export Reducer
export default reducerForKaKao;