set serveroutput on;

--As tabelas T_CPP_PEDIDO e T_CPP_PEDIDO_ITEM_CARDAPIO (associativa) n�o ser�o utilizadas no momento, mas deixamos elas como parte do script DQL para podermos usar os selects no futuro.
--Os selects que tem as tabelas pedido e pedido


--Selects com where
-- Relat�rio simples que traz uma ocorr�ncia especifica de cada tabela do banco.
select * 
from t_cpp_avaliacao
where cd_avaliacao = 1;

select *
from t_cpp_cliente
where cd_cliente = 1;

select *
from t_cpp_estabelecimento
where cd_estabelecimento = 1;

select *
from t_cpp_gerente
where cd_gerente = 1;

select *
from t_cpp_item_cardapio
where cd_item_cardapio = 1;

select *
from t_cpp_pedido
where cd_pedido = 1;

select *
from t_cpp_pedido_item_cardapio
where cd_pedido = 2;

select *
from t_cpp_categoria
where cd_categoria = 2;


--selects sem where
--  Relat�rio simples que traz todas as ocorr�ncias da tabela.
select * 
from t_cpp_avaliacao;

select *
from t_cpp_cliente;

select *
from t_cpp_estabelecimento;

select *
from t_cpp_gerente;

select *
from t_cpp_item_cardapio;

select *
from t_cpp_pedido;

select *
from t_cpp_pedido_item_cardapio;

select *
from t_cpp_categoria;


-- Relat�rio simples com selects que trazem alguma ocorr�ncias espec�ficas da aplica��o de acordo com algum par�metro.

 -- select dos campos da tabela cliente
select nr_celular, ds_senha
from t_cpp_cliente;
 
--selecionar um cel espec�fico
select nr_celular, ds_senha
from t_cpp_cliente
where nr_celular = 11960205342 and ds_senha = 'asdfpoiu89';

-- selecionar o item de card�pio por nome e descri��o 
select nm_item_cardapio, ds_item_cardapio 
from t_cpp_item_cardapio
where nm_item_cardapio = 'Arroz';

-- selecionar as colunas de estabelecimento
select cd_estabelecimento, nm_fantasia 
from t_cpp_estabelecimento; 
 
-- selecionar um item card�pio de acordo com o c�digo dele e se ele est�o true ou false
select st_destaque,
       cd_estabelecimento     
from t_cpp_item_cardapio
where cd_estabelecimento = 2 and st_destaque = '1';
 
-- selecionar o status do pedido da tabela pedido
select st_pedido
from t_cpp_pedido;
 
 --selecionar colunas espec�ficas de um pedido espec�fico
select cd_pedido,
       st_pedido
from t_cpp_pedido
where cd_pedido = 2;



-- Relat�rio simples com INNER JOIN envolvendo duas ou mais tabelas.

--Queries mais espec�ficas

--Selecionar todos os itens do card�pio de dado estabelecimento
select e.cd_estabelecimento, e.nm_fantasia, ic.cd_item_cardapio, ic.ds_item_cardapio
from t_cpp_estabelecimento e  inner join t_cpp_item_cardapio ic
on e.cd_estabelecimento = ic.cd_estabelecimento
where e.cd_estabelecimento = 3;


--Selecionar pratos a partir da categoria dos itens do card�pio
select e.cd_estabelecimento, e.nm_fantasia, ic.nm_item_cardapio, cat.nm_categoria
from t_cpp_estabelecimento e  inner join t_cpp_item_cardapio ic
on e.cd_estabelecimento = ic.cd_estabelecimento
inner join t_cpp_categoria cat
on e.cd_estabelecimento = cat.cd_estabelecimento
where e.cd_estabelecimento = 1 and cat.nm_categoria = 'Sobremesa';

select e.cd_estabelecimento, e.nm_fantasia, ic.nm_item_cardapio, cat.nm_categoria
from t_cpp_estabelecimento e  inner join t_cpp_item_cardapio ic
on e.cd_estabelecimento = ic.cd_estabelecimento
inner join t_cpp_categoria cat
on e.cd_estabelecimento = cat.cd_estabelecimento
where e.cd_estabelecimento = 3 and cat.nm_categoria = 'Prato';



--selecionar todos os itens de algum pedido

select p.cd_pedido, ic.ds_item_cardapio, ic.vl_item_cardapio 
from t_cpp_pedido_item_cardapio pic inner join t_cpp_item_cardapio ic 
on pic.cd_item_cardapio = ic.cd_item_cardapio
inner join t_cpp_pedido p
on pic.cd_pedido = p.cd_pedido
where pic.cd_pedido = 6;

-- Comanda do pedido 3
select pic.cd_pedido,
       ic.nm_item_cardapio,
       p.hr_pedido,
       ic.ds_item_cardapio,
       ic.vl_item_cardapio,
       e.nm_fantasia
from t_cpp_pedido_item_cardapio pic
    inner join t_cpp_item_cardapio ic
        on pic.cd_item_cardapio = ic.cd_item_cardapio
    inner join t_cpp_pedido p
        on pic.cd_pedido = p.cd_pedido
    inner join t_cpp_estabelecimento e
        on p.cd_estabelecimento = e.cd_estabelecimento
where pic.cd_pedido = 3;

