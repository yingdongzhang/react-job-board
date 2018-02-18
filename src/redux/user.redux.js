import axios from 'axios'
import getRedirectPath from '../utils'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const REGISTER_ERROR = 'REGISTER_ERROR'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_ERROR = 'LOGIN_ERROR'
const LOAD_DATA = 'LOAD_DATA'
const PROFILE_UPDATE_SUCCESS = 'PROFILE_UPDATE_SUCCESS'
const initState = {
    username: '',
    isAuth: false,
    msg: '',
    type: '',
    redirectTo: '',
}

// reducer
export function user(state = initState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
        case PROFILE_UPDATE_SUCCESS:
            return {...state, isAuth: true, msg: '', redirectTo: getRedirectPath(action.payload),...action.payload}
        case REGISTER_ERROR:
        case LOGIN_ERROR:
            return {...state, isAuth: false, msg: action.msg}
        case LOAD_DATA:
            return {...state, ...action.payload}
        default:
            return state
    }
    return state
}

// actions
export function register({username, password, passwordConfirm, type}) {
    if (!username || !password || !type) {
        return errorMsg('username and password cannot be empty.')
    }
    if (password !== passwordConfirm) {
        return errorMsg('password and confirmation are not the same.')
    }
    return dispatch => {
        axios.post('/user/register', {username, password, type}).then(res => {
            if (res.status == 200 && res.data.code === 0) {
                dispatch(onRegisterSuccess({username, type}))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

export function login({username, password}) {
    if (!username || !password) {
        return errorMsg('username and password cannot be empty.')
    }
    return dispatch => {
        axios.post('/user/login', {username, password}).then(res => {
            if (res.status == 200 && res.data.code === 0) {
                dispatch(onLoginSuccess({
                  username, 'type': res.data.data.type, 'avatar': res.data.data.avatar
                }))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

export function update(data) {
    return dispatch => {
        axios.post('/user/update', data).then(res => {
            if (res.status == 200 && res.data.code === 0) {
                dispatch(onProfileUpdateSuccess(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

export function loadUserInfo(userInfo) {
    return { type:LOAD_DATA, payload: userInfo }
}

function onRegisterSuccess(data) {
    return { type:REGISTER_SUCCESS, payload: data }
}

function onLoginSuccess(data) {
    return { type:LOGIN_SUCCESS, payload: data }
}

function onProfileUpdateSuccess(data) {
    return { type:PROFILE_UPDATE_SUCCESS, payload: data }
}

function errorMsg(msg) {
    return { msg, type: REGISTER_ERROR }
}
