import s from "./paginator.module.scss";
import React from "react";

type PropsType = {
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    onPageCount: (page: number) => void;
};

export const Paginator = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <>
            <div className={s.wrapNumberPage}>
                {pages.map((page) => {
                    return (
                        <span
                            onClick={() => {
                                props.onPageCount(page);
                            }}
                            className={props.currentPage === page ? s.numberPageBold : s.numberPage}
                        >
                            {page}
                        </span>
                    );
                })}
            </div>
        </>
    );
};
