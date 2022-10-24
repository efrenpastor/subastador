import clientPromise from '../../lib/mongodb'

export default async (req, res) => {
    try {
        const client = await clientPromise
        const db = client.db('subastador')

        const { query: { name, page = 1 } } = req
        const paginate = async (page_size, page_num, cursor) => {
            const skips = page_size * (page_num - 1)
            const result = cursor.skip(skips).limit(page_size).toArray()
            return result
        }
        const size = 10
        const collection = await db.collection('locations')

        if (name) {
            const locations = await collection.aggregate([
                {
                    $search: {
                        index: "autocomplete",
                        compound: {
                            must: [
                                {
                                    text: {
                                        query: name,
                                        path: 'place_name',
                                        fuzzy: {
                                            maxEdits: 1
                                        }
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    $limit: 3
                }
            ]).toArray()

            res.status(200).json(
                {
                    "results": [...locations],
                    "page": 1,
                    "total_pages": 1,
                    "total_results": 3
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

    } catch (e) {
        console.error(e)
    }
}
