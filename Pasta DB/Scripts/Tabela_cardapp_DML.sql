alter session set nls_date_format='YYYY-MM-DD HH24:MI:SS';

/*
DELETE FROM t_cpp_mesa;
DELETE FROM t_cpp_avaliacao;
DELETE FROM t_cpp_cliente;
DELETE FROM t_cpp_item_cardapio;
DELETE FROM t_cpp_categoria;
DELETE FROM t_cpp_estabelecimento;
DELETE FROM t_cpp_gerente;
*/


-- POPULACAO DA TABELA GERENTE
insert into t_cpp_gerente values (cdgerente.nextval,'Jorge','pessoa.eric@gmail.com', 1900.00, 'Rua do grito agudo, 202', 'Bananinha123');
insert into t_cpp_gerente values (cdgerente.nextval,'Débora','Debora@gmail.com', 2200.00, 'Rua do grito grave, 103', 'GoiabadaAt77');
insert into t_cpp_gerente values (cdgerente.nextval,'João','Joao@gmail.com', 1500.00, 'Rua do abacate, 30', 'Mocoto99');

UPDATE t_cpp_gerente
SET ds_email = 'jorge@gmail.com'
WHERE cd_gerente = 1;

UPDATE t_cpp_gerente
SET nm_gerente = 'Jorge Mendes'
WHERE cd_gerente = 1;

UPDATE t_cpp_gerente
SET nm_gerente = 'Débora Leão'
WHERE cd_gerente = 2;

UPDATE t_cpp_gerente
SET nm_gerente = 'João Lima'
WHERE cd_gerente = 3;


-- POPULAÇÃO DA TABELA ESTABELECIMENTO
INSERT INTO t_cpp_estabelecimento VALUES(cdestabelecimento.nextval, 1, '12345678000108', 'Milk Shakespeare LTDA', 'Milk Shakespeare', 'Rua djuvidas, 197', '11986759980', 'milk@gmail.com');
INSERT INTO t_cpp_estabelecimento VALUES(cdestabelecimento.nextval, 2, '11145555000109','Churros Store SA', 'Churros Store', 'Rua taí, 22', '33978964456', 'churros@gmail.com' );
INSERT INTO t_cpp_estabelecimento VALUES(cdestabelecimento.nextval, 3, '22245678000105', 'Primos e Cia', 'Restaurante dos Primos', 'Rua Melissa, 39', '21987558563', 'primos@gmail.com');


--POPULACAO DA TABELA CATEGORIA DO ESTABELECIMENTO 1
insert into t_cpp_categoria values (cdcategoria.nextval, 1, 'Sobremesa');
insert into t_cpp_categoria values (cdcategoria.nextval, 1, 'Bebida');

--POPULACAO DA TABELA CATEGORIA DO ESTABELECIMENTO 2
insert into t_cpp_categoria values (cdcategoria.nextval, 2, 'Sobremesa');
insert into t_cpp_categoria values (cdcategoria.nextval, 2, 'Aperitivo');
insert into t_cpp_categoria values (cdcategoria.nextval, 2, 'Bebida');

--POPULACAO DA TABELA CATEGORIA DO ESTABELECIMENTO 3
insert into t_cpp_categoria values (cdcategoria.nextval, 3, 'Prato');
insert into t_cpp_categoria values (cdcategoria.nextval, 3, 'Lanche');
insert into t_cpp_categoria values (cdcategoria.nextval, 3, 'Bebida');
 

