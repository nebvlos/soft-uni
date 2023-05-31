function towns(data) {

    for (let row of data) {
        let element = row.split(' | ')
        let obj = {
            town: element[0],
            latitude: Number(element[1]).toFixed(2),
            longitude: Number(element[2]).toFixed(2)
        }
        console.log(obj);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)