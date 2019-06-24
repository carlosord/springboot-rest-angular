package com.practices.server.service;

import java.util.List;

import com.practices.server.dto.PersonDto;
import com.practices.server.service.exception.BusinessException;

/**
 * The Class PersonService.
 */
public interface PersonService {
		
	/**
	 * Find person by id.
	 *
	 * @param id the id
	 * @return the person dto
	 */
	public PersonDto findPersonById(Long id);

	/**
	 * Find all.
	 *
	 * @return the list
	 */
	public List<PersonDto> findAll();

	/**
	 * Find person by dni.
	 *
	 * @param dni the dni
	 * @return the person dto
	 */
	public PersonDto findPersonByDni(String dni);
	
	/**
	 * Adds the new person.
	 *
	 * @param person the person
	 * @return the person dto
	 * @throws BusinessException 
	 */
	public PersonDto addNewPerson(PersonDto person) throws BusinessException;
	
	/**
	 * Update person.
	 *
	 * @param person the person
	 * @return the person dto
	 */
	public PersonDto updatePerson(PersonDto person);
	
	/**
	 * Delete person form.
	 *
	 * @param id the id
	 */
	public void deletePersonForm(Long id);		
}
