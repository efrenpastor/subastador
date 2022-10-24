export default function handler(req, res) {
    const { query: { name } } = req
    if (name) {
        res.status(200).json(
            {
                "results": [{
                    "id": "1235",
                    "country_code": "ES",
                    "postal_code": "04013",
                    "place_name": "Gandía",
                    "admin_name1": "Comunidad Valenciana",
                    "admin_code1": "CV",
                    "admin_name2": "Valencia",
                    "admin_code2": "VA",
                    "admin_name3": "Valencia",
                    "admin_code3": "04013",
                    "latitude": "36.8381",
                    "longitude": "-2.4597",
                    "accuracy": "4"
                }],
                "page": 1,
                "total_pages": 1,
                "total_results": 1
            }
        )
    } else {
        res.status(200).json(
            {
                "results": [{
                    "id": "1234",
                    "country_code": "ES",
                    "postal_code": "04002",
                    "place_name": "Almeria",
                    "admin_name1": "Andalucia",
                    "admin_code1": "AN",
                    "admin_name2": "Almeria",
                    "admin_code2": "AL",
                    "admin_name3": "Almeria",
                    "admin_code3": "04013",
                    "latitude": "36.8381",
                    "longitude": "-2.4597",
                    "accuracy": "4"
                }, {
                    "id": "1235",
                    "country_code": "ES",
                    "postal_code": "04013",
                    "place_name": "Gandía",
                    "admin_name1": "Comunidad Valenciana",
                    "admin_code1": "CV",
                    "admin_name2": "Valencia",
                    "admin_code2": "VA",
                    "admin_name3": "Valencia",
                    "admin_code3": "04013",
                    "latitude": "36.8381",
                    "longitude": "-2.4597",
                    "accuracy": "4"
                }],
                "page": 1,
                "total_pages": 1,
                "total_results": 2
            }
        )
    }
}
