import React from 'react'
import { NavBar,
    InputItem,
    List,
    TextareaItem,
    WhiteSpace,
    WingBlank,
    Button
} from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import AvatarSelector from '../../components/avatarSelector/avatarSelector'

class CandidateProfileVisual extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            position: '',
            statement: '',
            avatar: '',
        }
        this.onChange = this.onChange.bind(this)
        this.selectAvatar = this.selectAvatar.bind(this)
    }
    onChange(key, val) {
        this.setState({
            [key]: val
        })
    }
    selectAvatar(avatar) {
        this.setState({
            avatar: avatar
        })
    }
    render() {
        const path = this.props.location.pathname
        const redirectTo = this.props.redirectTo
        return(
            <div>
                {redirectTo && redirectTo !== path ? <Redirect to={redirectTo} /> : null}
                <NavBar mode="dark">Employer Profile</NavBar>
                <AvatarSelector
                    selectAvatar={this.selectAvatar}
                    ></AvatarSelector>
                <WhiteSpace />
                <List>
                    <InputItem onChange={(v) => this.onChange('position', v)}>Position</InputItem>
                    <WhiteSpace />
                    <TextareaItem
                        onChange={(v) => this.onChange('statement', v)}
                        rows={3}
                        autoHeight
                        title='Statement'
                    >
                    </TextareaItem>
                    <WingBlank>
                        <Button
                            type='primary'
                            onClick={() => {
                                this.props.onUpdate(this.state)
                            }}
                        >Save</Button>
                    </WingBlank>
                </List>
            </div>
        )
    }
}

export default CandidateProfileVisual
