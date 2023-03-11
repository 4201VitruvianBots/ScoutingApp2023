# How to build the docker image

```bash
docker build . -t backend
```

# How to run the docker image in a container

```bash
docker run -p 3306:3306 -p 33060:33060 --name <name> backend
```

# How to stop the docker container

```bash
docker stop <name>
```

# How to restart the docker container

```bash
docker start <name>
```
