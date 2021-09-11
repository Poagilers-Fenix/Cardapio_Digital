/*Integrantes do grupo 

Daniel Sanchez Melero - rm85109
Eric Luiz Campos Pessoa - rm86405
Giovanna de Mello Leiva - rm85817
Henrique Neves Lago - rm84549
Kaue Augusto Miranda Santos - rm85707
Larissa Alves da Silva - rm86351*/

CL SCR
SET SERVEROUTPUT ON

/*DROP FUNCTION RETORNA_RESTAURANTE;
DROP FUNCTION RETORNA_CATEGORIA;
DROP PROCEDURE CADASTRA_ITEM_CARDAPIO;
DROP SEQUENCE SEQ_ITEM_CARDAPIO;*/

/*Procedure para descobrir o código de um restaurante a partir de e-mail e senha*/
CREATE OR REPLACE FUNCTION RETORNA_RESTAURANTE (
   pEmail IN t_cpp_gerente.ds_email%TYPE,
   pSenha IN t_cpp_gerente.ds_senha%TYPE) RETURN NUMBER IS
   
   vCodEstabelecimento t_cpp_estabelecimento.cd_estabelecimento%TYPE;

BEGIN
    SELECT 
        EST.CD_ESTABELECIMENTO
    INTO
        vCodEstabelecimento
    FROM 
        T_CPP_GERENTE GER
    INNER JOIN
        T_CPP_ESTABELECIMENTO EST       ON      (EST.CD_GERENTE = GER.CD_GERENTE)
    WHERE 
        GER.DS_EMAIL = pEmail AND
        GER.DS_SENHA = pSenha;
    RETURN vCodEstabelecimento;
END RETORNA_RESTAURANTE;
/
/**/
---------TESTE-------RETORNARESTAURANTE-------------
VARIABLE v_cod_restaurante NUMBER
execute :v_cod_restaurante:= retorna_restaurante('jorge@gmail.com', 'Bananinha123')
PRINT v_cod_restaurante
------------------------------------------------------------------------

/*Função para retornar o número do código de categoria*/
CREATE OR REPLACE FUNCTION RETORNA_CATEGORIA(
    pEmail IN t_cpp_gerente.ds_email%TYPE,
    pSenha IN t_cpp_gerente.ds_senha%TYPE,
    pNomeCategoria IN t_cpp_categoria.nm_categoria%TYPE) RETURN NUMBER IS
    
    vCodCategoria t_cpp_categoria.cd_categoria%TYPE;
    
BEGIN
    SELECT 
        CD_CATEGORIA
    INTO
        vCodCategoria
    FROM
        T_CPP_CATEGORIA CAT
    INNER JOIN
        T_CPP_ESTABELECIMENTO EST       ON      (EST.CD_ESTABELECIMENTO = CAT.CD_ESTABELECIMENTO)
    WHERE
        CAT.CD_ESTABELECIMENTO = RETORNA_RESTAURANTE(pEmail, pSenha) AND
        CAT.NM_CATEGORIA = pNomeCategoria;
    RETURN vCodCategoria;
END RETORNA_CATEGORIA;
/
/**/  
-------------TESTE---------RETORNA CATEGORIA----------------------------------------------------------------------------

VARIABLE v_cod_categoria NUMBER
execute :v_cod_categoria:= retorna_categoria('jorge@gmail.com', 'Bananinha123', 'Sobremesa')
PRINT v_cod_categoria
-------------------------------------------------------------------------------------------------------------------------------------------

------------SEQUENCIA PARA A PROCEDURE DE CADASTRO DE ITENS-----------------------------------------------
CREATE SEQUENCE SEQ_ITEM_CARDAPIO
INCREMENT BY 1
START WITH  13;
    
--------------------------------------------------------------------------------------------------------------------------------------------

--Procedure para cadastrar novos itens do cardápio a partir das credenciais de e-mail e senha e do nome da categoria cadastrada para o restaurante
CREATE OR REPLACE PROCEDURE CADASTRA_ITEM_CARDAPIO(
    pEmail IN t_cpp_gerente.ds_email%TYPE DEFAULT '0',
    pSenha IN t_cpp_gerente.ds_senha%TYPE DEFAULT '0',
    pNomeCategoria IN t_cpp_categoria.nm_categoria%TYPE DEFAULT 0,
    pDestaque IN t_cpp_item_cardapio.st_destaque%TYPE DEFAULT '0',
    pNomeItem IN t_cpp_item_cardapio.nm_item_cardapio%TYPE DEFAULT '0',
    pDescItem IN t_cpp_item_cardapio.ds_item_cardapio%TYPE DEFAULT '0',
    pVItem IN t_cpp_item_cardapio.vl_item_cardapio%TYPE DEFAULT 0,
    pVCalorico IN t_cpp_item_cardapio.vl_calorico%TYPE DEFAULT 0,
    pFoto IN t_cpp_item_cardapio.fl_foto_ic%TYPE DEFAULT '0') IS
    
    e_empty exception;
    
BEGIN
    IF (pEmail = '0' OR pSenha = '0' OR pNomeCategoria= '0'  OR pNomeItem= '0' OR pDescItem= '0' OR pFoto = '0' ) OR (pVItem = 0 OR pVCalorico = 0)  THEN
        RAISE e_empty;
    END IF;
    INSERT INTO
        T_CPP_ITEM_CARDAPIO
    VALUES(
        seq_item_cardapio.NEXTVAL,
        retorna_restaurante(pEmail, pSenha),        
        retorna_categoria(pEmail, pSenha, pNomeCategoria),
        pDestaque,
        pNomeItem,
        pDescItem,
        pVItem,
        pVCalorico,
        pFoto);
 EXCEPTION
    WHEN e_empty THEN
        DBMS_OUTPUT.PUT_LINE('Não é possível inserir parâmetros vazios. Todos devem ser preenchidos.');
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Erro inespecífico! - ' || SQLCODE);
        DBMS_OUTPUT.PUT_LINE('Código do erro: ' || SQLERRM);
COMMIT;
END CADASTRA_ITEM_CARDAPIO;
/
            
-----------TESTE CADASTRA_ITEM_CARDAPIO-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
EXECUTE CADASTRA_ITEM_CARDAPIO('jorge@gmail.com' , 'Bananinha123' ,'Sobremesa','1', 'Panna Cotta','Típica sobremesa italiana com gelatina de baunilha e frutas vermelhas' , 15, 175,'https://raw.githubusercontent.com/Poagilers-Fenix/Cardapio_Digital/PannaCotta.jpg' );
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

SET SERVEROUTPUT OFF