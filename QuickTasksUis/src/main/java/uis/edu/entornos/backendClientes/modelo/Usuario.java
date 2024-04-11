package uis.edu.entornos.backendClientes.modelo;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
/**
 *
 * 
 */

@Entity
@Table(name = "usuario")
public class Usuario {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idUsuario;
    
    @Column(name = "nombre", nullable = false, length = 70)
    private String nombre;
    
    @Column(name = "correo", nullable = false, length = 70)
    private String correo;
    
    @Column(name = "contraseña", nullable = false, length = 70)
    private String contraseña;
}
