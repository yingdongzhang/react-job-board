import axios from 'axios'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const REGISTER_ERROR = 'REGISTER_ERROR'
const initState = {
    user: '',
    password: '',
    isAuth: false,
    msg: '',
    type: '',
}

// reducer
export function user(state = initState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {...state, isAuth: true, msg: '', ...action.payload}
        case REGISTER_ERROR:
            return {...state, isAuth: false, msg: action.msg}
        default:
            return state
    }
    return state
}

// actions
export function register({user, password, passwordConfirm, type}) {
    if (!user || !password || !type) {
        return errorMsg('User and password cannot be empty.')
    }
    if (password !== passwordConfirm) {
        return errorMsg('Password and confirmation are not the same.')
    }
    return dispatch => {
        axios.post('/user/register', {user, password, type}).then(res => {
            if (res.status == 200 && res.data.code === 0) {
                dispatch(onRegisterSuccess({user, password, type}))
            } else {
                console.log('errorMsg -> ', res);
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

function onRegisterSuccess(data) {
    return { type:REGISTER_SUCCESS, payload: data }
}

function errorMsg(msg) {
    return { msg, type: REGISTER_ERROR }
}
