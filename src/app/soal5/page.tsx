"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [input1, setinput1] = useState<string>("");
  const [input2, setinput2] = useState<string>("");
  const [output1, setoutput1] = useState<string>("");
  const [output2, setoutput2] = useState<string>("");

  useEffect(() => {
    setoutput1(handleStrings(input1));
  }, [input1]);
  useEffect(() => {
    setoutput2(handleStrings(input2));
  }, [input2]);
  function handleStrings(str: string) {
    var strs = str.split("");
    var doubl: any = {};
    for (let i = 0; i < strs.length; i++) {
      if (strs[i] == strs[i - 1] && i > 0) {
        var vlbfr = doubl[strs[i]] || 1;
        doubl[strs[i]] = parseInt(vlbfr) + 1;
      }
    }

    var vlstr = str;
    for (const key in doubl) {
      var ros = "";
      for (let i = 0; i < doubl[key]; i++) {
        ros = ros + key;
      }
      console.log(ros + doubl[key]);
      var regexp = new RegExp(ros, "gi");
      vlstr = vlstr.replace(regexp, key + doubl[key]);
    }

    return vlstr;
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
        </div>
      </div>
    </div>
  );
}
