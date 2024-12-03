import { useState } from "react";
import { Checkbox } from "./Checkbox";
import { RangeInput } from "./RangeInput";

export const FilterSection = () => {
  const [isOneBedroom, setIsOneBedroom] = useState(false);
  const [isFurnished, setIsFurnished] = useState(false);

  return (
    <div style={{ padding: "1rem" }}>
      <RangeInput
        label="BEDROOMS"
        isOneBedroom={isOneBedroom}
        setIsOneBedroom={setIsOneBedroom}
      />
      <RangeInput label="BATHROOMS" />
      <RangeInput label="SQ FT" />

      <Checkbox label="cats ok" />
      <Checkbox label="dogs ok" />
      <Checkbox
        label="furnished"
        isFurnished={isFurnished}
        setIsFurnished={setIsFurnished}
      />
      <Checkbox label="no smoking" />
      <Checkbox label="wheelchair accessible" />
      <Checkbox label="air conditioning" />
      <Checkbox label="EV charging" />
      <Checkbox label="no broker fee" />
      <Checkbox label="no application fee" />

      <div style={{ padding: "1rem 0" }}>related searches</div>
      <div
        onClick={() => setIsOneBedroom(true)}
        style={{
          fontWeight: isOneBedroom ? "bolder" : "normal",
          cursor: isOneBedroom ? "default" : "pointer",
        }}
      >
        one bedroom apartments for rent
      </div>
      <div
        onClick={() => setIsFurnished(true)}
        style={{
          fontWeight: isFurnished ? "bolder" : "normal",
          cursor: isFurnished ? "default" : "pointer",
        }}
      >
        furnished apartments for rent
      </div>
    </div>
  );
};
