import { FC, useEffect, useState } from "react";

interface CheckboxProps {
  label: string;
  isFurnished?: boolean;
  setIsFurnished?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Checkbox: FC<CheckboxProps> = ({
  label,
  isFurnished,
  setIsFurnished,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (!setIsFurnished) return;

    if (isFurnished) {
      setIsChecked(true);
    }
  }, [isFurnished]);

  useEffect(() => {
    if (!setIsFurnished) return;

    if (isChecked !== isFurnished) {
      setIsFurnished(isChecked);
    }
  }, [isChecked]);

  return (
    <div>
      <label htmlFor={`${label}checked`}>
        <input
          type="checkbox"
          name={`${label}checked`}
          id={`${label}checked`}
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
        {label}
      </label>
    </div>
  );
};
