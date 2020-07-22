package local.jacksonmccomas.nasa.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Photo {

	public String id;

	@JsonProperty("earth_date") public String earthDate;
	@JsonProperty("img_src") public String imgSrc;
	public String sol;
	public Camera camera;
	public Rover rover;
}
