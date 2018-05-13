import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import NavLinkBar from '../navLinkBar/navLinkBar'

function Employer() {
    return <h2>Employer</h2>
}

function Candiate() {
    return <h2>Candidate</h2>
}

function Message() {
    return <h2>Message</h2>
}

function User() {
    return <h2>User</h2>
}

class DashboardVisual extends React.Component {
    render() {
        const { pathname } = this.props.location
        const { type } = this.props.user
        const navList = [
            {
                path: '/employer',
                text: 'Candidates',
                icon: 'boss',
                title: 'Candidates',
                component: Employer,
                hide: type === 'candiate'
            },
            {
                path: '/candiate',
                text: 'Employers',
                icon: 'job',
                title: 'Employers',
                component: Candiate,
                hide: type === 'employer'
            },
            {
                path: '/messages',
                text: 'Messages',
                icon: 'msg',
                title: 'Messages',
                component: Message,
            },
            {
                path: '/me',
                text: 'Me',
                icon: 'user',
                title: 'Me',
                component: User,
            },
        ]
        return (
            <div>
                <NavBar mode='dcard'>{navList.find(v => v.path === pathname).title}</NavBar>
                <h2>Content</h2>
                <h2>footer</h2>
                <NavLinkBar data={navList} />
            </div>
        )
    }
}

export default DashboardVisual