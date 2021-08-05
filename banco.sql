CREATE DATABASE consulta
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

CREATE TABLE IF NOT EXISTS public.usuarios
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ) PRIMARY KEY,
    nome "char"[] NOT NULL,
    usuario "char"[] NOT NULL,
    senha "char"[] NOT NULL
)

TABLESPACE pg_default;

ALTER TABLE public.usuarios
    OWNER to postgres;

INSERT INTO public.usuarios(
	id, nome, senha)
	VALUES (?, "admin", "admin");

CREATE TABLE IF NOT EXISTS public.pacientes
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ) PRIMARY KEY,
    nome "char"[],
    email "char"[],
    telefone "char"[],
    cpf "char"[],
    celular "char"[],
    "dtNascimento" "char"[],
    sexo "char"[],
    rua "char"[],
    cep "char"[],
    "numCasa" "char"[],
    complemento "char"[],
    bairro "char"[],
    cidade "char"[]
)

TABLESPACE pg_default;

ALTER TABLE public.pacientes
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public.medicos
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ) PRIMARY KEY,
    nome "char"[],
    crm integer,
    estado "char"[],
    cpf "char"[],
    telefone "char"[],
    email "char"[],
    celular "char"[],
    "dtNascimento" "char"[],
    cbos "char"[],
    sexo "char"[]
)

TABLESPACE pg_default;

ALTER TABLE public.medicos
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public.consultas
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ) PRIMARY KEY,
    "idPaciente" integer NOT NULL ,
    "idMedico" integer NOT NULL ,
    data "char"[] NOT NULL ,
    hora "char"[] NOT NULL,
    FOREIGN KEY idPaciente REFERENCES pacientes (id),
    FOREIGN KEY idMedico REFERENCES medico (id),
)

TABLESPACE pg_default;

ALTER TABLE public.consultas
    OWNER to postgres;