package uis.edu.entornos.backendClientes.modelo;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.ManyToMany;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import java.util.Set;
/**
 *
 *
 */
@Entity
@Table(name = "usuario_equipo")
public class UsuarioEquipo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToMany
    @JoinTable(name = "usuario_equipo",
               joinColumns = @JoinColumn(name = "idUsuario"),
               inverseJoinColumns = @JoinColumn(name = "idEquipo"))
    private Set<Usuario> usuarios;

    @ManyToMany
    @JoinTable(name = "usuario_equipo",
               joinColumns = @JoinColumn(name = "idEquipo"),
               inverseJoinColumns = @JoinColumn(name = "idUsuario"))
    private Set<Equipo> equipos;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Set<Usuario> getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(Set<Usuario> usuarios) {
        this.usuarios = usuarios;
    }

    public Set<Equipo> getEquipos() {
        return equipos;
    }

    public void setEquipos(Set<Equipo> equipos) {
        this.equipos = equipos;
    }
}
