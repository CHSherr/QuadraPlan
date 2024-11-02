import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface CardProps {
  title: string;
  tasks: string[];
}

const Card: React.FC<CardProps> = ({ title, tasks }) => {
  return (
    <div className="shadow rounded-2xl h-[42%] w-[275%]">
      <h2 className="px-5 pt-3 t">{title}</h2>

      <ol className="list-group px-5 py-2">
        {tasks.map((task, index) => (
          <li key={index} className="d-flex flex-row gap-2">
            <input
              type="checkbox"
              className="form-check-input"
              id={`task-${index}`}
            />
            <label className="form-check-label" htmlFor={`task-${index}`}>
              {task}
            </label>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Card;
