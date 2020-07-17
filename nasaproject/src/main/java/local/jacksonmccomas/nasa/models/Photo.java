package local.jacksonmccomas.nasa.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Photo {

	public String id;

	@JsonProperty("earth_date") public String earthDate;
	@JsonProperty("img_src") public String imgSrc;
	public String sol;
	public Camera camera;
	public Rover rover;

	public String getId() {
		return id;
	}
	public void setId(final String id) {
		this.id = id;
	}

	public String getEarthDate() {
		return earthDate;
	}
	public void setEarthDate(final String earthDate) {
		this.earthDate = earthDate;
	}
	public String getImgSrc() {
		return imgSrc;
	}
	public void setImgSrc(final String imgSrc) {
		this.imgSrc = imgSrc;
	}
	public String getSol() {
		return sol;
	}
	public void setSol(String sol) {
		this.sol = sol;
	}
	public Camera getCamera() {
		return camera;
	}
	public void setCamera(final Camera camera) {
		this.camera = camera;
	}
	public Rover getRover() {
		return rover;
	}
	public void setRover(Rover rover) {
		this.rover = rover;
	}
}
