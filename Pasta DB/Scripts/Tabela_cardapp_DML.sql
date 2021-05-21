
alter session set nls_date_format='YYYY-MM-DD HH24:MI:SS';

/*

DELETE FROM t_cpp_avaliacao;
DELETE FROM t_cpp_pedido_item_cardapio;
DELETE FROM t_cpp_item_cardapio;
DELETE FROM t_cpp_pedido;
DELETE FROM t_cpp_cliente;
DELETE FROM t_cpp_estabelecimento;
DELETE FROM t_cpp_gerente;

*/


 
-- CRIAÇÃO DA TABELA GERENTE
insert into t_cpp_gerente values (1,'Jorge','pessoa.eric@gmail.com', 1900.00, 'Rua do grito agudo, 202');
insert into t_cpp_gerente values (2,'Débora','Debora@gmail.com', 2200.00, 'Rua do grito grave, 103');
insert into t_cpp_gerente values (3,'João','Joaoo@gmail.com', 1500.00, 'Rua do abacate, 30');

-- CRIAÇÃO DA TABELA ESTABELECIMENTO
INSERT INTO t_cpp_estabelecimento VALUES(1, 1, 'Milk Shakespeare', '12345678000108');
INSERT INTO t_cpp_estabelecimento VALUES(2, 2, 'Churros Store', '11145555000109');
INSERT INTO t_cpp_estabelecimento VALUES(3, 3, 'Restaurante dos Primos', '22245678000105');
 

-- CRIAÇÃO DA TABELA ITEM_CARDAPIO
INSERT INTO t_cpp_item_cardapio VALUES(1, 1, 't', 'Sorvete de Chocolate', '100g de sorvete sabor chocolate', 5.00, 'Leite, chocolate em pó e açúcar', 'SOBREMESA', 700,1);
INSERT INTO t_cpp_item_cardapio VALUES(2, 1, 'f', 'Milk Shake de Menta com Chocolate', '150ml de sorvete sabor menta e chocolate', 7.00, 'Leite, menta e chocolate em pó e açúcar', 'SOBREMESA', 750,1);
INSERT INTO t_cpp_item_cardapio VALUES(3, 2, 't', 'Churros de Chocolate', '1 unidade de churros sabor chocolate', 7.00, 'Leite, chocolate, farinha de trigo, água e açúcar', 'SOBREMESA', 850, 1);
INSERT INTO t_cpp_item_cardapio VALUES(4, 2, 'f', 'Churros de Doce de Leite', '1 unidade de churros sabor doce de leite', 7.00, 'Leite, doce de leite, farinha de trigo, água e açúcar', 'SOBREMESA', 800, 1);
INSERT INTO t_cpp_item_cardapio VALUES(5, 3, 't', 'Arroz', '100g de arroz do tipo 1', 3.00, 'Arroz Tipo 1', 'PRATO', 200, 1);
INSERT INTO t_cpp_item_cardapio VALUES(6, 3, 'f', 'Feijão', '100g de feijão carioca', 4.00, 'Feijão Carioca', 'PRATO', 300, 1);
insert into t_cpp_item_cardapio values(7, 1, 't', 'Milkshake unicórnio','Com MeMs', 8.00, 'Leite, chocolate, caramelo, chantilly e MeM','SOBREMESA', 500, 1);
insert into t_cpp_item_cardapio values(8, 1, 'f', 'Milkshake ovomaltine','O preferido da casa', 12.00, 'Leite, chocolate', 'SOBREMESA', 300, 1);
insert into t_cpp_item_cardapio values(9, 2, 't', 'Cerveja pilsen','A melhor cerveja do MUNDO', 10.00, 'Lúpulo, cevada','BEBIDA', 43, 1);
insert into t_cpp_item_cardapio values(10, 2, 'f', 'Amendoim sem casca','Um bom aperitivo, talvez o melhor de todos', 2.00, 'Amendoim','APERITIVO', 30,  1 );
insert into t_cpp_item_cardapio values(11, 3, 'f', 'Vinho tinto espanhol','Quer ostentar? então toma, ano de 1930', 10000.00, 'Vinho tinto espanhol','BEBIDA', 0, 1);
insert into t_cpp_item_cardapio values(12, 3, 't', 'Virada à paulista','Venha comer esse clássico!', 15.00, 'Arroz, feijão, Bife, ovo frito, couve refogada e tomate.','PRATO', 400, 1);
 
