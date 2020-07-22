package local.jacksonmccomas.nasa.client;

import java.io.InputStream;
import java.util.logging.Logger;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.core.Feature;
import javax.ws.rs.core.MediaType;

import org.glassfish.jersey.client.ClientConfig;
import org.glassfish.jersey.jackson.internal.jackson.jaxrs.json.JacksonJaxbJsonProvider;
import org.glassfish.jersey.jackson.internal.jackson.jaxrs.json.JacksonJsonProvider;
import org.glassfish.jersey.logging.LoggingFeature;
import org.glassfish.jersey.logging.LoggingFeature.Verbosity;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.DeserializationFeature;
import local.jacksonmccomas.nasa.models.PhotoList;
import local.jacksonmccomas.nasa.models.RoverList;

@Component
public class NasaClient<RedirectFilterWorkAround> {
	private static final String uri = "https://api.nasa.gov/mars-photos/api/v1";
	private static final String apiKey = "u5aqcf82GPi44mlcBugzBhiNPVNRKieY886mNbHD";
	private static final String apiKeyLabel = "api_key";
	private static final String earthDateLabel = "earth_date";
	
	private final Feature feature = new LoggingFeature(Logger.getLogger(getClass().getName()), Verbosity.PAYLOAD_ANY);
	private final JacksonJsonProvider jacksonJsonProvider = new JacksonJaxbJsonProvider().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
	
	private Client client = ClientBuilder.newClient(new ClientConfig(jacksonJsonProvider)).register(feature);


	public RoverList getRoverList() {
		return client.target(uri + "/rovers")
				.queryParam(apiKeyLabel, apiKey)
				.request(MediaType.APPLICATION_JSON)
				.get(RoverList.class);
	}
	
	public PhotoList getPhotoList(String name, String date) {
		StringBuilder stringBuilder = new StringBuilder(uri)
			.append("/rovers/")
			.append(name)
			.append("/photos");
		return client.target(stringBuilder.toString())
				.queryParam(earthDateLabel, date)
				.queryParam(apiKeyLabel, apiKey)
				.request(MediaType.APPLICATION_JSON)
				.get(PhotoList.class);
	}
}
