SELECT
    ARTISTS.name AS artista,
    ALBUM.name AS album,
    COUNT(FAVORITES.user_id) AS seguidores
FROM
    `SpotifyClone`.artists AS ARTISTS
    INNER JOIN `SpotifyClone`.album AS ALBUM ON ARTISTS.id = ALBUM.artist_id
    INNER JOIN `SpotifyClone`.user_favorite_artist AS FAVORITES ON ARTISTS.id = FAVORITES.artist_id
GROUP BY
    ARTISTS.name,
    ALBUM.name
ORDER BY
    seguidores DESC,
    artista ASC,
    album ASC