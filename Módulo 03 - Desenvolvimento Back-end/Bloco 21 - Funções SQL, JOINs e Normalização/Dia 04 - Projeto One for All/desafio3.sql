SELECT
    `USER`.name AS usuario,
    COUNT(USER_HISTORY.song_id) AS qtde_musicas_ouvidas,
    ROUND(SUM(SONG.duration / 60), 2) AS total_minutos
FROM
    `SpotifyClone`.user AS `USER`
    INNER JOIN `SpotifyClone`.`user_history` AS USER_HISTORY ON `USER`.id = USER_HISTORY.user_id
    INNER JOIN `SpotifyClone`.song AS SONG ON USER_HISTORY.song_id = SONG.id
GROUP BY
    usuario
ORDER BY
    usuario
