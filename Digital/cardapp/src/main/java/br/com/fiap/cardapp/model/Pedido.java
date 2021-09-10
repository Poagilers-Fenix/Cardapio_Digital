package br.com.fiap.cardapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
@Entity
public class Pedido {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Double valor;
	
	@NotBlank(message="Informe o status do pedido. Ex: Recebido.")
	private String status;
	
	@NotBlank(message="Informe a hora do pedido.")
	private String hora;
}
