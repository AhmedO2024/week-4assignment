# week-4assignment

I have tried to complete this assignment and spent long unsuccessfull hours on it. I could not get the databse to talk to the server. The below is my code for the database. My plan was to create a football player review page. Thank you,

DROP TABLE IF EXISTS player_review;

CREATE TABLE player_review (
id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
team TEXT,
player TEXT,
review TEXT
);

INSERT INTO player_review (team, player, review) VALUES
('Arsenal', 'Bukayo Saka', 'star-boy'),
('Aston Villa', 'Ollie Watkins', 'poacher'),
('Tottenham', 'Richarlison', 'rubbish'),
('Man-Utd', 'Bruno Fernandez', 'cry-baby'),
('Man-City', 'Erling Haaland', 'Machine');

SELECT \* FROM player_review;
