import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import { profileAPI } from "../../api/api";

export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        const { userId } = this.props.match.params; 

        profileAPI
            .getProfile(userId)
            .then((data) => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

const WithRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfile
})(WithRouterProfileContainer);