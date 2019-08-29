package com.practices.server.presentation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.practices.server.dto.PersonDto;
import com.practices.server.presentation.front.Url;
import com.practices.server.service.PersonService;
import com.practices.server.service.exception.BusinessException;

/**
 * The Class PersonController.
 */
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/people")
public class PersonController {
		
	/** The person repository. */
	@Autowired
	private PersonService personService;
	
	/**
	 * Show all.
	 *
	 * @param model the model
	 * @return the string
	 */
	@GetMapping(Url.API_PEOPLE_ALL)
	public ResponseEntity<List<PersonDto>> showAll() {
		
		// Return all people
		return new ResponseEntity<>(personService.findAll(), HttpStatus.OK);
		
	}

	/**
	 * Adds the new person.
	 *
	 * @param model the model
	 * @param personForm the person form
	 * @param bindingResult the binding result
	 * @return the string
	 */
	@PostMapping(Url.API_PEOPLE_NEW)
	public ResponseEntity<PersonDto> addNewPerson(@RequestBody PersonDto person) {
		
		try {
			
			// Add new person to db and return
			return new ResponseEntity<>(personService.addNewPerson(person), HttpStatus.OK);
			
		} catch (BusinessException b) {
			
			// Return an error
			return ResponseEntity.badRequest().build();
		}
		
	}

	/**
	 * Update person.
	 *
	 * @param model the model
	 * @param personForm the person form
	 * @param bindingResult the binding result
	 * @return the string
	 */
	@PutMapping(Url.API_PEOPLE_EDIT)
	public ResponseEntity<PersonDto> updatePerson(@RequestBody PersonDto person) {

		try {
			
			// Add new person to db and return
			return new ResponseEntity<>(personService.updatePerson(person), HttpStatus.OK);
			
		} catch (Exception b) {
			
			// Return an error
			return ResponseEntity.badRequest().build();
		}
		
	}
	
	/**
	 * Delete person form.
	 *
	 * @param id the id
	 * @param model the model
	 * @return the string
	 */
	@DeleteMapping(Url.API_PEOPLE_DELETE + "/{id}")
	public ResponseEntity<PersonDto> deletePersonForm(@PathVariable("id") Long id) {

		// Delete the person
		personService.deletePersonForm(id);
		
		// Return home view
		return ResponseEntity.accepted().build();

	}
		
}
