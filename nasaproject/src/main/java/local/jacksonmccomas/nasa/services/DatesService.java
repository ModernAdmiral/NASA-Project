package local.jacksonmccomas.nasa.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class DatesService {
	
	private List<String> dateList = new ArrayList<String>();
	
	public List<String> getDates() {
		return dateList;
	}
}
