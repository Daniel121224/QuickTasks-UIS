/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package uis.edu.entornos.backendClientes.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import uis.edu.entornos.backendClientes.modelo.Equipo;

public interface IEquipoRepository extends JpaRepository<Equipo, Integer>{
    
}
