import React from "react";

type ContactPropsType = {
    contactTitle: string;
    contactValue: string | null;
};

const Contact = (props: ContactPropsType) => {
    const { contactTitle, contactValue } = props;
    return (
        <li>
            <b>
                {contactTitle}: {contactValue ? contactValue : "not yet"}
            </b>
        </li>
    );
};

export default Contact;
