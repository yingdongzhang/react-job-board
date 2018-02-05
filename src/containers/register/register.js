import React from 'react'
import { connect } from 'react-redux'
import RegisterVisual from '../../components/register/registerVisual'
import { register } from '../../redux/user.redux'

// redux api
function mapStateToProps(state) {
    return state.user
}

function mapDispatchToProps(dispatch) {
    return {
        onRegister: (state) => {
            dispatch(register(state))
        }
    }
}

// container connect with UI component
const Register = connect(mapStateToProps, mapDispatchToProps)(RegisterVisual)

export default Register
