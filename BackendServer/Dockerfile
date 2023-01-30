#Create MySQL Image for JSP Tutorial Application
FROM mysql

ENV MYSQL_ROOT_PASSWORD my-secret-pw
ENV MYSQL_DATABASE=rawData

COPY create_tables.sql /docker-entrypoint-initdb.d/

EXPOSE 3306:3306
EXPOSE 33060:33060