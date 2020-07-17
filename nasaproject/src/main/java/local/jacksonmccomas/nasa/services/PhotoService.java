package local.jacksonmccomas.nasa.services;

import javax.inject.Inject;

import org.springframework.stereotype.Component;

import local.jacksonmccomas.nasa.models.PhotoList;
import local.jacksonmccomas.nasa.client.NasaClient;

@Component
public class PhotoService {

	@Inject
	private NasaClient nasaClient;
	
	public PhotoList getPhotoList(final String name, final String date) {
		return nasaClient.getPhotoList(name, date);
	}

}
	

