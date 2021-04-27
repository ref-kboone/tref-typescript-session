import React, { useState } from "react";
import { GetDragonResponse } from "../api/dragons";

type Props = {
  dragonData: GetDragonResponse;
  labelButton: string;
};

const Dragon: React.FC<Props> = ({
  dragonData,
  labelButton = "Show all data",
}) => {
  const [renderAllData, setRenderAllData] = useState<Boolean>(false);

  const handleRenderAllButton = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Button height " + e.currentTarget.clientHeight);
    const returnFromFunction = doSomething();
    console.log(returnFromFunction);
  };

  const doSomething = (): "done" | "verydone" => {
    setRenderAllData(true);
    return "done";
  };

  return (
    <div>
      <p>
        <i>Name</i>
        <br />
        {dragonData.name}
      </p>
      <p>
        <i>Material heat shield</i>
        <br />
        {dragonData.heat_shield.material}
      </p>
      {renderAllData && (
        <>
          <p>
            <i>Crew capacity</i>
            <br />
            {dragonData.crew_capacity}
          </p>
          <p>
            <i>Orbit duration in years</i>
            <br />
            {dragonData.orbit_duration_yr}
          </p>
        </>
      )}
      {!renderAllData && (
        <button onClick={handleRenderAllButton}>{labelButton}</button>
      )}
    </div>
  );
};

export default Dragon;
