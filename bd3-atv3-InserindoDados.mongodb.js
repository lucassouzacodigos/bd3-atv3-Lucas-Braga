use('BD3-NoSQL-AtlasMongoDB')

const collection = "bd3-nosql-atv1"

db[collection].insertMany([
  {
    cod_aluno: 1,
    cod_turma: 101,
    nome: "João Silva",
    cpf: "123.456.789-00",
    rg: "12.345.678-9",
    telefone_aluno: "(11) 91234-5678",
    email: "joao.silva@email.com",
    data_nascimento: ISODate("2000-05-12")
  },
  {
    cod_aluno: 2,
    cod_turma: 102,
    nome: "Maria Oliveira",
    cpf: "234.567.890-11",
    rg: "23.456.789-0",
    telefone_aluno: "(11) 92345-6789",
    email: "maria.oliveira@email.com",
    data_nascimento: ISODate("1999-08-23")
  },
  {
    cod_aluno: 3,
    cod_turma: 101,
    nome: "Carlos Souza",
    cpf: "345.678.901-22",
    rg: "34.567.890-1",
    telefone_aluno: "(11) 93456-7890",
    email: "carlos.souza@email.com",
    data_nascimento: ISODate("2001-02-10")
  },
  {
    cod_aluno: 4,
    cod_turma: 103,
    nome: "Ana Costa",
    cpf: "456.789.012-33",
    rg: "45.678.901-2",
    telefone_aluno: "(11) 94567-8901",
    email: "ana.costa@email.com",
    data_nascimento: ISODate("2000-11-30")
  },
  {
    cod_aluno: 5,
    cod_turma: 102,
    nome: "Pedro Santos",
    cpf: "567.890.123-44",
    rg: "56.789.012-3",
    telefone_aluno: "(11) 95678-9012",
    email: "pedro.santos@email.com",
    data_nascimento: ISODate("1998-07-19")
  },
  {
    cod_aluno: 6,
    cod_turma: 104,
    nome: "Juliana Lima",
    cpf: "678.901.234-55",
    rg: "67.890.123-4",
    telefone_aluno: "(11) 96789-0123",
    email: "juliana.lima@email.com",
    data_nascimento: ISODate("2002-03-05")
  },
  {
    cod_aluno: 7,
    cod_turma: 103,
    nome: "Lucas Pereira",
    cpf: "789.012.345-66",
    rg: "78.901.234-5",
    telefone_aluno: "(11) 97890-1234",
    email: "lucas.pereira@email.com",
    data_nascimento: ISODate("2001-09-14")
  },
  {
    cod_aluno: 8,
    cod_turma: 101,
    nome: "Fernanda Alves",
    cpf: "890.123.456-77",
    rg: "89.012.345-6",
    telefone_aluno: "(11) 98901-2345",
    email: "fernanda.alves@email.com",
    data_nascimento: ISODate("1999-12-01")
  },
  {
    cod_aluno: 9,
    cod_turma: 104,
    nome: "Rafael Gomes",
    cpf: "901.234.567-88",
    rg: "90.123.456-7",
    telefone_aluno: "(11) 99012-3456",
    email: "rafael.gomes@email.com",
    data_nascimento: ISODate("2000-06-22")
  },
  {
    cod_aluno: 10,
    cod_turma: 102,
    nome: "Beatriz Rocha",
    cpf: "012.345.678-99",
    rg: "01.234.567-8",
    telefone_aluno: "(11) 99123-4567",
    email: "beatriz.rocha@email.com",
    data_nascimento: ISODate("2001-01-17")
  }
]);
