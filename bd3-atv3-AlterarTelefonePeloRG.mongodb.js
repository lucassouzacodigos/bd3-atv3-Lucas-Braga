use('BD3-NoSQL-AtlasMongoDB')

const collection = "bd3-nosql-atv1"

db[collection].updateOne(
    {rg: "12.345.678-9"},
    {$set :{telefone: "(11) 9 9999-9999"}}
)
