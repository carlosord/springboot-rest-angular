package com.practices.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.practices.server.model.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
	
	Person findByDni(String dni);
 
}
