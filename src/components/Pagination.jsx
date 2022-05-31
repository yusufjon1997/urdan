import React from "react";
import _ from "lodash";
const Pagination = ({
    noOfPosts,
    postsPerPage,
    onPageChange,
    currentPage,
    onPreviousClick,
    onNextClick,
}) => {


    const noOfPages = Math.ceil(noOfPosts.length / postsPerPage);
    const pages = _.range(1, noOfPages + 1);
    if (noOfPages === 1) return null;
    return (
        <div className="pagination-style-1">
            <ul>
                {currentPage !== 1 && (
                    <li>
                        <a
                            className="previos"
                            style={{ cursor: "pointer" }}
                            onClick={onPreviousClick}
                        >
                             <i className=" ti-angle-double-left " />
                        </a>
                    </li>
                )}
                {pages.map((page) => (
                    <li
                        key={page}
                    >
                        <a
                            className={page === currentPage ? "active" : ""}
                            style={{ cursor: "pointer" }}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
                {currentPage !== noOfPages && (
                    <li>
                        <a
                            className="next"
                            style={{ cursor: "pointer" }}
                            onClick={onNextClick}
                        >
                            <i className=" ti-angle-double-right " />
                        </a>
                    </li>
                )}
            </ul>
        </div>
    );
};
export default Pagination;