-- POPULAÇÃO DA TABELA ITEM_CARDAPIO
INSERT INTO t_cpp_item_cardapio VALUES(cditemcardapio.nextval, 1, 1, '1', 'Sorvete de Chocolate', '100g de sorvete sabor chocolate', 5.00, 700, 'https://raw.githubusercontent.com/Poagilers-Fenix/Cardapio_Digital/main/Imagens/chocolate.jpg');
INSERT INTO t_cpp_item_cardapio VALUES(cditemcardapio.nextval, 1, 1, '0', 'Milk Shake de Menta com Chocolate', '150ml de sorvete sabor menta e chocolate', 7.00, 750, 'https://raw.githubusercontent.com/Poagilers-Fenix/Cardapio_Digital/main/Imagens/menta%20chocolate.jpg');
INSERT INTO t_cpp_item_cardapio VALUES(cditemcardapio.nextval, 2, 3, '1', 'Churros de Chocolate', '1 unidade de churros sabor chocolate', 7.00, 850, 'https://raw.githubusercontent.com/Poagilers-Fenix/Cardapio_Digital/main/Imagens/churros%20chocolate.jpg');
INSERT INTO t_cpp_item_cardapio VALUES(cditemcardapio.nextval, 2, 3, '0', 'Churros de Doce de Leite', '1 unidade de churros sabor doce de leite', 7.00, 800, 'https://raw.githubusercontent.com/Poagilers-Fenix/Cardapio_Digital/main/Imagens/churros%20doce%20de%20leite.jpg');
INSERT INTO t_cpp_item_cardapio VALUES(cditemcardapio.nextval, 3, 6, '1', 'Arroz', '100g de arroz do tipo 1', 3.00, 200, 'https://raw.githubusercontent.com/Poagilers-Fenix/Cardapio_Digital/main/Imagens/arroz.jpg');
INSERT INTO t_cpp_item_cardapio VALUES(cditemcardapio.nextval, 3, 6, '0', 'Feijão', '100g de feijão carioca', 4.00, 300, 'https://raw.githubusercontent.com/Poagilers-Fenix/Cardapio_Digital/main/Imagens/feijao.jpg');
insert into t_cpp_item_cardapio values(cditemcardapio.nextval, 1, 1, '1', 'Milkshake unicórnio','Com MeMs', 8.00, 500, 'https://raw.githubusercontent.com/Poagilers-Fenix/Cardapio_Digital/main/Imagens/milkshake%20unicornio.jpg');
insert into t_cpp_item_cardapio values(cditemcardapio.nextval, 1, 1, '0', 'Milkshake ovomaltine','O preferido da casa', 12.00, 300, 'https://raw.githubusercontent.com/Poagilers-Fenix/Cardapio_Digital/main/Imagens/ovomaltine.jpg');
insert into t_cpp_item_cardapio values(cditemcardapio.nextval, 2, 5, '1', 'Cerveja pilsen','A melhor cerveja do MUNDO', 10.00, 43, 'https://raw.githubusercontent.com/Poagilers-Fenix/Cardapio_Digital/main/Imagens/cerveja%20pilsen.jpg');
insert into t_cpp_item_cardapio values(cditemcardapio.nextval, 2, 4, '0', 'Amendoim sem casca','Um bom aperitivo, talvez o melhor de todos', 2.00, 30, 'https://raw.githubusercontent.com/Poagilers-Fenix/Cardapio_Digital/main/Imagens/amendoim.jpg');
insert into t_cpp_item_cardapio values(cditemcardapio.nextval, 3, 8, '0', 'Vinho tinto espanhol','Quer ostentar? então toma, ano de 1930', 10000.00, 0, 'https://raw.githubusercontent.com/Poagilers-Fenix/Cardapio_Digital/main/Imagens/vinho%20tinto.jpg');
insert into t_cpp_item_cardapio values(cditemcardapio.nextval, 3, 6, '1', 'Virada à paulista','Venha comer esse clássico!', 15.00, 400, 'https://raw.githubusercontent.com/Poagilers-Fenix/Cardapio_Digital/main/Imagens/virada%20%C3%A0%20paulista.jpg');
insert into t_cpp_item_cardapio values(cditemcardapio.nextval, 3, 7, '1', 'Lanche Cheddar Duplo','200g de hambúrguer artesanal e 100g de cheddar,', 20.00, 500, 'https://raw.githubusercontent.com/Poagilers-Fenix/Cardapio_Digital/main/Imagens/lanche%20cheddar.jpg');

 
-- POPULAÇÃO DA TABELA CLIENTE
insert into t_cpp_cliente values(cdcliente.nextval, 'Lari', '11960205342', '123');
insert into t_cpp_cliente values(cdcliente.nextval, 'Eric', '11293847581', '1234');
insert into t_cpp_cliente values(cdcliente.nextval, 'Kaue', '11384713947', '12345');
insert into t_cpp_cliente values(cdcliente.nextval, 'Henrique', '1137284950', '123456');
insert into t_cpp_cliente values(cdcliente.nextval, 'Gi', '11372816481', '1234567');
insert into t_cpp_cliente values(cdcliente.nextval, 'Dan', '11846265749', '12345678');

UPDATE t_cpp_cliente
SET ds_senha = 'asdfpoiu89'
WHERE cd_cliente = 1;

UPDATE t_cpp_cliente
SET ds_senha = 'ericDoChurras'
WHERE cd_cliente = 2;

UPDATE t_cpp_cliente
SET ds_senha = 'qwermnbv45'
WHERE cd_cliente = 4;

UPDATE t_cpp_cliente
SET ds_senha = '280101'
WHERE cd_cliente = 5;

UPDATE t_cpp_cliente
SET ds_senha = 'henri45'
WHERE cd_cliente = 6;
 
-- POPULACAO DA TABELA AVALIAÇÃO
INSERT INTO t_cpp_avaliacao values(cdavaliacao.nextval, 1, 1, 5, 'Melhor sorvete da região muito saboroso.');
INSERT INTO t_cpp_avaliacao values(cdavaliacao.nextval, 2, 3, 5, 'A comida estava saborosa e ainda chegou quentinha.');
INSERT INTO t_cpp_avaliacao values(cdavaliacao.nextval, 3, 2, 3, 'Churros estava queimado');
INSERT INTO t_cpp_avaliacao values(cdavaliacao.nextval, 4, 1, 4, 'Sorvete todo derretido.');
INSERT INTO t_cpp_avaliacao values(cdavaliacao.nextval, 5, 3, 5, 'Comida muito gostosa.');
INSERT INTO t_cpp_avaliacao values(cdavaliacao.nextval, 6, 2, 2, 'Churros queimado e com pouco recheio.');

-- POPULACAO DA TABELA MESA

INSERT INTO t_cpp_mesa values(cdmesa.nextval, 1, 'LIVRE');
INSERT INTO t_cpp_mesa values(cdmesa.nextval, 1, 'LIVRE');
INSERT INTO t_cpp_mesa values(cdmesa.nextval, 2, 'OCUPADA');
INSERT INTO t_cpp_mesa values(cdmesa.nextval, 2, 'OCUPADA');
INSERT INTO t_cpp_mesa values(cdmesa.nextval, 3, 'RESERVADA');
INSERT INTO t_cpp_mesa values(cdmesa.nextval, 3, 'RESERVADA');



 
COMMIT;
 
SELECT * FROM t_cpp_categoria;
SELECT * FROM t_cpp_avaliacao; 
SELECT * FROM t_cpp_cliente; 
SELECT * FROM t_cpp_estabelecimento;
SELECT * FROM t_cpp_gerente;
SELECT * FROM t_cpp_item_cardapio; 
SELECT * FROM t_cpp_mesa;