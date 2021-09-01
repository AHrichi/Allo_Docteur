import {
  CURRENT_USER,
  FAIL_USER,
  GETALLClients,
  GETALLDOCTORS,
  LOAD_USER,
  LOGIN_USER,
  LOGOUT_USER,
  LOG_OUT_CHAT,
  REGISTER_USER,
} from "../Const/user";

const initialState = {
  result: null,
  loadUser: false,
  errors: null,
  isAuth: false,
  Doc:[],
  client:[]
 
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loadUser: false,
        result: payload.result,
        isAuth: true,

      };
    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loadUser: false,
        result: payload.result,
        isAuth: true,
      };
    case LOAD_USER:
      return { ...state, loadUser: true };
    case CURRENT_USER:
      return { ...state, loadUser: false, isAuth: true, result: payload };
    case FAIL_USER:
      return { ...state, loadUser: false, errors: payload };
      case LOGOUT_USER:
          localStorage.removeItem("token")
      return { result: null,
        loadUser: false,
        errors: null,
        isAuth: false,  };

        case GETALLDOCTORS:
          return {...state,Doc:payload}
        case LOG_OUT_CHAT:
          localStorage.removeItem('username')
          localStorage.removeItem('password')
        case GETALLClients:
          return {...state,client:payload}


    default:
      return state;
  }
};
