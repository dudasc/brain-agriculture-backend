## Description

API Brain agriculture

### Node version 16.14.2
Create .env file and configure database url connection (view .env.example).

Create database "brain-agriculture" on postgreSQL.

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
## API endpoints

```bash
# reports
$ GET: http://localhost:9000/api/reports/total-farms
$ GET: http://localhost:9000/api/reports/total-arable-area
$ GET: http://localhost:9000/api/reports/total-hectares

#charts
$ GET: http://localhost:9000/api/reports/type-area
$ GET: http://localhost:9000/api/reports/farms-by-state

# producers
$ GET: http://localhost:9000/api/producers/
$ DELETE: http://localhost:9000/api/producers/1
$ POST: http://localhost:9000/api/producers/
$ PATCH: http://localhost:9000/api/producers/1

# JSON
{
    "cpf": "12345678911",
    "name": "Joquim Ribeiro",
    "farm_name": "Fazenda do Joaquim",
    "city": "Timbé do Sul",
    "state": "SC",
    "total_area": 250,
    "total_arable_area": 180,
    "total_vegetation_area": 70,
    "crops": "Batata, Cebola, Aipin"
}
```

