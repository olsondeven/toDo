CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  todo VARCHAR(70),
  process boolean,
  complete boolean
);


INSERT INTO tasks (todo ,process ,complete)VALUES ('make app','false', 'false');
