import { FC, useEffect, useState } from "react";

interface RangeInputProps {
  label: string;
  isOneBedroom?: boolean;
  setIsOneBedroom?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RangeInput: FC<RangeInputProps> = ({
  label,
  isOneBedroom,
  setIsOneBedroom,
}) => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  useEffect(() => {
    if (!setIsOneBedroom) return;

    if (isOneBedroom && !(min === "1" && max === "1")) {
      setIsOneBedroom(false);
    } else if (!isOneBedroom && min === "1" && max === "1") {
      setIsOneBedroom(true);
    }
  }, [min, max]);

  useEffect(() => {
    if (!setIsOneBedroom) return;

    if (isOneBedroom) {
      setMin("1");
      setMax("1");
    }
  }, [isOneBedroom]);

  return (
    <div>
      <label>
        <div>{label}</div>
        <div>
          <input
            type="text"
            name={`${label}min`}
            id={`${label}min`}
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
          <input
            type="text"
            name={`${label}max`}
            id={`${label}max`}
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
        </div>
      </label>
    </div>
  );
};
