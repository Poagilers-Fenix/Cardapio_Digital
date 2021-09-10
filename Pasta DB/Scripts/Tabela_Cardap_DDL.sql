/*

DROP SEQUENCE cdcategoria;
DROP SEQUENCE cdcliente;
DROP SEQUENCE cdestabelecimento;
DROP SEQUENCE cdavaliacao;
DROP SEQUENCE cdgerente;
DROP SEQUENCE cditemcardapio;
DROP SEQUENCE cdmesa;


DROP TABLE t_cpp_mesa CASCADE CONSTRAINTS;
DROP TABLE t_cpp_categoria CASCADE  CONSTRAINTS;
DROP TABLE t_cpp_avaliacao CASCADE CONSTRAINTS;
DROP TABLE t_cpp_cliente CASCADE CONSTRAINTS;
DROP TABLE t_cpp_estabelecimento CASCADE CONSTRAINTS;
DROP TABLE t_cpp_gerente CASCADE CONSTRAINTS;
DROP TABLE t_cpp_item_cardapio CASCADE CONSTRAINTS; 
*/

CREATE SEQUENCE cdcategoria
INCREMENT BY 1
START WITH 1
MAXVALUE 9999999
NOCYCLE;

CREATE SEQUENCE cdcliente
INCREMENT BY 1
START WITH 1
MAXVALUE 99999999  
NOCYCLE;

CREATE SEQUENCE cdestabelecimento
INCREMENT BY 1
START WITH 1
MAXVALUE 99999
NOCYCLE;

CREATE SEQUENCE cdavaliacao
INCREMENT BY 1
START WITH 1
MAXVALUE 99999999
NOCYCLE;

CREATE SEQUENCE cdgerente
INCREMENT BY 1
START WITH 1
MAXVALUE 99999
NOCYCLE;

CREATE SEQUENCE cditemcardapio
INCREMENT BY 1
START WITH 1
MAXVALUE 9999999
NOCYCLE;

CREATE SEQUENCE cdmesa
INCREMENT BY 1
START WITH 1
MAXVALUE 999999999
NOCYCLE;

CREATE TABLE t_cpp_avaliacao (
    cd_avaliacao        NUMBER(8) NOT NULL,
    cd_cliente          NUMBER(5) NOT NULL,
    cd_estabelecimento  NUMBER(3) NOT NULL,
    nr_experiencia      NUMBER(1) NOT NULL,
    ds_avaliacao        VARCHAR2(300)
);

ALTER TABLE t_cpp_avaliacao ADD CONSTRAINT t_cpp_avaliacao_pk PRIMARY KEY ( cd_avaliacao );

CREATE TABLE t_cpp_categoria (
    cd_categoria        NUMBER(7) NOT NULL,
    cd_estabelecimento  NUMBER(5) NOT NULL,
    nm_categoria        VARCHAR2(30 CHAR) NOT NULL
);

ALTER TABLE t_cpp_categoria ADD CONSTRAINT t_cpp_categoria_pk PRIMARY KEY ( cd_categoria );

CREATE TABLE t_cpp_cliente (
    cd_cliente  NUMBER(8) NOT NULL,
    nm_cliente  VARCHAR2(50) NOT NULL,
    nr_celular  CHAR(11) NOT NULL,
    ds_senha    VARCHAR2(30) NOT NULL
);

COMMENT ON COLUMN t_cpp_cliente.cd_cliente IS
    'até 99 milhões ';

COMMENT ON COLUMN t_cpp_cliente.nr_celular IS
    '(11)922332233';

ALTER TABLE t_cpp_cliente ADD CONSTRAINT t_cpp_cliente_pk PRIMARY KEY ( cd_cliente );

CREATE TABLE t_cpp_estabelecimento (
    cd_estabelecimento  NUMBER(5) NOT NULL,
    cd_gerente          NUMBER(3) NOT NULL,
    ds_cnpj             CHAR(14) NOT NULL,
    nm_razao_social     VARCHAR2(50 CHAR) NOT NULL,
    nm_fantasia         VARCHAR2(50 CHAR) NOT NULL,
    ds_endereco         VARCHAR2(100 CHAR) NOT NULL,
    nr_telefone         CHAR(11 CHAR) NOT NULL,
    ds_email            VARCHAR2(40) NOT NULL
);

