import ReactPaginate from "react-paginate";
import { FC, useState } from "react";
import { headers } from "../../components/lib/headers";
import { proxyDetails } from "../../components/lib/proxyDetails";
import Navbar from "../../components/navbar/Navbar";

const History = () => {
  function resetFilters() {
    throw new Error("Function not implemented.");
  }

  function setSort(sortBy) {
    throw new Error("Function not implemented.");
  }

  const perPage = 20;
  const pageCount = Math.ceil(proxyDetails.length / perPage);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div>
    <Navbar />
    <div className="container mx-auto p-4">
      <div className="table-responsive px-5 mt-4 bg-gray-200 py-2">
        <table className="items table table-hover table-sm" id="socks">
          <thead className="flex space-x-20">
            {headers.map(({ label, sortBy }) => (
              <th key={sortBy} className="flex-1">
                <a
                  className="sort-link"
                  href="#"
                  // onClick={() => setSort(sortBy)}
                  >
                  {label}
                </a>
              </th>
            ))}
          </thead>
          <tbody>
            <tr>
              <td className="flex justify-between items-center">
                <div className="my-3">
                  <select id={`select-${"hipe"}`} className="form-select">
                    <option value="">Select...</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    {/* Add more options as needed */}
                  </select>
                </div>

                <div className="my-3">
                  <select id={`select-${"hipe"}`} className="form-select">
                    <option value="">Select...</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    {/* Add more options as needed */}
                  </select>
                </div>

                <div className="my-3">
                  <select id={`select-${"hipe"}`} className="form-select">
                    <option value="">Select...</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    {/* Add more options as needed */}
                  </select>
                </div>

                <div className="my-3">
                  <select id={`select-${"hipe"}`} className="form-select">
                    <option value="">Select...</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    {/* Add more options as needed */}
                  </select>
                </div>

                <div className="my-3">
                  <select id={`select-${"hipe"}`} className="form-select">
                    <option value="">Select...</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    {/* Add more options as needed */}
                  </select>
                </div>

                <div className="my-3">
                  <select id={`select-${"hipe"}`} className="form-select">
                    <option value="">Select...</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    {/* Add more options as needed */}
                  </select>
                </div>

                <div className="my-3">
                  <select id={`select-${"hipe"}`} className="form-select">
                    <option value="">Select...</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    {/* Add more options as needed */}
                  </select>
                </div>

                <div className="my-3">
                  <select id={`select-${"hipe"}`} className="form-select">
                    <option value="">Select...</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-2 mb-2">
        <div className="filter">
          {/* ... Filter checkboxes and reset link ... */}
        </div>
      </div>
      <div className="pagination-container mt-4 flex justify-end">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex"}
          previousLinkClassName={
              "pagination-link mr-2 p-2 active bg-blue-500 text-white"
            }
            nextLinkClassName={"pagination-link ml-2 p-2 hover:bg-gray-200"}
          activeClassName={"active bg-blue-500 px-2 text-white"}
        />
      </div>
    </div>
    </div>
  );
};

export default History;
