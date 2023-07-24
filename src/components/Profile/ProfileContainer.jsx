import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profileReducer";
import { Navigate, useParams } from "react-router-dom";

export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        const { userId } = this.props.match.params; 
        this.props.getUserProfile(userId);
    }

    render() {
        if (!this.props.isAuth) {
            return <Navigate to={'/login'} />
        }
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

const WithRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    getUserProfile
})(WithRouterProfileContainer);