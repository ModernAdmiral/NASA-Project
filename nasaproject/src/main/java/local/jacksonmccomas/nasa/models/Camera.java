package local.jacksonmccomas.nasa.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Camera {
	
	public String id;
	public String name;
	@JsonProperty("full_name")
	public String fullName;

	public String getId() {
		return id;
	}
	public void setId(final String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(final String name) {
		this.name = name;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(final String fullName) {
		this.fullName = fullName;
	}
}
