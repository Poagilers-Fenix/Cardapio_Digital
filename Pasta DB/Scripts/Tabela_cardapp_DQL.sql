set serveroutput on;

--Selects com where

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


--selects sem where

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


--Queries mais específicas


--Selecionar todos os itens do cardápio de dado estabelecimento
select e.cd_estabelecimento, e.nm_estabelecimento, ic.cd_item_cardapio, ic.nm_item_cardapio
from t_cpp_estabelecimento e  inner join t_cpp_item_cardapio ic
on e.cd_estabelecimento = ic.cd_estabelecimento
where e.cd_estabelecimento = 3;

--Selecionar pratos a partir da categoria dos itens do cardápio
select e.cd_estabelecimento, e.nm_estabelecimento, ic.cd_item_cardapio, ic.nm_item_cardapio
from t_cpp_estabelecimento e  inner join t_cpp_item_cardapio ic
on e.cd_estabelecimento = ic.cd_estabelecimento
where e.cd_estabelecimento = 3 and ic.ds_categoria = 'SOBREMESA';

select e.cd_estabelecimento, e.nm_estabelecimento, ic.cd_item_cardapio, ic.nm_item_cardapio
from t_cpp_estabelecimento e  inner join t_cpp_item_cardapio ic
on e.cd_estabelecimento = ic.cd_estabelecimento
where e.cd_estabelecimento = 3 and ic.ds_categoria = 'PRATO';

select e.cd_estabelecimento, e.nm_estabelecimento, ic.cd_item_cardapio, ic.nm_item_cardapio
from t_cpp_estabelecimento e  inner join t_cpp_item_cardapio ic
on e.cd_estabelecimento = ic.cd_estabelecimento
where e.cd_estabelecimento = 3 and ic.ds_categoria = 'BEBIDA';

select e.cd_estabelecimento, e.nm_estabelecimento, ic.cd_item_cardapio, ic.nm_item_cardapio
from t_cpp_estabelecimento e  inner join t_cpp_item_cardapio ic
on e.cd_estabelecimento = ic.cd_estabelecimento
where e.cd_estabelecimento = 3 and ic.ds_categoria = 'APERITIVO';

select e.cd_estabelecimento, e.nm_estabelecimento, ic.cd_item_cardapio, ic.nm_item_cardapio
from t_cpp_estabelecimento e  inner join t_cpp_item_cardapio ic
on e.cd_estabelecimento = ic.cd_estabelecimento
where e.cd_estabelecimento = 3 and ic.ds_categoria = 'LANCHE';




-- selecionar o item de cardápio por nome e descrição (9)

select nm_item_cardapio, ds_item_cardapio 
from t_cpp_item_cardapio
where nm_item_cardapio = 'Arroz';

--selecionar todos os itens de algum pedido

select p.cd_pedido, ic.nm_item_cardapio, ic.vl_item_cardapio 
from t_cpp_pedido_item_cardapio pic inner join t_cpp_item_cardapio ic 
on pic.cd_item_cardapio = ic.cd_item_cardapio
inner join t_cpp_pedido p
on pic.cd_pedido = p.cd_pedido
where pic.cd_pedido = 6;


-- selecionar o item de cardápio por nome e descrição 
select nm_item_cardapio, ds_item_cardapio 
from t_cpp_item_cardapio
where nm_item_cardapio = 'Arroz';


--Calcular a média de avaliações de algum estabelecimento
select e.nm_estabelecimento, avg(a.nr_experiencia) as Nota
from t_cpp_estabelecimento e inner join t_cpp_avaliacao a
on e.cd_estabelecimento = a.cd_estabelecimento
where e.cd_estabelecimento = 3
group by nm_estabelecimento;










--codigo lari kaue consetando as ever
select pic.cd_pedido,
       ic.nm_item_cardapio,
       p.hr_pedido,
       ic.ds_item_cardapio,
       ic.vl_item_cardapio,
       e.nm_estabelecimento
from t_cpp_pedido_item_cardapio pic
    inner join t_cpp_item_cardapio ic
        on pic.cd_item_cardapio = ic.cd_item_cardapio
    inner join t_cpp_pedido p
        on pic.cd_pedido = p.cd_pedido
    inner join t_cpp_estabelecimento e
        on p.cd_estabelecimento = e.cd_estabelecimento
where pic.cd_pedido = 3;


 -- select dos campos da tabela cliente
select nr_celular, ds_senha
from t_cpp_cliente;
 
--selecionar um cel específico
select nr_celular, ds_senha
from t_cpp_cliente
where nr_celular = 11960205342 and ds_senha = 123;
 
-- selecionar as colunas de estabelecimento
select cd_estabelecimento, nm_estabelecimento 
from t_cpp_estabelecimento; 
 
-- selecionar um item cardápio de acordo com o código dele e se ele está true ou false
select nr_destaque,
       cd_estabelecimento     
from t_cpp_item_cardapio
where cd_estabelecimento = 2 and nr_destaque = 't';
 
-- selecionar o status do pedido da tabela pedido
select st_pedido
from t_cpp_pedido;
 
 --selecionar colunas específicas de um pedido específico
select cd_pedido,
       st_pedido
from t_cpp_pedido
where cd_pedido = 2;
 
--pega os itens de determinado pedido
-- não tem quantidade pra saber quantos itens tem, por exemplo, pra saber se o cara pediu 2 hambúrguers iguais.
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

select * from t_cpp_pedido;
select * from t_cpp_item_cardapio;


