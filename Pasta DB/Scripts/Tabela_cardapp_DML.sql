alter session set nls_date_format='YYYY-MM-DD HH24:MI:SS';

/*
DELETE FROM t_cpp_categoria;
DELETE FROM t_cpp_avaliacao;
DELETE FROM t_cpp_pedido_item_cardapio;
DELETE FROM t_cpp_item_cardapio;
DELETE FROM t_cpp_pedido;
DELETE FROM t_cpp_cliente;
DELETE FROM t_cpp_estabelecimento;
DELETE FROM t_cpp_gerente;
*/

desc t_cpp_estabelecimento;

-- CRIACAO DA TABELA GERENTE
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
SET nm_gerente = 'JoÃ£o Lima'
WHERE cd_gerente = 3;


-- CRIAÃ‡ÃƒO DA TABELA ESTABELECIMENTO
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
 

-- CRIAÃ‡ÃƒO DA TABELA ITEM_CARDAPIO
INSERT INTO t_cpp_item_cardapio VALUES(cditemcardapio.nextval, 1, 1, '1', 'Sorvete de Chocolate', '100g de sorvete sabor chocolate', 5.00, 'Leite, chocolate em pó e açúcar', 700, utl_raw.cast_to_raw('D:\Área de Trabalho\Kaue\husky'));
INSERT INTO t_cpp_item_cardapio VALUES(cditemcardapio.nextval, 1, 1, '0', 'Milk Shake de Menta com Chocolate', '150ml de sorvete sabor menta e chocolate', 7.00, 'Leite, menta e chocolate em pó e açúcar', 750, utl_raw.cast_to_raw('D:\Área de Trabalho\Kaue\husky'));
INSERT INTO t_cpp_item_cardapio VALUES(cditemcardapio.nextval, 2, 3, '1', 'Churros de Chocolate', '1 unidade de churros sabor chocolate', 7.00, 'Leite, chocolate, farinha de trigo, água e açúcar', 850, utl_raw.cast_to_raw('D:\Área de Trabalho\Kaue\husky'));
INSERT INTO t_cpp_item_cardapio VALUES(cditemcardapio.nextval, 2, 3, '0', 'Churros de Doce de Leite', '1 unidade de churros sabor doce de leite', 7.00, 'Leite, doce de leite, farinha de trigo, água e açúcar', 800, utl_raw.cast_to_raw('D:\Área de Trabalho\Kaue\husky'));
INSERT INTO t_cpp_item_cardapio VALUES(cditemcardapio.nextval, 3, 6, '1', 'Arroz', '100g de arroz do tipo 1', 3.00, 'Arroz Tipo 1', 200, utl_raw.cast_to_raw('D:\Área de Trabalho\Kaue\husky'));
INSERT INTO t_cpp_item_cardapio VALUES(cditemcardapio.nextval, 3, 6, '0', 'Feijão', '100g de feijão carioca', 4.00, 'Feijão Carioca', 300, utl_raw.cast_to_raw('D:\Área de Trabalho\Kaue\husky'));
insert into t_cpp_item_cardapio values(cditemcardapio.nextval, 1, 1,'1', 'Milkshake unicórnio','Com MeMs', 8.00, 'Leite, chocolate, caramelo, chantilly e MeM', 500, utl_raw.cast_to_raw('D:\Área de Trabalho\Kaue\husky'));
insert into t_cpp_item_cardapio values(cditemcardapio.nextval, 1, 1, '0', 'Milkshake ovomaltine','O preferido da casa', 12.00, 'Leite, chocolate', 300, utl_raw.cast_to_raw('D:\Área de Trabalho\Kaue\husky'));
insert into t_cpp_item_cardapio values(cditemcardapio.nextval, 2, 5, '1', 'Cerveja pilsen','A melhor cerveja do MUNDO', 10.00, 'Lúpulo, cevada', 43, utl_raw.cast_to_raw('D:\Área de Trabalho\Kaue\husky'));
insert into t_cpp_item_cardapio values(cditemcardapio.nextval, 2, 4, '0', 'Amendoim sem casca','Um bom aperitivo, talvez o melhor de todos', 2.00, 'Amendoim', 30, utl_raw.cast_to_raw('D:\Área de Trabalho\Kaue\husky'));
insert into t_cpp_item_cardapio values(cditemcardapio.nextval, 3, 8, '0', 'Vinho tinto espanhol','Quer ostentar? então toma, ano de 1930', 10000.00, 'Vinho tinto espanhol', 0, utl_raw.cast_to_raw('D:\Área de Trabalho\Kaue\husky'));
insert into t_cpp_item_cardapio values(cditemcardapio.nextval, 3, 6, '1', 'Virada à paulista','Venha comer esse clássico!', 15.00, 'Arroz, feijão, Bife, ovo frito, couve refogada e tomate.', 400, utl_raw.cast_to_raw('D:\Área de Trabalho\Kaue\husky'));
insert into t_cpp_item_cardapio values(cditemcardapio.nextval, 3, 7, '1', 'Lanche Cheddar Duplo','200g de hambúrguer artesanal e 100g de cheddar,', 20.00, 'Hambúrguer, alface, cheddar, tomate.', 500, utl_raw.cast_to_raw('D:\Área de Trabalho\Kaue\husky'));

 
-- CRIAÃ‡ÃƒO DA TABELA CLIENTE
insert into t_cpp_cliente values(1, 'Lari', '11960205342', '123');
insert into t_cpp_cliente values(2, 'Eric', '11293847581', '1234');
insert into t_cpp_cliente values(3, 'Kaue', '11384713947', '12345');
insert into t_cpp_cliente values(4, 'Henrique', '1137284950', '123456');
insert into t_cpp_cliente values(5, 'Gi', '11372816481', '1234567');
insert into t_cpp_cliente values(6, 'Dan', '11846265749', '12345678');

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
 
-- CRIAÃ‡ÃƒO DA TABELA AVALIAÃ‡ÃƒO
INSERT INTO t_cpp_avaliacao values(1, 1, 1, 5, 'Melhor sorvete da regiÃ£o muito saboroso.');
INSERT INTO t_cpp_avaliacao values(2, 2, 3, 5, 'A comida Ã© saborosa e ainda chegou quentinha.');
INSERT INTO t_cpp_avaliacao values(3, 3, 2, 3, 'Churros estava queimado');
INSERT INTO t_cpp_avaliacao values(4, 4, 1, 4, 'Sorvete todo derretido.');
INSERT INTO t_cpp_avaliacao values(5, 5, 3, 5, 'Comida muito gostosa.');
INSERT INTO t_cpp_avaliacao values(6, 6, 2, 2, 'Churros queimado e com pouco recheio.');
 
 
COMMIT;
 
SELECT * FROM t_cpp_categoria;
SELECT * FROM t_cpp_avaliacao; 
SELECT * FROM t_cpp_cliente; 
SELECT * FROM t_cpp_estabelecimento;
SELECT * FROM t_cpp_gerente;
SELECT * FROM t_cpp_item_cardapio; 