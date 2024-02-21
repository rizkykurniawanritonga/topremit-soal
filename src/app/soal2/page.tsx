"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [input1, setinput1] = useState<string>("");
  const [input2, setinput2] = useState<string>("");
  const [input3, setinput3] = useState<string>("");
  const [output1, setoutput1] = useState<string>("");
  const [output2, setoutput2] = useState<string>("");
  const [output3, setoutput3] = useState<string>("");
  useEffect(() => {
    setoutput1(handleStrings(input1));
  }, [input1]);
  useEffect(() => {
    setoutput2(handleStrings(input2));
  }, [input2]);
  useEffect(() => {
    setoutput3(handleStrings(input3));
  }, [input3]);
  function handleStrings(str: string) {
    var strs = str.split("");
    for (let i = 0; i < strs.length; i++) {
      if (strs[i] == "<") {
        delete strs[i - 1];
      }
    }
    console.log(strs);

    const snt = strs.join("");
    return snt.replace(/</g, "");
  }
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="bg-slate-200 shadow rounded-box w-[800px] p-6">
        <div className="grid grid-cols-2 gap-6">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Sample Input 1</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered bg-white"
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setinput1(e.target.value)
              }
            />
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
          <label className="form-control">
            <div className="label">
              <span className="label-text">Sample Input 2</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered bg-white"
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setinput2(e.target.value)
              }
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Sample Output 2</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered bg-white"
              value={output2}
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Sample Input 3</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered bg-white"
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setinput3(e.target.value)
              }
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Sample Output 3</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered bg-white"
              value={output3}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
