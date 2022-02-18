CREATE TABLE request_friends ( 
id INT NOT NULL AUTO_INCREMENT, 
id_user_from INT NOT NULL 
, id_user_to INT NOT NULL 
, status INT NULL 
, PRIMARY KEY (id));ALTER TABLE request_friends
                ADD COLUMN createdAt DATETIME NOT NULL,
                ADD COLUMN updatedAt DATETIME NOT NULL;
                

/* ALTER TABLE */ 

ALTER TABLE request_friends 
ADD COLUMN id_user_from INT NOT NULL 
, ADD COLUMN id_user_to INT NOT NULL 
, ADD COLUMN status INT NULL 
,