use('BD3-NoSQL-AtlasMongoDB')

const collection = "bd3-nosql-atv1"

db[collection].find(
    {cpf: "123.456.789-00"},
    {cod_aluno: 0}
)