function dictionary(terms) {

    let parsedObj = {}

    for (let term of terms) {
        let obj = JSON.parse(term)
        let keys = Object.keys(obj)
        let key = keys[0]
        parsedObj[key] = obj[key]
    }
    let sortKeys = Object.keys(parsedObj).sort((a, b) => a.localeCompare(b))

    for (let key of sortKeys) {
        console.log(`Term: ${key} => Definition: ${parsedObj[key]}`);
    }
}
dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub.", "Test":"Trying something"}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)