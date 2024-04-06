const data = [
  {
    id: 1,
    name: "Tango-2",
    percentValues: 26.6557,
  },
  {
    id: 2,
    name: "Tango-3",
    percentValues: 20.007,
  },
  {
    id: 3,
    name: "Tango-4",
    percentValues: 99.55,
  },
  {
    id: 4,
    name: "Tango-5",
    percentValues: 101.14,
  },
  {
    id: 5,
    name: "Tango-6",
    percentValues: 37.05,
  },
  {
    id: 5,
    name: "Tango-7",
    percentValues: 63.97,
  },
  {
    id: 5,
    name: "Tango-8",
    percentValues: 53.97,
  },
  {
    id: 5,
    name: "Tango-9",
    percentValues: 65.55,
  },
];

const AreaProgressChart = () => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-info">
        <h4 className="progress-bar-title">Production targets in average</h4>
      </div>
      <div className="progress-bar-list">
        {data?.map((progressbar) => {
          return (
            <div className="progress-bar-item" key={progressbar.id}>
              <div className="bar-item-info">
                <p className="bar-item-info-name">{progressbar.name}</p>
                <p className="bar-item-info-value">
                  {progressbar.percentValues}
                </p>
              </div>
              <div className="bar-item-full">
                <div
                  className="bar-item-filled"
                  style={{
                    width: `${progressbar.percentValues}%`,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AreaProgressChart;
