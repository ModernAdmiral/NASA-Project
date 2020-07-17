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
	private static final String REST_URI = "https://api.nasa.gov/mars-photos/api/v1";
	private static final String API_KEY = "u5aqcf82GPi44mlcBugzBhiNPVNRKieY886mNbHD";
	private static final String API_KEY_PARAM_NAME = "api_key";
	private static final String EARTH_DATE_PARAM_NAME = "earth_date";
	
	private final Feature feature = new LoggingFeature(Logger.getLogger(getClass().getName()), Verbosity.PAYLOAD_ANY);
	private final JacksonJsonProvider jacksonJsonProvider = new JacksonJaxbJsonProvider().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
	
	private Client client = ClientBuilder.newClient(new ClientConfig(jacksonJsonProvider)).register(feature);


	public RoverList getRoverList() {
		return client.target(REST_URI + "/rovers")
				.queryParam(API_KEY_PARAM_NAME, API_KEY)
				.request(MediaType.APPLICATION_JSON)
				.get(RoverList.class);
	}
	
	public PhotoList getPhotoList(String name, String date) {
		StringBuilder stringBuilder = new StringBuilder(REST_URI)
			.append("/rovers/")
			.append(name)
			.append("/photos");
		return client.target(stringBuilder.toString())
				.queryParam(EARTH_DATE_PARAM_NAME, date)
				.queryParam(API_KEY_PARAM_NAME, API_KEY)
				.request(MediaType.APPLICATION_JSON)
				.get(PhotoList.class);
	}
}
