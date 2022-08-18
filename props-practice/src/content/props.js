import React from "react";
import Content from "./content";

const arry = [{ name: "AAAA" }, { name: "BBBB" }, { name: "CCCC" }];
const Props = () => {
  return (
    <div style={{display:'flex',flexwarp:'warp'}}>
      {arry.map((n) => (
        <Content props={n.name} />
      ))}
    </div>
  );
};

export default Props;
