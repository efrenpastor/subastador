const fs = require('fs')

const mapperPC = (pc) => {
    const map = {
        '01': 'Álava',
        '02': 'Albacete',
        '03': 'Alicante',
        '04': 'Almería',
        '05': 'Ávila',
        '06': 'Badajoz',
        '07': 'Baleares',
        '08': 'Barcelona',
        '09': 'Burgos',
        '10': 'Cáceres',
        '11': 'Cádiz',
        '12': 'Castellón',
        '13': 'Ciudad Real',
        '14': 'Córdoba',
        '15': 'La Coruña',
        '16': 'Cuenca',
        '17': 'Gerona',
        '18': 'Granada',
        '19': 'Guadalajara',
        '20': 'Guipúzcoa',
        '21': 'Huelva',
        '22': 'Huesca',
        '23': 'Jaén',
        '24': 'León',
        '25': 'Lérida',
        '26': 'La Rioja',
        '27': 'Lugo',
        '28': 'Madrid',
        '29': 'Málaga',
        '30': 'Murcia',
        '31': 'Navarra',
        '32': 'Orense',
        '33': 'Asturias',
        '34': 'Palencia',
        '35': 'Las Palmas',
        '36': 'Pontevedra',
        '37': 'Salamanca',
        '38': 'Santa Cruz de Tenerife',
        '39': 'Cantabria',
        '40': 'Segovia',
        '41': 'Sevilla',
        '42': 'Soria',
        '43': 'Tarragona',
        '44': 'Teruel',
        '45': 'Toledo',
        '46': 'Valencia',
        '47': 'Valladolid',
        '48': 'Vizcaya',
        '49': 'Zamora',
        '50': 'Zaragoza',
        '51': 'Ceuta',
        '52': 'Melilla',
    }

    return map[pc]
}

const mapperCA = (cac) => {
    const map = {
        '01': 'Andalucía',
        '02': 'Aragón',
        '03': 'Asturias, Principado de',
        '04': 'Balears, Illes',
        '05': 'Canarias',
        '06': 'Cantabria',
        '07': 'Castilla y León',
        '08': 'Castilla - La Mancha',
        '09': 'Cataluña',
        '10': 'Comunitat Valenciana',
        '11': 'Extremadura',
        '12': 'Galicia',
        '13': 'Madrid, Comunidad de',
        '14': 'Murcia, Región de',
        '15': 'Navarra, Comunidad Foral de',
        '16': 'País Vasco',
        '17': 'Rioja, La',
        '18': 'Ceuta',
        '19': 'Melilla',
    }

    return map[cac]
}

const normalize = (str) => {
    let normalized = str.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase()
    if (normalized.includes(', els')) { return `els ${normalized.replace(', els', '')}`}
    else if (normalized.includes(', los')) { return `los ${normalized.replace(', los', '')}`}
    else if (normalized.includes(', las')) { return `las ${normalized.replace(', las', '')}`}
    else if (normalized.includes(', les')) { return `les ${normalized.replace(', les', '')}`}
    else if (normalized.includes(', sas')) { return `sas ${normalized.replace(', sas', '')}`}
    else if (normalized.includes(', ses')) { return `ses ${normalized.replace(', ses', '')}`}
    else if (normalized.includes(', es')) { return `es ${normalized.replace(', es', '')}`}
    else if (normalized.includes(', as')) { return `as ${normalized.replace(', as', '')}`}
    else if (normalized.includes(', la')) { return `la ${normalized.replace(', la', '')}` }
    else if (normalized.includes(', el')) { return `el ${normalized.replace(', el', '')}`}
    else if (normalized.includes(', a')) { return `a ${normalized.replace(', a', '')}`}
    else if (normalized.includes(', l\'')) { return `l\'${normalized.replace(', l\'', '')}`}
    else { return normalized }
}

(async () => {
    /**
     * Cities JSON
     * CODAUTO CPRO CMUN DC NOMBRE 
     */
    const citiesFile = fs.readFileSync(__dirname + '/municipios.json')
    const cities = JSON.parse(citiesFile)

    /**
     * PRO MUN PC LAT LONG
     */
    const postalCodesFile = fs.readFileSync(__dirname + '/postalcodes.json')
    const postalCodes = JSON.parse(postalCodesFile)

    // Map cities with postal codes
    const result = cities.cities.map((location, i) => ({
        id: i,
        country_code: 'ES',
        postal_code: postalCodes.postal_codes.filter((x) => {
            const hasSameName = normalize(x[1].split('/')[0]) === normalize(location[4].split('/')[0])
            return hasSameName
        }).map((x) => x[2]),
        place_name: location[4],
        admin_name1: mapperPC(location[1]),
        admin_code1: location[1],
        admin_name2: mapperCA(location[0]),
        admin_code2: location[0],
    }))

    fs.writeFile(__dirname + '/locations.json', JSON.stringify(result, null, 2), err => {
        /**
         * Check num of postal codes, uniques and duplicateds
         */
        const DBFile = fs.readFileSync(__dirname + '/locations.json')
        const db = JSON.parse(DBFile)

        let total = 0
        let total_uniques = 0
        let total_original = 0
        let mem = []
        let mem_original = []

        postalCodes.postal_codes.forEach((location) => {
            if (!mem_original.includes(location[2])) {
                total_original = total_original + 1
                mem_original.push(location[2])
            }
        })

        db.forEach(location => {
            total = total + location.postal_code.length
            location.postal_code.forEach(x => {
                if (!mem.includes(x)) {
                    total_uniques = total_uniques + 1
                    mem.push(x)
                }
            })
        })

        console.log('total => ', total, 'total_original => ', total_original, 'total_uniques => ', total_uniques)
        console.log(mem_original.filter(x => !mem.includes(x)))

        if (err) {
            console.log(err)
        }
    })
})()
