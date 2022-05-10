import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
            if (!userId)
                this.props.history.push('/login')
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)

    }


    render() {
        return (
            <Profile
                {...this.props}
                status={this.props.status}
                profile={this.props.profile}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}



const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer);;