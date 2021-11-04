
create table veuno.migrations
(
    id int auto_increment,
    name varchar(255) null,
    batch int null,
    constraint migrations_pk
        primary key (id)
);