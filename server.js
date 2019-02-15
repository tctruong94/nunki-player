// console.log("SONG CONTROLLER IS ON!");

// const { Datastore } = require('@google-cloud/datastore');
// // Creates a client
// const datastore = new Datastore();

// // [START datastore_retrieve_entities]
// async function listSongs() {
//     const query = datastore.createQuery("Song");

//     const [songs] = await datastore.runQuery(query);
//     console.log('Songs:');
//     songs.forEach(song => {
//         // const songKey = song[datastore.KEY];
//         console.log(song);
//     });
// }

// require(`yargs`) // eslint-disable-line
//   .command(`list`, `Lists all songs ordered by name.`, {}, listSongs)