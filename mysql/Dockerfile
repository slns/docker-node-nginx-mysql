FROM mysql:5.7

ENV MYSQL_DATABASE=nodedb \
    MYSQL_ROOT_PASSWORD=root

CMD [ "--innodb-use-native-aio=0"]

ADD setup.sql /docker-entrypoint-initdb.d/

# EXPOSE 3306
