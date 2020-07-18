package local.jacksonmccomas.nasa.controllers;

import java.util.List;

import javax.inject.Inject;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import local.jacksonmccomas.nasa.services.DatesService;

@CrossOrigin
@RestController
@RequestMapping("api/v1/")
public class DatesController {
	
	@Inject
	private DatesService datesService;
	
	@RequestMapping(value = "dates", method = RequestMethod.GET)
	public List<String> getDates() {
		return datesService.getDates();
	}

}
