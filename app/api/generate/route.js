// import clientPromise from "@/lib/mongodb"

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const client = await clientPromise;    const db = client.db("Shrinkr");
//     const collection = db.collection("url");

//     // check if shorturl already exists
//     const existingDoc = await collection.findOne({ shorturl: body.shorturl });

//     if (existingDoc) {
//       return Response.json({
//         message: 'Short URL already exists.',
//         success: false,
//         error: true
//       }, { status: 409 }); // 409 Conflict
//     }

//     // insert new short URL
//     await collection.insertOne({
//       url: body.url,
//       shorturl: body.shorturl
//     });

//     return Response.json({
//       message: 'URL generated successfully.',
//       success: true,
//       error: false,
//       shorturl: body.shorturl
//     });
//   } catch (err) {
//     console.error("API error:", err);
//     return Response.json({
//       message: 'Server error or invalid input.',
//       success: false,
//       error: true
//     }, { status: 500 });
//   }
// }


// 

import clientPromise from "@/lib/mongodb";
import FlakeId from "flake-idgen";
import intformat from "biguint-format";

const flake = new FlakeId(); // Initialize snowflake generator

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("Shrinkr");
    const collection = db.collection("url");

    let shorturl = body.shorturl?.trim();

    if (!shorturl) {
      // Generate unique Snowflake ID as fallback
      let exists;
      do {
        const id = flake.next(); // Returns Buffer
        shorturl = intformat(id, "dec"); // Convert to string
        exists = await collection.findOne({ shorturl });
      } while (exists);
    } else {
      const exists = await collection.findOne({ shorturl });
      if (exists) {
        return Response.json({
          message: "Short URL already exists.",
          success: false,
          error: true,
        }, { status: 409 });
      }
    }

    await collection.insertOne({
      url: body.url,
      shorturl: shorturl
    });

    return Response.json({
      message: "URL generated successfully.",
      success: true,
      error: false,
      shorturl: shorturl
    });

  } catch (err) {
    console.error("API error:", err);
    return Response.json({
      message: "Server error or invalid input.",
      success: false,
      error: true,
    }, { status: 500 });
  }
}
