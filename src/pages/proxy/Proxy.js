import ReactPaginate from "react-paginate";
import { useState } from "react";
import { proxyHeaders } from "../../components/lib/tableHeaders";
import { proxyDetails } from "../../components/lib/proxyDetails";
import Navbar from "../../components/navbar/Navbar";


const Proxy = () => {
  const [activeProxy, setActiveProxy] = useState(null);
  const [activeCountry, setActiveCountry] = useState("USA");
  const [activeState, setActiveState] = useState("");

  const countryStates = {
    USA: [
      { name: "AK", count: 8 },
      { name: "AL", count: 210 },
      { name: "AR", count: 39 },
      { name: "AZ", count: 945 },
      { name: "CA", count: 2588 },
      { name: "CO", count: 191 },
      { name: "CT", count: 223 },
      { name: "DC", count: 51 },
      { name: "DE", count: 29 },
      { name: "FL", count: 1049 },
      { name: "GA", count: 747 },
      { name: "HI", count: 113 },
      { name: "IA", count: 519 },
      { name: "ID", count: 183 },
      { name: "IL", count: 422 },
      { name: "IN", count: 278 },
      { name: "KS", count: 170 },
      { name: "KY", count: 92 },
      { name: "LA", count: 130 },
      { name: "MA", count: 199 },
      { name: "MD", count: 223 },
      { name: "ME", count: 385 },
      { name: "MI", count: 748 },
      { name: "MN", count: 392 },
      { name: "MO", count: 190 },
      { name: "MS", count: 70 },
      { name: "MT", count: 27 },
      { name: "NC", count: 446 },
      { name: "ND", count: 38 },
      { name: "NE", count: 64 },
      { name: "NH", count: 351 },
      { name: "NJ", count: 431 },
      { name: "NM", count: 27 },
      { name: "NV", count: 190 },
      { name: "NY", count: 879 },
      { name: "OH", count: 454 },
      { name: "OK", count: 283 },
      { name: "OR", count: 125 },
      { name: "PA", count: 621 },
      { name: "RI", count: 89 },
      { name: "SC", count: 2275 },
      { name: "SD", count: 42 },
      { name: "TN", count: 2047 },
      { name: "TX", count: 1293 },
      { name: "UN", count: 12 },
      { name: "UT", count: 430 },
      { name: "VA", count: 809 },
      { name: "VT", count: 252 },
      { name: "WA", count: 248 },
    ],
    America: [
      { name: "AG", count: 1 },
      { name: "AR", count: 62 },
      { name: "AW", count: 3 },
    ],
    Europe: [{ name: "WA", count: 248 }],
    "AU, Oceania": [{ name: "WA", count: 248 }],
    Asia: [{ name: "WA", count: 248 }],
    Africa: [{ name: "WA", count: 248 }],
  };

  const refresh = (country, state) => {
    // will make refresh logic here later
  };

  const setInactiveRegions = () => {
    // will do logic to set inactive regions here
  };

  const zipArea = (type) => {
    // zipArea logic will be here
  };

  const setActiveCountryState = (country, state) => {
    setActiveCountry(country);
    setActiveState(state);
    refresh(country, state);
  };

  function resetFilters() {
    throw new Error("Function not implemented.");
  }

  function setSort(sortBy) {
    throw new Error("Function not implemented.");
  }

  const renderProxyDetail = (proxy, key) => {
    const proxyKey = key;

    if (proxyKey === "ip") {
      return (
        <div>
          <div className="pull-left flag flag-us mt-[3px]">&nbsp;</div>
          <div id={`ip_${proxy.id}`}>{proxy[proxyKey]}</div>
        </div>
      );
    }

    return <div id={`${key}_${proxy.id}`}>{proxy[proxyKey]}</div>;
  };

  const perPage = 20;
  const pageCount = Math.ceil(proxyDetails.length / perPage);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const paginatedData = proxyDetails.slice(
    currentPage * perPage,
    (currentPage + 1) * perPage
  );

  return (
    <div>
    <Navbar />
    <div className="container mx-auto p-4">
      <div className="container mx-auto p-4">
        <div className="flex">
          <div className="w-1/4 pr-4">
            <div className="sticky top-0">
              <div className="mb-4">
                <style>{`
                .country-active,
                .state-active {
                    background: #0d6efd;
                    color: #ffffff;
                }

                .country-wrapper {
                    width: 150px; // Adjust the width as needed
                }

                .country-button {
                    width: 100%;
                    overflow: hidden;
                }
                `}</style>
                <div
                  className="nav flex-column nav-pills countries"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  {Object.keys(countryStates).map((country) => (
                    <div key={country} className="country-wrapper">
                      <button
                        onClick={() => {
                          refresh(country, "empty");
                          setInactiveRegions();
                          zipArea("on");
                          setActiveCountryState(country, "");
                        }}
                        className={`w-full text-left p-2 mb-2 rounded focus:outline-none country-button ${
                          activeCountry === country
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200"
                        }`}
                        tabIndex={0}
                      >
                        {country} <span>{countryStates[country].length}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow">
            <div className="tab-content" id="v-pills-tabContent">
              {Object.keys(countryStates).map((country) => (
                <div
                  key={country}
                  className={`tab-pane fade ${
                    activeCountry === country ? "active show" : ""
                  }`}
                  role="tabpanel"
                  aria-labelledby={`v-pills-${country.toLowerCase()}-tab`}
                  >
                  {activeCountry === country && (
                    <div className="flex flex-wrap">
                      {countryStates[country].map((region) => (
                        <div
                          key={region.name}
                          onClick={() =>
                            setActiveCountryState(country, region.name)
                          }
                          className={`state p-2 mb-2 mr-2 rounded cursor-pointer ${
                              activeState === region.name
                              ? "state-active"
                              : "bg-gray-200"
                          }`}
                          tabIndex={0}
                          role="button"
                          style={{ flex: "0 0 calc(9.09090909090909% - 10px)" }}
                        >
                          <div>
                            {region.name} - {region.count}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-2">
            <div className="filter mt-2 mb-2">
              <div className="col-filter">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    id="excludeUsedFilter"
                    type="checkbox"
                    value=""
                  />
                  <label
                    className="form-check-label"
                    htmlFor="excludeUsedFilter"
                  >
                    Exclude used proxies
                  </label>
                </div>
              </div>
              <div className="col-filter">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    id="excludeBlacklistedFilter"
                    type="checkbox"
                    value=""
                    />
                  <label
                    className="form-check-label"
                    htmlFor="excludeBlacklistedFilter"
                    >
                    Exclude blacklisted proxies
                  </label>
                </div>
              </div>
              <div className="col-filter">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    id="residentialFilter"
                    type="checkbox"
                    value=""
                  />
                  <label
                    className="form-check-label"
                    htmlFor="residentialFilter"
                  >
                    Residential only proxies
                  </label>
                </div>
              </div>

              <div className="col-filter">
                <div className="form-check">
                  <a
                    href="#"
                    className="text-blue-600"
                    onClick={() => resetFilters()}
                    >
                    reset filters
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="table-responsive mt-4">
        <table className="items table table-hover table-sm" id="socks">
          {typeof window !== "undefined" && (
              <thead className="hidden bg-gray-200 lg:table-header-group">
              {proxyHeaders.map(({ label, sortBy }) => (
                <th key={sortBy}>
                  <a
                    className="sort-link px-2 py-5"
                    href="#"
                    onClick={() => setSort(sortBy)}
                    >
                    {label}
                  </a>
                  {["IP", "DOMAIN", "STATE", "CITY", "ISP", "ZIP"].includes(
                    label
                    ) && (
                        <input
                        type="text"
                        className="form-control"
                        placeholder={`Enter ${label}`}
                        />
                        )}
                </th>
              ))}
            </thead>
          )}
          <tbody id="main-list">
            {proxyDetails.map((proxy) => (
              <tr
                key={proxy.id}
                className={`proxy-row ${
                  activeProxy === proxy.id ? "active" : ""
                }`}
                onClick={() => setActiveProxy(proxy.id)}
              >
                {Object.keys(proxy).map((key) => (
                  <td key={key}>{renderProxyDetail(proxy, key)}</td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
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

export default Proxy;
