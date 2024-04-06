import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#000066"]}
        percentFillValue={60}
        cardInfo={{
          title: "Tango-2",
          value: "287828",
          text: "Average cycle time T-2",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#66ffcc"]}
        percentFillValue={50}
        cardInfo={{
          title: "Tango-3",
          value: "209931",
          text: "Average cycle time T-3",
        }}
      />
       <AreaCard
        colors={["#e4e8ef", "#ff6600"]}
        percentFillValue={90}
        cardInfo={{
          title: "Tango-4",
          value: "679268",
          text: "Average cycle time T-4",
        }}
      />
       <AreaCard
        colors={["#e4e8ef", "#9966cc"]}
        percentFillValue={99}
        cardInfo={{
          title: "Tango-5",
          value: "756245",
          text: "Average cycle time T-5",
        }}
      />
       <AreaCard
        colors={["#e4e8ef", "#00ff00"]}
        percentFillValue={70}
        cardInfo={{
          title: "Tango-6",
          value: "304491",
          text: "Average cycle time T-6",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#660000"]}
        percentFillValue={80}
        cardInfo={{
          title: "Tango-7",
          value: "338684",
          text: "Average cycle time T-7",
        }}
      />
    </section>
  );
};

export default AreaCards;
