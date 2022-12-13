/* eslint-disable import/no-anonymous-default-export */
import clientPromise from "../../../lib/mongodb"

export default async (req, res) => {
  try {
    const client = await clientPromise
    const db = client.db('subastador')

    const { query: { locationName }} = req
    const collection = await db.collection('locations')
    const regex = new RegExp(locationName, 'i')
    const agg = { place_name: {  $regex: regex }}
    const results = await collection.find(agg).toArray()

    res.status(200).json({
      "results": [...results],
      "page": 1,
      "total_pages": 1,
      "total_results": 1
    })
  } catch (err) {
    console.error(err)
  }
}
