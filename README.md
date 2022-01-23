# Build and Run Exempla

## Build and Run All Containers

```docker
docker-compose up --build
```

## See result 
```html
http://localhost:80
```

## Run Database and create tables 

```docker
docker exec -it db bash
mysql -uroot -proot
use nodedb;
create table people(id int not null auto_increment, name varchar(255), primary key(id));
rd
```

## Build ONE

```docker
docker build -t slns/nginx-mysql-node .
or
docker build -t slns/nginx-mysql-node . -f PATH/Dockerfile
```

## Run ONE

```docker
docker run --rm -d -p 3000:3000 -name slns/nginx-mysql-node slns/nginx-mysql-node
```

## Run image from DockerHub

```docker
docker pull slns/nginx-mysql-node
```
