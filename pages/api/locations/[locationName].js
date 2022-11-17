export default function handler(req, res) {
    res.status(200).json({
        "_id": "1234",
        "country_code": "ES",
        "postal_code": "04002",
        "admin_name1": "Andalucia",
        "admin_code1": "AN",
        "admin_name2": "Almeria",
        "admin_code2": "AL",
        "place_name": "Almeria",
        "admin_code3": "04013",
        "latitude": "36.8381",
        "longitude": "-2.4597",
        "accuracy": "4"
    })
}
