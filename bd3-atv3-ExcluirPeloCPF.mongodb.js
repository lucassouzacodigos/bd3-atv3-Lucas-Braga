use('BD3-NoSQL-AtlasMongoDB')

const collection = "bd3-nosql-atv1"

db[collection].deleteOne(
    {cpf: "456.789.012-33"}
)