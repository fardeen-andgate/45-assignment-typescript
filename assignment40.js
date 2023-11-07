async function make_album(artist_name, album_title, tracks_number) {
    const music_album = {
        artist_name,
        album_title,
    };
    if (tracks_number !== undefined) {
        music_album.tracks_number = tracks_number;
    }
    return music_album;
}
const album1 = await make_album("The WEEKND", "Dawn FM", 30);
console.log(album1);
const album2 = await make_album("Metro Boomin", "Heroes and Villain", 15);
console.log(album2);
const album3 = await make_album("Joji", "Nectar", 3);
console.log(album3);
export {};
