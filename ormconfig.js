const SnakeNamingStrategy = require('typeorm-naming-strategies')
    .SnakeNamingStrategy;


module.exports = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'payment_service',
    logging: false,
    entities: [
        "dist/**/**.entity{.ts,.js}"
    ],
    migrations: ["dist/database/migrations/*{.ts,.js}"],
    synchronize: false,
    namingStrategy: new SnakeNamingStrategy()
}