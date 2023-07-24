import React from "react";
import { Post } from "../Post/Post";
import s from "./mypost.module.css";
import btn from "../../common/styles/btn.module.css";
import { UsersPropsType } from "./MyPostContainer";
import { useFormik } from "formik";

const MyPost = React.memo((props: UsersPropsType) => {
    const postElement = [...props.posts.posts].reverse().map((el) => {
        // делаем имутабельно (не меняем наш state, делаем копию)
        const onChangeMessage = (newMessage: string) => {
            props.onChangeMessageCB(newMessage, el.id);
        };
        return <Post key={el.id} message={el.post} likeCount={el.likeCount} onChangeMessage={onChangeMessage} />;
    });

    return (
        <div className={s.myPost}>
            <div>
                <MyPostForm addPost={props.addPostCB} />
                {/*{error && <span className={s.errorText}>{error}</span>}*/}
            </div>

            {postElement}
        </div>
    );
});

export default MyPost;

export type MyPostType = {
    newPostFormik?: string;
    addPost: (el: string) => void;
};

export type FormikErrorType = {
    newPostFormik?: string;
};

const MyPostForm = (props: MyPostType) => {
    const formik = useFormik({
        initialValues: {
            newPostFormik: "",
        },
        onSubmit: (values) => {
            props.addPost(values.newPostFormik);
            formik.resetForm();
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (values.newPostFormik.length === 0) {
                errors.newPostFormik = "Введите пост";
            } else if (values.newPostFormik.length < 3) {
                errors.newPostFormik = "Ну еще чуть-чуть добавь букв)))";
            }
            return errors;
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className={s.wrapAddMessage}>
            <textarea {...formik.getFieldProps("newPostFormik")} />
            {formik.errors.newPostFormik && <div className={s.error}>{formik.errors.newPostFormik}</div>}
            <div>
                <button type={"submit"} className={btn.btn}>
                    Add post
                </button>
            </div>
        </form>
    );
};
