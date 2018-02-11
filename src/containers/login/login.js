import React from 'react'
import { connect } from 'react-redux'
import LoginVisual from '../../components/login/loginVisual'
import { login } from '../../redux/user.redux'

// redux api
function mapStateToProps(state) {
    return state.user
}

function mapDispatchToProps(dispatch) {
    return {
        onLogin: (state) => {
            dispatch(login(state))
        }
    }
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginVisual)

export default Login
