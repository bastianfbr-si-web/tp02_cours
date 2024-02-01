FROM php:7.4-apache

ENV COMPOSER_ALLOW_SUPERUSER=1

COPY ./ /var/www/html

WORKDIR /var/www/html

# Exposer le port 80 pour permettre les connexions entrantes
EXPOSE 80

# Définir l'entrée de l'application
CMD ["apache2-foreground"]
