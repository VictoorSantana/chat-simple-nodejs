CREATE TABLE rooms ( 
id INT NOT NULL AUTO_INCREMENT, 
id_user INT NOT NULL 
, id_file INT NULL 
, name VARCHAR(45) NOT NULL 
,kind INT NULL 
, PRIMARY KEY (id));ALTER TABLE rooms
                ADD COLUMN createdAt DATETIME NOT NULL,
                ADD COLUMN updatedAt DATETIME NOT NULL;
                

/* ALTER TABLE */ 

ALTER TABLE rooms 
ADD COLUMN id_user INT NOT NULL 
, ADD COLUMN id_file INT NULL 
, ADD COLUMN name VARCHAR(45) NOT NULL 
,ADD COLUMN kind INT NULL 
,