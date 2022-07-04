SELECT
    ARTISTS.name AS artista,
    ALBUM.name AS album
FROM
    `SpotifyClone`.artists AS ARTISTS
    INNER JOIN `SpotifyClone`.album as ALBUM ON ALBUM.artist_id = ARTISTS.id
WHERE
    ARTISTS.name = "Walter Phoenix"
GROUP BY
    artista,
    album