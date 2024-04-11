/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package uis.edu.entornos.backendClientes.servicio;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import uis.edu.entornos.backendClientes.modelo.Usuario;
import uis.edu.entornos.backendClientes.repositorio.IUsuarioRepository;
/**
 *
 * @author roble
 */
@Service
public class UsuarioService implements IUsuarioService{

    @Autowired
    private IUsuarioRepository usuarioRepo;

    @Override
    public List<Usuario> findAll() {
        return usuarioRepo.findAll();
    }

    @Override
    public Optional<Usuario> findById(Integer id) {
        return usuarioRepo.findById(id);
    }

    @Override
    public Usuario create(Usuario usuario) {
        return usuarioRepo.save(usuario);
    }

    @Override
    public Usuario update(Usuario usuario) {
        return usuarioRepo.save(usuario);
    }

    @Override
    public void delete(Integer id) {
        usuarioRepo.deleteById(id);
    }
    
}
