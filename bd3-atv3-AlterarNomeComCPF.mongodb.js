use('BD3-NoSQL-AtlasMongoDB')

const collection = "bd3-nosql-atv1"

db[collection].updateOne(
    {cpf: "123.456.789-00"},
    {$set: {nome: "Joao Silva Marques"}}
)