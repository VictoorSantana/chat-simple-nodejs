CREATE TABLE friends ( 
id INT NOT NULL AUTO_INCREMENT, 
id_user_owner INT NOT NULL 
, id_user_friend INT NOT NULL 
, PRIMARY KEY (id));ALTER TABLE friends
                ADD COLUMN createdAt DATETIME NOT NULL,
                ADD COLUMN updatedAt DATETIME NOT NULL;
                

/* ALTER TABLE */ 

ALTER TABLE friends 
ADD COLUMN id_user_owner INT NOT NULL 
, ADD COLUMN id_user_friend INT NOT NULL 
,