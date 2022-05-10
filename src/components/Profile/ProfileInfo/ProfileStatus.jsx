import React from 'react';

export class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    EditeMode = () => {
        this.setState({editMode: !this.state.editMode});
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value});
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.state !== this.props.state)
            this.setState({status: this.props.status});
    }

    render(){
        return (
            <div>
                {!this.state.editMode ?
                <div>
                    <span onDoubleClick={this.EditeMode}>{this.props.status || "No STATUS"}</span>
                </div>
                :
                <div>
                    <input
                        onChange={this.onStatusChange}
                        autoFocus={true}
                        onBlur={this.EditeMode.bind(this)}
                        value={this.state.status}
                />
                </div>
                }
            </div>
        );
    }
};