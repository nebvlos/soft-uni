function converter(personData) {
    let info = JSON.parse(personData)

    for (let key of Object.keys(info)) {
        console.log(`${key}: ${info[key]}`);
    }
}
converter('{"name": "George", "age": 40, "town": "Sofia"}')