--Query que envolve todas as tabelas, buscando as informa��es do estabelecimento, o gerente, e todas as avalia��es que os clientes fizeram dos pratos que quiseram avaliar.
SELECT E.cd_estabelecimento
,E.nm_fantasia
,G.nm_gerente
,A.nr_experiencia
,C.nm_cliente
,IC.nm_item_cardapio
,IC.ds_item_cardapio
,IC.vl_item_cardapio
,CAT.nm_categoria
FROM T_CPP_ESTABELECIMENTO E
INNER JOIN T_CPP_GERENTE G
ON G.cd_gerente = E.cd_gerente
INNER JOIN T_CPP_AVALIACAO A
ON E.cd_estabelecimento = A.cd_estabelecimento
INNER JOIN T_CPP_CLIENTE C
ON C.cd_cliente = A.cd_cliente
INNER JOIN T_CPP_ITEM_CARDAPIO IC
ON IC.cd_estabelecimento = E.cd_estabelecimento
INNER JOIN T_CPP_CATEGORIA CAT
on E.cd_estabelecimento = CAT.cd_estabelecimento
WHERE E.cd_estabelecimento = 1
order by IC.nm_item_cardapio;


-- Relat�rio simples com GROUP BY envolvendo duas ou mais tabelas.

--Calcular a m�dia de avalia��es de algum estabelecimento
select e.nm_fantasia, avg(a.nr_experiencia) as Nota
from t_cpp_estabelecimento e inner join t_cpp_avaliacao a
on e.cd_estabelecimento = a.cd_estabelecimento
where e.cd_estabelecimento = 3
group by nm_fantasia;


--pega os itens de determinado pedido
select count(ic.nm_item_cardapio) as  TotalItens,
       p.vl_total_pedido,
       p.cd_pedido
from t_cpp_pedido p
inner join t_cpp_pedido_item_cardapio pic
on p.cd_pedido = pic.cd_pedido
inner join t_cpp_item_cardapio ic
on ic.cd_item_cardapio = pic.cd_item_cardapio
where p.cd_pedido = 2
group by  p.vl_total_pedido, p.cd_pedido;


--Total de avaliacao de cada estabelecimento
select e.nm_fantasia, count(a.nr_experiencia) as "Total de Experi�ncias"
from t_cpp_avaliacao a
inner join t_cpp_estabelecimento e
on e.cd_estabelecimento = a.cd_estabelecimento
inner join t_cpp_cliente c
on c.cd_cliente = a.cd_cliente
group by e.nm_fantasia, a.nr_experiencia;


--Total de avalia��o de cada estabelecimento com cada pessoa que avaliou, ordenado pelo nome dos estabelecimentos
select e.cd_estabelecimento, e.nm_fantasia, count(a.nr_experiencia) as "Total de Experi�ncias", c.nm_cliente
from t_cpp_avaliacao a
inner join t_cpp_estabelecimento e
on e.cd_estabelecimento = a.cd_estabelecimento
inner join t_cpp_cliente c
on c.cd_cliente = a.cd_cliente
group by e.cd_estabelecimento, e.nm_fantasia, a.nr_experiencia, c.nm_cliente
order by e.nm_fantasia;



--Ver o total de categorias que cada restaurante tem registrado
SELECT e.cd_estabelecimento, e.nm_fantasia, count(cat.cd_categoria) as "Total de categorias do estabelecimento"
FROM t_cpp_estabelecimento e
inner join t_cpp_categoria cat
on e.cd_estabelecimento = cat.cd_estabelecimento
GROUP BY e.cd_estabelecimento, e.nm_fantasia;


--Ver o nome de todas as categorias registradas por um restaurante espec�fico
SELECT e.cd_estabelecimento, e.nm_fantasia, cat.nm_categoria 
FROM t_cpp_estabelecimento e
inner join t_cpp_categoria cat
on e.cd_estabelecimento = cat.cd_estabelecimento
where e.cd_estabelecimento = 2;


--Ver todos os restaurantes que cont�m algum tipo espec�fico de categoria
SELECT e.cd_estabelecimento, e.nm_fantasia, cat.nm_categoria 
FROM t_cpp_estabelecimento e
inner join t_cpp_categoria cat
on e.cd_estabelecimento = cat.cd_estabelecimento
where cat.nm_categoria = 'Sobremesa';



--Ver todos os itens do card�pio de algum restaurante, que s�o de determinada categoria.
SELECT ic.cd_item_cardapio, cat.nm_categoria, ic.nm_item_cardapio, e.nm_fantasia, e.cd_estabelecimento
FROM t_cpp_item_cardapio ic
INNER JOIN t_cpp_estabelecimento e
on ic.cd_estabelecimento = e.cd_estabelecimento
INNER JOIN t_cpp_categoria cat
on ic.cd_categoria = cat.cd_categoria
where cat.nm_categoria = 'Sobremesa' and e.nm_fantasia = 'Churros Store';

--Pegando nome fantasia do estabelecimento e o nome e e-mail do gerente pelo c�digo do estabelecimento
SELECT E.nm_fantasia, G.nm_gerente, G.ds_email
FROM T_CPP_ESTABELECIMENTO E
INNER JOIN T_CPP_GERENTE G
ON G.cd_gerente = E.cd_gerente
WHERE E.cd_estabelecimento = 1;
 
--Pegar nome do estabelecimento da razao social e o fantasia pelo codigo do estabelecimento
SELECT   E.cd_estabelecimento
        ,E.nm_fantasia
        ,E.nm_razao_social
FROM T_CPP_ESTABELECIMENTO E
WHERE E.cd_estabelecimento = 2;
 










