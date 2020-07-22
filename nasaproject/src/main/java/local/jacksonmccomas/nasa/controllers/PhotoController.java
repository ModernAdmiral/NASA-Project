package local.jacksonmccomas.nasa.controllers;
import javax.inject.Inject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import local.jacksonmccomas.nasa.models.PhotoList;
import local.jacksonmccomas.nasa.services.PhotoService;

@CrossOrigin
@RestController
@RequestMapping("api/v1/")
public class PhotoController {
	
	@Inject
	private PhotoService photoService;
	
	@RequestMapping(value = "rovers/{name}/photos", method = RequestMethod.GET)
	public PhotoList getRoverPhotos(@PathVariable String name, @RequestParam("earth_date") String date) {
		return photoService.getPhotoList(name, date);
	}


}
