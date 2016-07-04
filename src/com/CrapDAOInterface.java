package com;

import java.util.List;

public interface CrapDAOInterface {
	List<Crap> getCrapList();
	String authenticateUser(String username, String password);
	String addDetails(Crap crap);
	String deleteDetails(Crap crap);

}
