import { FC } from "react";

interface CheckboxProps {
  label: string;
}

export const Checkbox: FC<CheckboxProps> = ({ label }) => {
  return (
    <div>
      <label htmlFor={`${label}checked`}>
        <input
          type="checkbox"
          name={`${label}checked`}
          id={`${label}checked`}
        />
        {label}
      </label>
    </div>
  );
};
