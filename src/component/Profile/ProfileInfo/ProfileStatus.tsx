import React, { ChangeEvent } from "react";
import s from "component/Profile/ProfileInfo/profileInfo.module.scss";
import Preloader from "../../common/preloader/Preloader";

type PropsType = {
    status: string;
    updateStatus: (status: string) => void;
};

type StateType = {
    editMode: boolean;
    status: string;
};

export class ProfileStatus extends React.Component<PropsType, any> {
    state: StateType = {
        editMode: false,
        status: this.props.status,
    };

    activateEditeMode = () => {
        this.setState({
            editMode: true,
        });
    };
    deActivateEditeMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    };
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value,
        });
    };

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<StateType>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }
    }

    render() {
        return (
            <div className={s.profile_status}>
                {!this.state.editMode ? (
                    <div>
                        <p>Status: </p>
                        <span className={s.status_text}>{this.props.status || "No status"}</span>
                        <button onClick={this.activateEditeMode}>Изменить статус</button>
                    </div>
                ) : (
                    <div>
                        <p>Edite status: </p>
                        <input
                            onBlur={this.deActivateEditeMode}
                            onChange={this.onStatusChange}
                            value={this.state.status}
                            autoFocus
                        />
                        <button>Сохранить статус</button>
                    </div>
                )}
            </div>
        );
    }
}
