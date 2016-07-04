package com;

import java.util.List;

public interface CrapServiceInterface {

	List<Crap> getCrap();
	String authenticateUser(String username,String password);
	String addDetails(Crap crap);
	String deleteDetails(Crap crap);
}
