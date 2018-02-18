import React from 'react'
import { connect } from 'react-redux'
import CandidateProfileVisual from '../../components/candidateProfile/candidateProfileVisual'
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

const CandidateProfile = connect(mapStateToProps, mapDispatchToProps)(CandidateProfileVisual)

export default CandidateProfile
