import React from "react";

export default function TaskList(props) {
  const { items, onClickDelete } = props;

  if (items.length === 0) {
    return <p>タスクはありません</p>;
  }

  return (
    <ul>
      {items.map((item, i) => {
        return (
          <li key={i}>
            {item}
            <button onClick={() => {
                onClickDelete(i);
              }}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
