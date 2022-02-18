CREATE TABLE room_participants ( 
id INT NOT NULL AUTO_INCREMENT, 
id_room INT NOT NULL 
, id_user INT NOT NULL 
, kind INT NULL 
, PRIMARY KEY (id));ALTER TABLE room_participants
                ADD COLUMN createdAt DATETIME NOT NULL,
                ADD COLUMN updatedAt DATETIME NOT NULL;
                

/* ALTER TABLE */ 

ALTER TABLE room_participants 
ADD COLUMN id_room INT NOT NULL 
, ADD COLUMN id_user INT NOT NULL 
, ADD COLUMN kind INT NULL 
,