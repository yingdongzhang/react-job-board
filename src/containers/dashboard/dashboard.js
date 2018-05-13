import React from 'react'
import { connect } from 'react-redux'
import DashboardVisual from '../../components/dashboard/dashboardVisual'
import { update } from '../../redux/user.redux'

// redux api
function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        onUpdate: (state) => {
            dispatch(update(state))
        }
    }
}

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardVisual)

export default Dashboard
