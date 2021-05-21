/*
DROP TABLE t_cpp_avaliacao CASCADE CONSTRAINTS;
DROP TABLE t_cpp_cliente CASCADE CONSTRAINTS;
DROP TABLE t_cpp_estabelecimento CASCADE CONSTRAINTS;
DROP TABLE t_cpp_gerente CASCADE CONSTRAINTS;
DROP TABLE t_cpp_item_cardapio CASCADE CONSTRAINTS; 
DROP TABLE t_cpp_pedido CASCADE CONSTRAINTS;
DROP TABLE t_cpp_pedido_item_cardapio CASCADE CONSTRAINTS; 
*/

CREATE TABLE t_cpp_avaliacao (
    cd_avaliacao        NUMBER(4) NOT NULL,
    cd_cliente          NUMBER(5) NOT NULL,
    cd_estabelecimento  NUMBER(3) NOT NULL,
    nr_experiencia      NUMBER(1) NOT NULL,
    ds_avaliacao        VARCHAR2(300)
);

ALTER TABLE t_cpp_avaliacao ADD CONSTRAINT t_cpp_avaliacao_pk PRIMARY KEY ( cd_avaliacao );

CREATE TABLE t_cpp_cliente (
    cd_cliente  NUMBER(5) NOT NULL,
    nm_cliente  VARCHAR2(50) NOT NULL,
    nr_celular  CHAR(11) NOT NULL,
    ds_senha    VARCHAR2(30) NOT NULL
);

COMMENT ON COLUMN t_cpp_cliente.cd_cliente IS
    'até dez mil';

COMMENT ON COLUMN t_cpp_cliente.nr_celular IS
    '(11)922332233';

ALTER TABLE t_cpp_cliente ADD CONSTRAINT t_cpp_cliente_pk PRIMARY KEY ( cd_cliente );

CREATE TABLE t_cpp_estabelecimento (
    cd_estabelecimento  NUMBER(3) NOT NULL,
    cd_gerente          NUMBER(3) NOT NULL,
    nm_estabelecimento  VARCHAR2(50) NOT NULL,
    ds_cnpj             CHAR(14) NOT NULL
);

ALTER TABLE t_cpp_estabelecimento ADD CONSTRAINT t_cpp_estabelecimento_pk PRIMARY KEY ( cd_estabelecimento );

CREATE TABLE t_cpp_gerente (
    cd_gerente   NUMBER(3) NOT NULL,
    nm_gerente   VARCHAR2(50) NOT NULL,
    ds_email     VARCHAR2(65) NOT NULL,
    vl_salario   NUMBER(7, 2) NOT NULL,
    ds_endereco  VARCHAR2(150) NOT NULL
);

ALTER TABLE t_cpp_gerente ADD CONSTRAINT t_cpp_gerente_pk PRIMARY KEY ( cd_gerente );

CREATE TABLE t_cpp_item_cardapio (
    cd_item_cardapio    NUMBER(4) NOT NULL,
    cd_estabelecimento  NUMBER(3) NOT NULL,
    nr_destaque         CHAR(1) NOT NULL,
    nm_item_pedido      VARCHAR2(50) NOT NULL,
    ds_item_cardapio    VARCHAR2(300) NOT NULL,
    vl_item_cardapio    NUMBER(7, 2) NOT NULL,
    ds_ingrendientes    VARCHAR2(300) NOT NULL,
    ds_categoria        VARCHAR2(15) NOT NULL,
    vl_calorico         NUMBER(4),
    qt_item_cardapio    NUMBER(3) NOT NULL
);

ALTER TABLE t_cpp_item_cardapio ADD constraint t_cpp_item_cardapio_ck CHECK ( ds_categoria IN (
    'PRATO',
    'BEBIDA',
    'APERITIVO',
    'SOBREMESA',
    'LANCHE'
))
;
ALTER TABLE t_cpp_item_cardapio ADD CONSTRAINT t_cpp_item_cardapio_pk PRIMARY KEY ( cd_item_cardapio );

CREATE TABLE t_cpp_pedido (
    cd_pedido           NUMBER(4) NOT NULL,
    cd_cliente          NUMBER(5) NOT NULL,
    cd_estabelecimento  NUMBER(3) NOT NULL,
    vl_total_pedido     NUMBER(8, 2) NOT NULL,
    st_pedido           VARCHAR2(15 CHAR) NOT NULL,
    hr_pedido           DATE NOT NULL
);

ALTER TABLE t_cpp_pedido ADD constraint t_cpp_pedido_ck_1 CHECK ( st_pedido IN (
    'RECEBIDO',
    'EM PREPARO',
    'ENTREGUE',
    'PAGO' ))
;
ALTER TABLE t_cpp_pedido ADD CONSTRAINT t_cpp_pedido_pk PRIMARY KEY ( cd_pedido );

CREATE TABLE t_cpp_pedido_item_cardapio (
    cd_item_cardapio  NUMBER(4) NOT NULL,
    cd_pedido         NUMBER(4) NOT NULL
);

ALTER TABLE t_cpp_pedido
    ADD CONSTRAINT t_cpp_cliente_fk FOREIGN KEY ( cd_cliente )
        REFERENCES t_cpp_cliente ( cd_cliente );

ALTER TABLE t_cpp_avaliacao
    ADD CONSTRAINT t_cpp_cliente_fkv2 FOREIGN KEY ( cd_cliente )
        REFERENCES t_cpp_cliente ( cd_cliente );

ALTER TABLE t_cpp_item_cardapio
    ADD CONSTRAINT t_cpp_estabelecimento_fk FOREIGN KEY ( cd_estabelecimento )
        REFERENCES t_cpp_estabelecimento ( cd_estabelecimento );

ALTER TABLE t_cpp_avaliacao
    ADD CONSTRAINT t_cpp_estabelecimento_fkv2 FOREIGN KEY ( cd_estabelecimento )
        REFERENCES t_cpp_estabelecimento ( cd_estabelecimento );

ALTER TABLE t_cpp_pedido
    ADD CONSTRAINT t_cpp_estabelecimento_fkv3 FOREIGN KEY ( cd_estabelecimento )
        REFERENCES t_cpp_estabelecimento ( cd_estabelecimento );

ALTER TABLE t_cpp_estabelecimento
    ADD CONSTRAINT t_cpp_gerente_fk FOREIGN KEY ( cd_gerente )
        REFERENCES t_cpp_gerente ( cd_gerente );

ALTER TABLE t_cpp_pedido_item_cardapio
    ADD CONSTRAINT t_cpp_item_cardapio_fk FOREIGN KEY ( cd_item_cardapio )
        REFERENCES t_cpp_item_cardapio ( cd_item_cardapio );

ALTER TABLE t_cpp_pedido_item_cardapio
    ADD CONSTRAINT t_cpp_pedido_fk FOREIGN KEY ( cd_pedido )
        REFERENCES t_cpp_pedido ( cd_pedido );


COMMIT;