-- CRIAÇÃO DA TABELA CLIENTE
insert into t_cpp_cliente values(1, 'Lari', '11960205342', '123');
insert into t_cpp_cliente values(2, 'Eric', '11293847581', '1234');
insert into t_cpp_cliente values(3, 'Kaue', '11384713947', '12345');
insert into t_cpp_cliente values(4, 'Henrique', '1137284950', '123456');
insert into t_cpp_cliente values(5, 'Gi', '11372816481', '1234567');
insert into t_cpp_cliente values(6, 'Dan', '11846265749', '12345678');
 
-- CRIAÇÃO DA TABELA PEDIDO
INSERT INTO t_cpp_pedido VALUES (1, 1, 1,  5.00, 'PAGO', TO_DATE('10-DEZ-2021 17:30:30','DD-MON-YYYY HH24:MI:SS'));
INSERT INTO t_cpp_pedido VALUES (2, 2, 2,  17.00, 'EM PREPARO', TO_DATE('07-MAI-2021 15:10:30','DD-MON-YYYY HH24:MI:SS'));
INSERT INTO t_cpp_pedido VALUES (3, 3, 3,  15.00, 'EM PREPARO', TO_DATE('28-JUL-2021 12:23:14','DD-MON-YYYY HH24:MI:SS'));
insert into t_cpp_pedido values(4, 4, 2, 12.00,'PAGO', TO_DATE('20-JUN-2021 16:14:43','DD-MON-YYYY HH24:MI:SS'));
insert into t_cpp_pedido values(5, 5, 1, 8.00,'RECEBIDO', TO_DATE('10-MAR-2021 18:34:55','DD-MON-YYYY HH24:MI:SS'));
insert into t_cpp_pedido values(6, 6, 3, 10015.00,'ENTREGUE', TO_DATE('05-JAN-2021 13:10:12','DD-MON-YYYY HH24:MI:SS'));
 
-- CRIAÇÃO DA TABELA AVALIAÇÃO
INSERT INTO t_cpp_avaliacao values(1, 1, 1, 5, 'Melhor sorvete da região muito saboroso.');
INSERT INTO t_cpp_avaliacao values(2, 2, 3, 5, 'A comida é saborosa e ainda chegou quentinha.');
INSERT INTO t_cpp_avaliacao values(3, 3, 2, 3, 'Churros estava queimado');
INSERT INTO t_cpp_avaliacao values(4, 4, 1, 4, 'Sorvete todo derretido.');
INSERT INTO t_cpp_avaliacao values(5, 5, 3, 5, 'Comida muito gostosa.');
INSERT INTO t_cpp_avaliacao values(6, 6, 2, 2, 'Churros queimado e com pouco recheio.');
 
-- CRIAÇÃO DA TABELA PEDIDO_ITEM_CARDAPIO
INSERT INTO t_cpp_pedido_item_cardapio VALUES(1, 1);
INSERT INTO t_cpp_pedido_item_cardapio VALUES(4, 2);
INSERT INTO t_cpp_pedido_item_cardapio VALUES(9, 2);
INSERT INTO t_cpp_pedido_item_cardapio VALUES(12, 3);
INSERT INTO t_cpp_pedido_item_cardapio VALUES(9, 4);
INSERT INTO t_cpp_pedido_item_cardapio VALUES(10, 4);
INSERT INTO t_cpp_pedido_item_cardapio VALUES(7, 5);
INSERT INTO t_cpp_pedido_item_cardapio VALUES(11, 6);
INSERT INTO t_cpp_pedido_item_cardapio VALUES(12, 6);
 
COMMIT;
 

SELECT * FROM t_cpp_avaliacao; 
SELECT * FROM t_cpp_cliente; 
SELECT * FROM t_cpp_estabelecimento;
SELECT * FROM t_cpp_gerente;
SELECT * FROM t_cpp_item_cardapio; 
SELECT * FROM t_cpp_pedido;
SELECT * FROM t_cpp_pedido_item_cardapio; 
