CREATE TABLE chats ( 
id INT NOT NULL AUTO_INCREMENT, 
id_user_owner INT NOT NULL 
, id_room INT NOT NULL 
, id_file INT NULL 
, message VARCHAR(200) NOT NULL 
,kind INT NULL 
, status INT NULL 
, PRIMARY KEY (id));ALTER TABLE chats
                ADD COLUMN createdAt DATETIME NOT NULL,
                ADD COLUMN updatedAt DATETIME NOT NULL;
                

/* ALTER TABLE */ 

ALTER TABLE chats 
ADD COLUMN id_user_owner INT NOT NULL 
, ADD COLUMN id_room INT NOT NULL 
, ADD COLUMN id_file INT NULL 
, ADD COLUMN message VARCHAR(200) NOT NULL 
,ADD COLUMN kind INT NULL 
, ADD COLUMN status INT NULL 
,