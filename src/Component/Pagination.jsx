import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="col-lg-12 m-b20">
      <div className="pagination-bx rounded-sm gray clearfix">
        <ul className="pagination">
          {pageNumbers.length > 1 &&
            pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <a onClick={() => paginate(number)} className="page-link">
                  {number}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
