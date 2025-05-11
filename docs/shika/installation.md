---
sidebar_position: 1
---

# Installation

## Requirements

Shika has the following requirements:
* PHP >= 8.2 (with `pdo_mysql` or `pdo_sqlite`)
* PHP compatible web server
* Database such as MySQL or MariaDB (unless using SQLite)

## Installing

Download the latest release of Shika and extract the files to your web server folder.

Copy the `.env.example` file to `.env` and edit the database configuration.

## Configuring your web server

### Nginx

```
server {
    listen 80;
    listen [::]:80;

    server_name shika.example.com;
    root /var/www/shika/public;

    index index.php;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }
 
    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php8.2-fpm.sock;
    }
}
```

### Caddy

```
shika.example.com {
    file_server
    root * /var/www/shika/public
    php_fastcgi unix//run/php/php8.2-fpm.sock
}
```

## Configuring your database

Shika needs a database to work, currently MySQL, MariaDB and SQLite are supported as databases.

### MySQL

To use MySQL, edit the `.env` file in your Shika folder and set your [DSN](https://www.php.net/manual/en/ref.pdo-mysql.connection.php), username and password.

```
DB_DSN=mysql:host=localhost;dbname=shika
DB_USERNAME=username
DB_PASSWORD=password
```

### SQLite

To use SQLite, edit the `.env` file and set the [DSN](https://www.php.net/manual/en/ref.pdo-sqlite.connection.php) to your database path.

```
DB_DSN=sqlite:/var/www/shika/data.sqlite
```

When using SQLite also make sure the database is writable by the www user.

```
chown www-data:www-data data.sqlite
```

## Creating the data

To use Shika you must create the database tables and create a user.

### Running the migrations

To create the database tables, you must run the migrate command.

```
php bin/migrate
```

This will run all migrations and create the tables.

### Creating your first user

There are no standard users, you can create your first user by running the *adduser* command.

```
php bin/adduser
```

Follow the instructions in the command line and enter your username and password.