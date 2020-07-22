package local.jacksonmccomas.nasa.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Camera {
	
	public String id;
	public String name;
	@JsonProperty("full_name")
	public String fullName;
}
