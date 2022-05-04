import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const eduardo = await prisma.producer.upsert({
        where: { cpf: '11111111111' },
        update: {},
        create: {
            cpf: '11111111111',
            name: 'Eduardo Soprana Coelho',
            farm_name: 'Fazenda do eduardo',
            city: 'Timbé do Sul',
            state: 'SC',
            total_area: 250,
            total_arable_area: 180,
            total_vegetation_area: 70,
            crops: 'Soja, Milho, Batata',
        },
    });

    const pedro = await prisma.producer.upsert({
        where: { cpf: '22222222222' },
        update: {},
        create: {
            cpf: '22222222222',
            name: 'Pedro Roberto da Silva',
            farm_name: 'Fazenda do Pedro',
            city: 'Florianópolis',
            state: 'SC',
            total_area: 550,
            total_arable_area: 450,
            total_vegetation_area: 100,
            crops: 'Beterraba, Alface, Aipin',
        },
    });

    const maria = await prisma.producer.upsert({
        where: { cpf: '33333333333' },
        update: {},
        create: {
            cpf: '33333333333',
            name: 'Maria Aparecida de Jesus',
            farm_name: 'Fazenda do Pedro',
            city: 'Criciúma',
            state: 'SC',
            total_area: 75,
            total_arable_area: 50,
            total_vegetation_area: 25,
            crops: 'Repolho, Vagem, Cenoura',
        },
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
