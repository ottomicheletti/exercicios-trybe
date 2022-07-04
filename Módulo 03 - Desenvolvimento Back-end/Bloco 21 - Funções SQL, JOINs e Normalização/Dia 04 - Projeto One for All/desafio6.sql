SELECT
    MIN(PLANS.value) AS faturamento_minimo,
    MAX(PLANS.value) AS faturamento_maximo,
    ROUND(AVG(PLANS.value), 2) AS faturamento_medio,
    SUM(PLANS.value) AS faturamento_total
FROM
    `SpotifyClone`.plans AS PLANS
    INNER JOIN `SpotifyClone`.user as `USER` ON PLANS.id = USER.plan_id
