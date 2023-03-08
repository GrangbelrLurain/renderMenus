import React from "react";

interface IInfoSelect extends React.HTMLAttributes<HTMLSelectElement> {
  datas: {
    [option: string]: string;
  }[];
}

const InfoSelect = ({ datas = [{ option: "value" }] }: IInfoSelect) => {
  return datas.map((data, index) => {
    const [option, value] = Object.entries(data)[0];
    return (
      <select key={index} value={value}>
        {option}
      </select>
    );
  });
};

export default InfoSelect;
