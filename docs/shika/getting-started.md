---
sidebar_position: 1
---

# Getting Started

To start, download the build file in the release page on our GitHub and unzip it on your web server

The quickest way to start is then to run **setup.sh** \
*If you encounter an unexpected error, you can check the [error section](#errors) below*

## Web server configuration

Once you are done, you will need to update your web server config, you can find some example below \
*Don't forget to update your PHP version, and ensure your root target point to the public/ folder*

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

## Website configuration

After that, head to your new analytics website, login and click on "sites" at the top, from here you can add a name that will be used to identify your website \
Take the identifier the website give you, you can then modify your website to send a request to Shika
```html
<script src="https://shika.example.com/shika.js" data-url="https://shika.example.com/analytics/send" data-site-key="your-identifier"></script>
```

## Errors

### Fatal error: Uncaught PDOException: SQLSTATE[HY000]: General error: 8 attempt to write a readonly database

When using sqlite, make sure that the web user entered is the correct one (should usually be www-data)