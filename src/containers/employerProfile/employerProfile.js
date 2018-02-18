import React from 'react'
import { connect } from 'react-redux'
import EmployerProfileVisual from '../../components/employerProfile/employerProfileVisual'
import { update } from '../../redux/user.redux'

// redux api
function mapStateToProps(state) {
    return state.user
}

function mapDispatchToProps(dispatch) {
    return {
        onUpdate: (state) => {
            dispatch(update(state))
        }
    }
}

const EmployerProfile = connect(mapStateToProps, mapDispatchToProps)(EmployerProfileVisual)

export default EmployerProfile
