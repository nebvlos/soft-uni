function songs(songsData) {

    let songCount = songsData.shift()
    let categoryType = songsData.pop()
    let songs = []

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList
            this.name = name
            this.time = time
        }
    }

    for (let i = 0; i < songCount; i++) {
        let info = songsData[i].split('_')
        let typeList = info[0]
        let name = info[1]
        let time = info[2]

        let song = new Song(typeList, name, time)
        songs.push(song)
    }

    if (categoryType == 'all') {
        songs.forEach((i) => console.log(i.name))
    }
    else {
        let filtered = songs.filter((i) => i.typeList == categoryType)
        filtered.forEach((i) => console.log(i.name))
    }
}
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
)