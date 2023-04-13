create TABLE meetups(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    keywords VARCHAR(255),
    time TIMESTAMP(6),
    place VARCHAR(255)
);
