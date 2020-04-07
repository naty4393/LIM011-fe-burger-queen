const functions = require('firebase-functions');
const admin = require('firebase-admin');
/*feedback*/
admin.initializeApp();
let db = admin.firestore();

exports.onEpisodeTrackCreated = functions.firestore.document('episodes/{episodeId}/tracks/{trackIndex}')
  .onCreate((snap, context) => {
    const data = snap.data()

    if (!data.name) throw new Error('Missing `name` parameter')

    const name = data.name.trim()
    let tracksRef = db.collection('tracks')

    return tracksRef.where('name', '==', name).get()
      .then(snapshot => {
        if (snapshot.empty) {
          return tracksRef.add({
            name: name
          })
        }
        let doc
        snapshot.forEach(snapDoc => {
          doc = snapDoc
        })
        return doc
      })
        .then((doc) => {
          snap.ref.set({
            trackId: doc.id
          }, { merge: true })
          return doc
        })
  })