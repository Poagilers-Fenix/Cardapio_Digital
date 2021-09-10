CREATE TABLE Usuario (
id bigint PRIMARY KEY auto_increment,
telefone varchar(20),
senha varchar(20)
);

INSERT INTO Usuario (telefone, senha) VALUES
('(11) 93500-0281', '12345678');

INSERT INTO Usuario (telefone, senha) VALUES
('(11) 98976-0091', '12345678');

INSERT INTO Usuario (telefone, senha) VALUES
('(11) 99864-1625', '12345678');

INSERT INTO Usuario (telefone, senha) VALUES
('(11) 93486-3487', '12345678');

INSERT INTO Usuario (telefone, senha) VALUES
('(11) 93856-9375', '12345678');

INSERT INTO Usuario (telefone, senha) VALUES
('(11) 92657-4957', '12345678');


CREATE TABLE Estabelecimento (
	id bigint PRIMARY KEY auto_increment,
	cnpj varchar(20),
	razao_social varchar(50),
	nome_fantasia varchar(50),
	endereco varchar(100),
	telefone varchar(20),
	email varchar(40)
);

INSERT INTO Estabelecimento (cnpj, razao_social, nome_fantasia, endereco, telefone, email) VALUES
('23.345.345/0001-45', 'Lucia Garcia', 'Delicia de Sorvete','Rua: Brasil, 560', '(11) 94667-4956', 'sorvetes@gmail.com');

INSERT INTO Estabelecimento (cnpj, razao_social, nome_fantasia, endereco, telefone, email) VALUES
('93.845.245/0001-78', 'Rodrigo Pessoa', 'Restaurante Rango Bom','Rua: Pedro Barros, 3650', '(11) 96578-7564', 'medidaCerta@gmail.com');

CREATE TABLE Pedido (
	id bigint PRIMARY KEY auto_increment,
	valor double(10),
	status varchar(20),
	hora varchar(10)
);

INSERT INTO Pedido (valor, status, hora) VALUES
(66.00,'Recebido', '12:45');

INSERT INTO Pedido (valor, status, hora) VALUES
(120.28,'Em Preparo', '18:22');

INSERT INTO Pedido (valor, status, hora) VALUES
(78.56,'Entregue', '19:10');

INSERT INTO Pedido (valor, status, hora) VALUES
(156.34,'Pago', '17:08');

CREATE TABLE Avaliacao (
	id bigint PRIMARY KEY auto_increment,
	nr_experiencia int,
	descricao varchar(500)
);

INSERT INTO Avaliacao (nr_experiencia, descricao) VALUES
(4, 'O sorvete estava ótimo.');

INSERT INTO Avaliacao (nr_experiencia, descricao) VALUES
(1, 'A entrega demorou pra chegar e o sorvete derreteu.');

INSERT INTO Avaliacao (nr_experiencia, descricao) VALUES
(5, 'Comida massa, recomendo');

INSERT INTO Avaliacao (nr_experiencia, descricao) VALUES
(5, 'O suco de morango com laranja é maravilhoso.');

INSERT INTO Avaliacao (nr_experiencia, descricao) VALUES
(4, 'O arroz estava insosso, mas o resto estava ótimo.');

CREATE TABLE Item (
	id bigint PRIMARY KEY auto_increment,
	nome varchar(50),
	destaque int,
	descricao varchar(500),
	valor double(10),
	calorias double(5)
);

INSERT INTO Item (nome, destaque, descricao, valor, calorias) VALUES
('Sorvete de chocolate', 1, '100g de sorvete de chocolate', 10.50, 580.89);

INSERT INTO Item (nome, destaque, descricao, valor, calorias) VALUES
('Sorvete de chocolate com menta', 0, '100g de sorvete de chocolate e menta', 11.00, 599.89);

INSERT INTO Item (nome, destaque, descricao, valor, calorias) VALUES
('Arroz', 0, '100g de arroz caseiro', 6.00, 130.00);

INSERT INTO Item (nome, destaque, descricao, valor, calorias) VALUES
('Arroz Integral', 1, '150g de arroz interal', 8.00, 90.00);

INSERT INTO Item (nome, destaque, descricao, valor, calorias) VALUES
('Costela', 1, '100g de uma costela suculenta', 80.00, 266.00);






