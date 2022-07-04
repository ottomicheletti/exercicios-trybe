SELECT
    `USER`.name as usuario,
    IF(
        YEAR(MAX(USER_HISTORY.rep_date)) = "2021",
        "Usuário ativo",
        "Usuário inativo"
    ) as condicao_usuario
FROM
    `SpotifyClone`.user AS `USER`
    INNER JOIN `SpotifyClone`.user_history AS USER_HISTORY ON USER_HISTORY.user_id = USER.id
GROUP BY
    usuario
ORDER BY
    usuario
