
const conn = require('./connection');


function getRequestedFriendsAndFriends(userId) {
    // const { offset, limit } = paginate;

    return conn
    .query(`
    SELECT ref.id_user_from AS id, ref.id AS ref_id, 1 AS request, us.name, fi.hash AS photo_hash, fi.extension AS photo_extension, fi.type AS photo_type
    FROM request_friends ref
    LEFT JOIN users us ON us.id = ref.id_user_from
    LEFT JOIN files fi ON fi.id = us.id_photo
    WHERE ref.id_user_to = ${userId}
    AND ref.status = 1
    UNION ALL
    SELECT fr.id_user_friend AS id, fr.id AS ref_id, 0 AS request, us.name, fi.hash AS photo_hash, fi.extension AS photo_extension, fi.type AS photo_type
    FROM friends fr
    LEFT JOIN users us ON us.id = fr.id_user_friend 
    LEFT JOIN files fi ON fi.id = us.id_photo
    WHERE fr.id_user_owner = ${userId}
    `, { type: "SELECT", raw: true });
}



module.exports = { getRequestedFriendsAndFriends }