ALTER TABLE t_cpp_estabelecimento ADD CONSTRAINT t_cpp_estabelecimento_pk PRIMARY KEY ( cd_estabelecimento );

CREATE TABLE t_cpp_gerente (
    cd_gerente   NUMBER(5) NOT NULL,
    nm_gerente   VARCHAR2(50) NOT NULL,
    ds_email     VARCHAR2(65) NOT NULL,
    vl_salario   NUMBER(7, 2),
    ds_endereco  VARCHAR2(150),
    ds_senha     VARCHAR2(25 CHAR) NOT NULL
);

ALTER TABLE t_cpp_gerente ADD CONSTRAINT t_cpp_gerente_pk PRIMARY KEY ( cd_gerente );

CREATE TABLE t_cpp_item_cardapio (
    cd_item_cardapio    NUMBER(7) NOT NULL,
    cd_estabelecimento  NUMBER(3) NOT NULL,
    cd_categoria        NUMBER(2) NOT NULL,
    st_destaque         CHAR(1) NOT NULL,
    nm_item_cardapio    VARCHAR2(50) NOT NULL,
    ds_item_cardapio    VARCHAR2(300) NOT NULL,
    vl_item_cardapio    NUMBER(7, 2) NOT NULL,
    vl_calorico         NUMBER(4),
    fl_foto_ic          VARCHAR2(1000)
);

COMMENT ON COLUMN t_cpp_item_cardapio.fl_foto_ic IS
    'IC = item cardapio';

ALTER TABLE t_cpp_item_cardapio ADD CONSTRAINT t_cpp_item_cardapio_pk PRIMARY KEY ( cd_item_cardapio );

CREATE TABLE t_cpp_mesa (
    id_mesa             NUMBER(9) NOT NULL,
    cd_estabelecimento  NUMBER(5) NOT NULL,
    st_mesa             VARCHAR2(25)
);

COMMENT ON COLUMN t_cpp_mesa.st_mesa IS
    'Regras a niveis de tabela. Enum.';

ALTER TABLE t_cpp_mesa ADD constraint ck_cpp_mesa CHECK ( st_mesa IN (
        'LIVRE',
        'OCUPADA',
        'RESERVADA') );

ALTER TABLE t_cpp_mesa 
    ADD CONSTRAINT t_cpp_mesa_pk PRIMARY KEY ( id_mesa ) ;

ALTER TABLE t_cpp_item_cardapio
    ADD CONSTRAINT t_cpp_categoria_fk FOREIGN KEY ( cd_categoria )
        REFERENCES t_cpp_categoria ( cd_categoria );

ALTER TABLE t_cpp_avaliacao
    ADD CONSTRAINT t_cpp_cliente_fk FOREIGN KEY ( cd_cliente )
        REFERENCES t_cpp_cliente ( cd_cliente );

ALTER TABLE t_cpp_categoria
    ADD CONSTRAINT t_cpp_estabelecimento_fk FOREIGN KEY ( cd_estabelecimento )
        REFERENCES t_cpp_estabelecimento ( cd_estabelecimento );

ALTER TABLE t_cpp_item_cardapio
    ADD CONSTRAINT t_cpp_estabelecimento_fkv2 FOREIGN KEY ( cd_estabelecimento )
        REFERENCES t_cpp_estabelecimento ( cd_estabelecimento );

ALTER TABLE t_cpp_mesa
    ADD CONSTRAINT t_cpp_estabelecimento_fkv3 FOREIGN KEY ( cd_estabelecimento )
        REFERENCES t_cpp_estabelecimento ( cd_estabelecimento );

ALTER TABLE t_cpp_avaliacao
    ADD CONSTRAINT t_cpp_estabelecimento_fkv4 FOREIGN KEY ( cd_estabelecimento )
        REFERENCES t_cpp_estabelecimento ( cd_estabelecimento );

ALTER TABLE t_cpp_estabelecimento
    ADD CONSTRAINT t_cpp_gerente_fk FOREIGN KEY ( cd_gerente )
        REFERENCES t_cpp_gerente ( cd_gerente );

COMMIT;