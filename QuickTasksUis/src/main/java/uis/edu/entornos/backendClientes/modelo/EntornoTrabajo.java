package uis.edu.entornos.backendClientes.modelo;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;

@Entity
@Table(name = "entorno_trabajo")
public class EntornoTrabajo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idEntorno;

    @Column(name = "nombre_tarea", nullable = false, length = 100)
    private String nombreTarea;

    @Column(name = "descripcion_tarea", nullable = false, length = 255)
    private String descripcionTarea;

    @Column(name = "clasificacion_tarea", nullable = false, length = 50)
    private String clasificacionTarea;

    @ManyToOne
    @JoinColumn(name = "idEquipo", referencedColumnName = "idEquipo")
    private Equipo equipo;

    public Integer getIdEntorno() {
        return idEntorno;
    }

    public void setIdEntorno(Integer idEntorno) {
        this.idEntorno = idEntorno;
    }

    public String getNombreTarea() {
        return nombreTarea;
    }

    public void setNombreTarea(String nombreTarea) {
        this.nombreTarea = nombreTarea;
    }

    public String getDescripcionTarea() {
        return descripcionTarea;
    }

    public void setDescripcionTarea(String descripcionTarea) {
        this.descripcionTarea = descripcionTarea;
    }

    public String getClasificacionTarea() {
        return clasificacionTarea;
    }

    public void setClasificacionTarea(String clasificacionTarea) {
        this.clasificacionTarea = clasificacionTarea;
    }

    public Equipo getEquipo() {
        return equipo;
    }

    public void setEquipo(Equipo equipo) {
        this.equipo = equipo;
    }
}
