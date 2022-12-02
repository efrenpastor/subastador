/* eslint-disable import/no-anonymous-default-export */
import clientPromise from '../../lib/mongodb'

export default async (req, res) => {
  try {
    const client = await clientPromise
    const db = client.db('subastador')

    const { query: { pc, page = 1 } } = req
    const paginate = async (page_size, page_num, cursor) => {
      const skips = page_size * (page_num - 1)
      const result = cursor.skip(skips).limit(page_size).toArray()
      return result
    }
    const size = 10
    const collection = await db.collection('lots')

    if (pc) {
      const agg = { postal_code : { $eq : pc } }
      const cursor = await collection.find(agg)
      const total_pages = await cursor.count() / size
      const results = await paginate(size, page, cursor)
      
      res.status(200).json(
        {
          "results": [...results],
          "page": page,
          "total_pages": Math.round(total_pages),
          "total_results": results.length
        }
      )
    } else {
      const cursor = await collection.find({})
      const total_pages = await collection.count() / size
      const results = await paginate(size, page, cursor)

      res.status(200).json(
        {
          "results": [...results],
          "page": page,
          "total_pages": Math.round(total_pages),
          "total_results": results.length
        }
      )
    }
  } catch(e) {
    console.error(e)
  }
}