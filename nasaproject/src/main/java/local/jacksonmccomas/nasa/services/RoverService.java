package local.jacksonmccomas.nasa.services;

import javax.inject.Inject;

import org.springframework.stereotype.Component;

import local.jacksonmccomas.nasa.models.RoverList;
import local.jacksonmccomas.nasa.client.NasaClient;

@Component
public class RoverService {
	
	@Inject
	private NasaClient nasaClient;
	
	public RoverList getRoverList() {
		return nasaClient.getRoverList();
	}

}
