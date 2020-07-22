package local.jacksonmccomas.nasa.controllers;

import javax.inject.Inject;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import local.jacksonmccomas.nasa.models.RoverList;
import local.jacksonmccomas.nasa.services.RoverService;

@CrossOrigin
@RestController
@RequestMapping("api/v1/")
public class RoverController {

	@Inject
	private RoverService roverService;
	
	@RequestMapping(value = "rovers", method = RequestMethod.GET)
	public RoverList getRovers() {
		return roverService.getRoverList();
	}
}
