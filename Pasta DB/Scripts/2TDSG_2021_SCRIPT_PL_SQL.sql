/*

Integrantes do grupo 

Daniel Sanchez Melero - rm85109
Eric Luiz Campos Pessoa - rm86405
Giovanna de Mello Leiva - rm85817
Henrique Neves Lago - rm84549
Kaue Augusto Miranda Santos - rm85707
Larissa Alves da Silva - rm86351

*/

SET SERVEROUTPUT ON


--Procedure que deve ser utilzada com o retorno da name_to_code_category, descobre os itens do cardápio baseado no código da categoria e restaurante que foram informados, e retorna a lista de item.

CREATE OR REPLACE PROCEDURE lista_restaurante (
    pcodrestaurante   IN    t_cpp_estabelecimento.cd_estabelecimento%TYPE,
    pcategoria        IN    t_cpp_categoria.cd_categoria%TYPE,
    plistaitem        OUT   SYS_REFCURSOR
) IS
BEGIN
    OPEN plistaitem FOR SELECT
                            nm_item_cardapio   AS "NOME",
                            ds_item_cardapio   AS "ITEM",
                            vl_item_cardapio   AS "VALOR",
                            vl_calorico        AS "CALORIAS",
                            fl_foto_ic         AS "FOTOS"
                        FROM
                            t_cpp_estabelecimento   est,
                            t_cpp_item_cardapio     ica,
                            t_cpp_categoria         cat
                        WHERE
                            ica.cd_estabelecimento = est.cd_estabelecimento
                            AND ica.cd_categoria = cat.cd_categoria
                            AND est.cd_estabelecimento = pcodrestaurante
                            AND cat.cd_categoria = pcategoria;
EXCEPTION
    WHEN OTHERS THEN
        dbms_output.put_line('Erro inespecífico! - ' || sqlcode);
        dbms_output.put_line('Código do erro: ' || sqlerrm);
END;
/



--Procedure para descobrir o código de uma categoria de itens de um determinado restaurante a partir do nome da categoria, para ser utilizado na procedure lista_restaurante

CREATE OR REPLACE PROCEDURE name_to_code_category (
    pnomecategoria IN t_cpp_categoria.nm_categoria%TYPE,
    pcodrestaurante IN t_cpp_estabelecimento.cd_estabelecimento%TYPE,
    pcodcategoria OUT t_cpp_categoria.cd_categoria%TYPE
) IS
BEGIN
    select 
        cd_categoria
    into
        pcodcategoria
    from 
        t_cpp_categoria cat, t_cpp_estabelecimento est
    where 
        cat.cd_estabelecimento = est.cd_estabelecimento
        and est.cd_estabelecimento = pcodrestaurante
        and cat.nm_categoria = pnomecategoria;
EXCEPTION
    WHEN OTHERS THEN
        dbms_output.put_line('Erro inespecífico! - ' || sqlcode);
        dbms_output.put_line('Código do erro: ' || sqlerrm);
END;
/




--Procedure para pegar todos os itens de um restaurante que estão com a opção de destaque. Essa procedure não precisa passar pela name_to_code_category

CREATE OR REPLACE PROCEDURE destaque_por_restaurante (
    pcodrestaurante IN t_cpp_estabelecimento.cd_estabelecimento%TYPE,
    plistaitem OUT SYS_REFCURSOR
    )IS
    BEGIN
    OPEN plistaitem FOR SELECT DISTINCT
                            nm_item_cardapio   AS "NOME",
                            ds_item_cardapio   AS "ITEM",
                            vl_item_cardapio   AS "VALOR",
                            vl_calorico        AS "CALORIAS",
                            fl_foto_ic         AS "FOTOS"
                        FROM
                            t_cpp_estabelecimento   est,
                            t_cpp_item_cardapio     ica,
                            t_cpp_categoria         cat
                        WHERE
                            ica.cd_estabelecimento = est.cd_estabelecimento
                            AND est.cd_estabelecimento = pcodrestaurante
                            AND ica.st_destaque = '1';
EXCEPTION
    WHEN OTHERS THEN
        dbms_output.put_line('Erro inespecífico! - ' || sqlcode);
        dbms_output.put_line('Código do erro: ' || sqlerrm);
END;
/
