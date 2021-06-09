-- id, player, weight, college, born, position, tm
SELECT p.id, p.player, p.weight, p.college, p.born, s.position, s.tm
FROM nba_players AS p
INNER JOIN nba_stats AS s
ON p.id = s.player_id;

-- player_id, college, year, position, two_point_average, ft_percentage, ts_percentage
SELECT s.player_id, p.college, s.year, s.position, s.two_point_percentage, s.ft_percentage, s.ts_percentage
FROM nba_stats AS s
INNER JOIN nba_players AS p 
ON s.player_id = p.id;