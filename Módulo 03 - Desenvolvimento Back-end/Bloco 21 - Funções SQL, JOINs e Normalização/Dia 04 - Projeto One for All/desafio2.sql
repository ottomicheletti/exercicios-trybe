SELECT
    COUNT(DISTINCT(TRACKS.id)) AS cancoes,
    COUNT(DISTINCT(ARTISTS.id)) AS artistas,
    COUNT(DISTINCT(ALBUMS.id)) AS albuns
FROM
    `SpotifyClone`.artists AS ARTISTS
    INNER JOIN `SpotifyClone`.album AS ALBUMS ON ARTISTS.id = ALBUMS.artist_id
    INNER JOIN `SpotifyClone`.song AS TRACKS ON ALBUMS.id = TRACKS.album_id;
