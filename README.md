## Description

API Brain agriculture

### Node version 16.14.2
Create .env file and configure database url connection (view .env.example)

## Installation

```bash
$ npm install
```

## Run migrations and generate prisma client

```bash
$ npx prisma migrate dev --name init
$ npx prisma generate
```
## Run seed and generate mock data

```bash
$ npm run seed
```

## Running the app

```bash
# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

