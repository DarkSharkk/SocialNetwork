import React from "react";

class ProfileStatus extends React.Component {
    state = {
        isEditMode: false
    }

    activateEditMode() {
        this.setState({
            isEditMode: true
        });
    }

    deactivateEditMode() {
        this.setState({
            isEditMode: false
        });
    }

    render() {
        return (
            <>
                {this.state.isEditMode
                    ? <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.statusText}/>
                    </div>
                    : <div onDoubleClick={this.activateEditMode.bind(this)}>{this.props.statusText}</div>
                }
            </>
        )
    }
}

export default ProfileStatus;