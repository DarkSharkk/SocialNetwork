import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserDataActionCreator } from "../../redux/authReducer";
import { profileAPI } from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        profileAPI
            .authMe()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data;
                    this.props.setAuthUserDataActionCreator(id, email, login); 
                }
            })
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login 
});

export default connect(mapStateToProps, {
    setAuthUserDataActionCreator
})(HeaderContainer);