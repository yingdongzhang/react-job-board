import React from 'react'
import PropTypes from 'prop-types'
import { TabBar } from 'antd-mobile'
import { withRouter } from 'react-router'

class NavLinkBarWithRouter extends React.Component {
    render() {
        const { location, history, data } = this.props
        const navList = data.filter(v => !v.hide)
        return (
            <TabBar>
                {navList.map(v => (
                    <TabBar.Item
                        title={v.text}
                        key={v.path}
                        icon={{ uri: require(`../images/${v.icon}.png`) }}
                        selectedIcon={{ uri: require(`../images/${v.icon}-active.png`) }}
                        selected={location.pathname === v.path}
                        onPress={() => {
                            history.push(v.path)
                        }}
                    />
                ))}
            </TabBar>
        )
    }
}

NavLinkBarWithRouter.propTypes = {
    data: PropTypes.array.isRequired,
}

const NavLinkBar = withRouter(NavLinkBarWithRouter)

export default NavLinkBar