import { useState } from "react";

export function AddColor() {
  const [color, setColor] = useState("orange");
  const styles = { background: color, fontSize: "24px" };
  // const colorBox = ["teal", "crimson", "orange"];
  const [colorlist, setColorlist] = useState(["teal", "crimson", "orange"]);
  return (
    <div>
      <input value={color}
        onChange={(event) => (setColor(event.target.value))}
        style={styles} placeholder="Enter a color" />
      <button onClick={() => setColorlist([...colorlist, color])}>Add Color</button>
      {colorlist.map((clr) => <ColorList clr={clr} />)}

    </div>

  );
}
function ColorList({ clr }) {
  const styles = {
    height: "25px",
    width: "250px",
    background: clr,
    marginTop: "10px"
  };
  return (
    <div style={styles}></div>
  );

}
