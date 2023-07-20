import s from "./paginator.module.scss";
import React, { useState } from "react";

type PropsType = {
    portionSize: number;
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    onPageCount: (page: number) => void;
};

export const Paginator = (props: PropsType) => {
    const { totalUsersCount, pageSize, currentPage, onPageCount, portionSize } = props;

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return (
        <>
            <div className={s.wrapNumberPage}>
                {portionNumber > 1 && (
                    <button
                        className={s.btnPaginator}
                        onClick={() => {
                            setPortionNumber(portionNumber - 1);
                        }}
                    >
                        Prev
                    </button>
                )}
                <div className={s.wrapPageNumber}>
                    {pages
                        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionNumber)
                        .map((page) => {
                            return (
                                <span
                                    onClick={() => {
                                        onPageCount(page);
                                    }}
                                    className={currentPage === page ? s.numberPageBold : s.numberPage}
                                >
                                    {page}
                                </span>
                            );
                        })}
                </div>
                {portionCount > portionNumber && (
                    <button
                        className={s.btnPaginator}
                        onClick={() => {
                            setPortionNumber(portionNumber + 1);
                        }}
                    >
                        Next
                    </button>
                )}
            </div>
        </>
    );
};
