package br.com.fiap.cardapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
@Entity
public class Estabelecimento {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message="Informe o CNPJ do estabelecimento.")
	@Size(max=20, message="O CNPJ deve ter no máximo 20 caracteres.")
	private String cnpj;
	
	@NotBlank(message="Informe a razão social do estabelecimento.")
	@Size(max=50, message="Informe a razão social do estabelecimento.")
	private String razao_social;
	
	@NotBlank(message="Informe o nome fantasia do estabelecimento.")
	@Size(max=50, message="O nome fantasia deve conter no máximo 50 caracteres.")
	private String nome_fantasia;
	
	@NotBlank(message="Informe o endereço do estabelecimento.")
	private String endereco;
	
	@NotBlank(message="Informe um telefone.")
	@Size(max = 20, message="O telefone deve ter no máximo 20 caracteres.")
	private String telefone;
	
	@NotBlank(message="O e-mail não pode ficar vazio.")
	@Email(message="Insira um e-mail válido. Ex: google@gmail.com")	
	@Size(max = 40, message="O e-mail deve ter no máximo 40 caracteres.")
	private String email;
	

}
