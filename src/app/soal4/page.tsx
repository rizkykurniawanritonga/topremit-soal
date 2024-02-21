"use client";
import { useState } from "react";

export default function Home() {
  const [output1, setoutput1] = useState<any>("waiting...");
  function handleTextArea(ev: any) {
    const vl = ev.target.value;
    var splittedInput = vl.split("\n");
    console.log(splittedInput);

    var isX = parseInt(splittedInput[0]) >= 0 ? true : false;
    var isY = parseInt(splittedInput[1]) >= 0 ? true : false;
    var res: any = 0;
    if (isX == true && isX == true) {
      res = 1;
    } else if ((isX = true && isY == false)) {
      res = 2;
    } else if (isX == false && isY == true) {
      res = 3;
    } else if (isX == false && isY == false) {
      res = 4;
    } else {
      res = "waiting...";
    }
    setoutput1(res);
  }
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="bg-slate-200 shadow rounded-box w-[800px] p-6">
        <div className="grid grid-cols-2 gap-6">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Sample Input 1</span>
            </div>
            <textarea
              className="textarea textarea-bordered bg-white"
              placeholder="Quadrant"
              onChange={handleTextArea}
            ></textarea>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Sample Output 1</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered bg-white"
              value={output1}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
