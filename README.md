# Vulcanos BackEnd

## `DOCKER`

para crear la imagen Docker del back `(contenedor individual)`

```
docker build . -t <nombreImagen>
// esto lee el archivo Dockerfile
```

Para crear todos los servicios al tiempo con Docker-compose (se hace desde el repo del front)

```
docker-compose up -d
// esto lee el archivo docker-compose.yaml
```

- El -d, es **detached** (para que el comando no se quede pegado en consola)

## `VARIABLES DE ENTORNO`

- MongoDB URL local

```
mongodb://localhost:27017/vulcanos-database
```

Renombrar el archivo **.env.template** a **.env**

- Las variables de entorno también se agregan al config.ts y se implementan llamando esa utilidad, EJ: `config.MONGO_URI`

URL Prod: https://vulcanos-backend.onrender.com
