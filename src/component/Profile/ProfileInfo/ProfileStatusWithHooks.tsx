import React, { ChangeEvent, useEffect, useState } from "react";
import s from "component/Profile/ProfileInfo/profileInfo.module.scss";
import Preloader from "../../common/preloader/Preloader";

type PropsType = {
    status: string;
    updateStatus: (status: string) => void;
};

export const ProfileStatusWithHook = (props: PropsType) => {
    const [editeMode, setEditeMode] = useState<boolean>(false);
    const [status, setStatus] = useState<string>(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditeMode = () => {
        setEditeMode(true);
    };
    const deActivateEditeMode = () => {
        setEditeMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        let newStatus = e.currentTarget.value;
        setStatus(newStatus);
    };

    return (
        <div className={s.profile_status}>
            {!editeMode ? (
                <div>
                    <p>Status: </p>
                    <span className={s.status_text}>{props.status || "No status"}</span>
                    <button onClick={activateEditeMode}>Изменить статус</button>
                </div>
            ) : (
                <div>
                    <p>Edite status: </p>
                    <input onBlur={deActivateEditeMode} onChange={onStatusChange} value={status} autoFocus />
                    <button>Сохранить статус</button>
                </div>
            )}
        </div>
    );
};
