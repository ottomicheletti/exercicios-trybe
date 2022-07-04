SELECT
    TRACK.name AS cancao,
    COUNT(USER_HISTORY.user_id) AS reproducoes
FROM
    `SpotifyClone`.song AS TRACK
    INNER JOIN `SpotifyClone`.user_history AS USER_HISTORY ON TRACK.id = USER_HISTORY.song_id
GROUP BY
    cancao
ORDER BY
    reproducoes DESC,
    cancao ASC
LIMIT
    2;
