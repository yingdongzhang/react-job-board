import React from 'react'
import { Grid, List } from 'antd-mobile'
import PropTypes from 'prop-types'

class AvatarSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            icon: ''
        }
    }
    render() {
        const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
            .split(',')
            .map(i => ({
                icon: require(`../images/${i}.png`),
                text: i
            }))
        const gridHeader = this.state.icon
            ? (<div>
                <span>Your avatar: </span>
                <img style={{width: 20}} src={this.state.icon} alt='' />
            </div>)
            : 'Select your avatar'
        return (
            <div>
                <List renderHeader={() => gridHeader}>
                    <Grid
                        data={avatarList}
                        columnNum={5}
                        onClick={i => {
                            this.setState(i)
                            this.props.selectAvatar(i.text)
                        }}
                    >Select Avatar</Grid>
                </List>
            </div>
        )
    }
}

AvatarSelector.propTypes = {
    selectAvatar: PropTypes.func.isRequired,
}

export default AvatarSelector
