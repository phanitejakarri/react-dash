import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "Well",
  "fieldname",
  "Date",
  "Production_1D",
  'Production_7D',
  "Production Target"
];

const TABLE_DATA = [
  {
    id: 100,
    name: "T-2",
    order_id: "Alpha 1",
    date: "Jun 29,2022",
    customer: "37.1212",
    customer2: "33.2745",
    target: 35.6557,
  },
  {
    id: 101,
    name: "T-3",
    order_id: "Alpha 1",
    date: "Jun 29,2022",
    customer: "20.6764",
    customer2: "21.8145",
    target: 26.65594,
  },
  {
    id: 102,
    name: "T-4",
    order_id: "Alpha 1",
    date: "Jun 29,2022",
    customer: "117.4808",
    customer2: "116.1855",
    target: 206.6555,
  },
  {
    id: 103,
    name: "T-5",
    order_id: "Alpha 1",
    date: "Jun 29,2022",
    customer: "101.3409",
    customer2: "204.2745",
    target: 198.459,  },
  {
    id: 104,
    name: "T-6",
    order_id: "Alpha 1",
    date: "Jun 29,2022",
    customer: "37.4060",
    customer2: "33.2745",
    target: "40.7931",  },
  {
    id: 105,
    name: "T-7",
    order_id: "Alpha 1",
    date: "Jun 29,2022",
    customer: "63.9786",
    customer2: "40.2745",
    target: 50.3696,  },
];

const AreaTable = () => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Latest Orders</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.order_id}</td>
                  <td>{dataItem.date}</td>
                  <td>{dataItem.customer}</td>
                  <td>{dataItem.customer2}</td>
                  <td>{dataItem.target}</td>
                  {/* <td>
                    <div className="dt-status">
                      <span
                        className={`dt-status-dot dot-${dataItem.status}`}
                      ></span>
                      <span className="dt-status-text">{dataItem.status}</span>
                    </div>
                  </td>
                  <td>${dataItem.amount.toFixed(2)}</td> */}
                  <td className="dt-cell-action">
                    <AreaTableAction />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;
