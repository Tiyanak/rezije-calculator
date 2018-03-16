create database rezije default character set utf8;
create user 'rezije_admin'@'localhost' identified by 'admin';
grant all on rezije.* to 'rezije_admin'@'localhost';
