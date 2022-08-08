import React from "react";
import ".././../App.css";

const Node = ({ item, hasChildren, level, onToggle }) => {
	return (
		<div style={{ paddingLeft: `${level * 16}px`}}>
			{item.label}

			{hasChildren && <button onClick={onToggle}>toggle</button>}
		</div>
	);
};
  
export default Node;