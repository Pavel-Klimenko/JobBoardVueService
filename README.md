# vue-tmp
Docker vuejs project template

## Build
docker-compose build

## Run development mode

```bash
docker-compose up
```
or

```bash
docker-compose up -d
```
or

```bash
bash ./serve
```
## Build production

```bash
docker-compose run --rm app bash -c 'npm run build'
```
or

```bash
bash ./build
```
