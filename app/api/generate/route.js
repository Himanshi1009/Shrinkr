// import clientPromise from "@/lib/mongodb"

// export async function POST(request) {

//   const body = await request.json();
//   const client = await clientPromise;
//   const db = client.db("Shrinkr")
//   const collection = db.collection("url")

//   //check if short url exists
//   const doc = await collection.findOne({shorturl: Badeen_Display.shorturl});
//   if(doc){
//     return Response.json({ message: 'URL aldready exists',
//        success:false, error: true })
//   }

//   const result = await collection.insertOne({
//     url: body.url,
//     shorturl : body.shorturl
//   })

//   return Response.json({ message: 'URL Generated successfully', success:true, error: false })
// }

import clientPromise from "@/lib/mongodb"

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;    const db = client.db("Shrinkr");
    const collection = db.collection("url");

    // check if shorturl already exists
    const existingDoc = await collection.findOne({ shorturl: body.shorturl });

    if (existingDoc) {
      return Response.json({
        message: 'Short URL already exists.',
        success: false,
        error: true
      }, { status: 409 }); // 409 Conflict
    }

    // insert new short URL
    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl
    });

    return Response.json({
      message: 'URL generated successfully.',
      success: true,
      error: false,
      shorturl: body.shorturl
    });
  } catch (err) {
    console.error("API error:", err);
    return Response.json({
      message: 'Server error or invalid input.',
      success: false,
      error: true
    }, { status: 500 });
  }
}
