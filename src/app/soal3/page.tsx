"use client";
import { AES, enc } from "crypto-js";
import { useEffect, useState } from "react";

export default function Home() {
  const [keyEnc, setKEyEnc] = useState<string>("ACMSENDMOREMONK");
  const [input1, setinput1] = useState<string>("");
  const [input2, setinput2] = useState<string>("");
  const [output1, setoutput1] = useState<string>("");
  const [output2, setoutput2] = useState<string>("");
  useEffect(() => {
    setoutput1(input1 ? ot13(input1) : "");
  }, [input1]);
  useEffect(() => {
    setoutput2(input2 ? ot13(input2) : "");
  }, [input2]);
  const encryptId = (str: string) => {
    const ciphertext = AES.encrypt(str, keyEnc);
    return ciphertext.toString();
  };
  const decryptId = (str: string) => {
    return AES.decrypt(str, keyEnc).toString(enc.Utf8);
  };
  function ot13(str: string, key?: string) {
    var alphabets = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      " ",
      "-",
      "_",
      ".",
      "&",
      "?",
      "!",
      "@",
      "#",
      "/",
    ];
    var alphabets13 = [
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      " ",
      "-",
      "_",
      ".",
      "&",
      "?",
      "!",
      "@",
      "#",
      "/",
    ];

    var resultStr = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < alphabets.length; j++) {
        if (str[i] === alphabets[j]) {
          resultStr.push(alphabets13[j]);
        }
      }
    }
    return resultStr.join("");
  }
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="bg-slate-200 shadow rounded-box w-[800px] p-6">
        <div className="grid grid-cols-2 gap-6">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Encrypt Input 1</span>
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
              <span className="label-text">Encrypt Output 1</span>
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
              <span className="label-text">Decrypt Input 2</span>
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
              <span className="label-text">Decrypt Output 2</span>
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
