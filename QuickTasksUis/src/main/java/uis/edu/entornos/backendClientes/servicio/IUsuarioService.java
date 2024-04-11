/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package uis.edu.entornos.backendClientes.servicio;

import java.util.Optional;

import java.util.List;

import uis.edu.entornos.backendClientes.modelo.Usuario;

/**
 *
 * @author roble
 */
public interface IUsuarioService {
    List<Usuario> findAll();

    Optional<Usuario> findById(Integer id);

    Usuario create(Usuario usuario);

    Usuario update(Usuario usuario);

    void delete(Integer id);
}
