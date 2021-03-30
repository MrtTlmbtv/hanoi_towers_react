import React, { useState } from "react";
import "./Tower.css";
import { useDrop, useDrag } from "react-dnd";

function Tower(props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "DISK",
    item: { from: props.towerNum, diskNum: props.disks },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [disks, setDisks] = useState(props.disks);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "DISK",
    canDrop(item, monitor) {
      if (props.disks.length === 0 || props.disks[0] > item.diskNum[0])
        return true;
    },
    drop: (item, monitor) => {
      props.handleDiskMove(item.from, props.towerNum);
    },
  }));

  return (
    <div ref={drop} className="tower-container" id={props.towerNum}>
      <div className="tower">
        {disks.map((item, index) => (
          <div
            ref={item === disks[0] ? drag : null}
            className="disk"
            id={item}
            style={{
              width: item * 50 + "px",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Tower;
