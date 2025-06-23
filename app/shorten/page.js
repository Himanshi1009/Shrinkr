// "use client"
// import React from 'react'
// import { useState } from 'react';
// import Link from 'next/link';

// const Shorten = () => {
//     const [url, seturl] = useState("");
//     const [shorturl, setshorturl] = useState("");
//     const [generated, setgenerated] = useState("")
//     const [copied, setcopied] = useState(false)

//     const generate = () => {
//       const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     const raw = JSON.stringify({
//       "url": url,
//       "shorturl": shorturl
//     });

//     const requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow"
//     };

//     fetch("/api/generate", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         console.log(result)
//         alert(result.message)
//         seturl("")
//         setshorturl("")
//         setCopied(false)
//         setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${result.shorturl}`)
//       })
//       .catch((error) => console.error(error));
//         }
//   return (
//     <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
//       <h1 className='font-bold text-2xl'> Generate your short URL</h1>
//       <div className='flex flex-col gap-2'>

//         <input type='text' value={url} placeholder='Enter the URL' onChange={e => {
//             seturl(e.target.value)
//         }}
//         className='px-4 py-2 focus:outline-purple-600 rounded-md'/>

//         <input type='text' placeholder='Enter your preferred short URL text' value={shorturl}
//          onChange={e=>{setshorturl(e.target.value)}} className='px-4 py-2 focus:outline-purple-600 rounded-md'/>

//         <button onClick={generate} className='bg-purple-500 shadow-lg p-3 text-white rounded-lg font-bold p-3 my-3 py-1'>Generate</button>
//       </div>

//       {generated && 
//         <> <span className='font-bold text-lg'>Your Link :</span> <code><Link target="_blank" href={generated}>{generated}</Link>
//         </code>
//         </>}

//     </div>
//   )
// }

// export default Shorten

"use client";
import React, { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result.message);
        setUrl("");
        setShortUrl("");
        setCopied(false);

        const host = process.env.NEXT_PUBLIC_HOST || "http://localhost:3000";
        setGenerated(`${host}/${result.shorturl}`);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong.");
      });
  };

  const handleCopy = async () => {
    if (generated) {
      await navigator.clipboard.writeText(generated);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="mx-auto max-w-xl bg-purple-100 my-20 p-10 rounded-2xl shadow-lg flex flex-col gap-6 transition-all">
      <h1 className="text-3xl font-bold text-purple-700 text-center bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">
        🔗 Generate Your Short URL
      </h1>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={url}
          placeholder="Enter the long URL"
          onChange={(e) => setUrl(e.target.value)}
          className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
        />

        <input
          type="text"
          value={shorturl}
          placeholder="Enter custom short text(optional)"
          onChange={(e) => setShortUrl(e.target.value)}
          className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
        />

        <button
          onClick={generate}
          className="bg-purple-600 hover:bg-purple-700 transition-all text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 duration-300"
        >
          🚀 Generate
        </button>
      </div>

      {generated && (
        <div className="bg-white border border-purple-200 p-4 rounded-md mt-4 flex flex-col items-center gap-2 shadow-sm">
          <span className="text-lg font-medium text-purple-800">Your Link:</span>
          <div className="flex gap-3 items-center justify-center flex-wrap">
            <Link
              href={generated}
              target="_blank"
              className="text-blue-600 hover:underline font-mono text-sm break-all"
            >
              {generated}
            </Link>
            <button
              onClick={handleCopy}
              className="text-sm bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-md transition-all"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shorten;
