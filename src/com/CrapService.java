package com;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class CrapService implements CrapServiceInterface {

	@Autowired
	private CrapDAOInterface crapDaoInterface;
	@Transactional
	public List<Crap> getCrap(){
	
		return crapDaoInterface.getCrapList();
	}
	
	public String authenticateUser(String username, String password){
		return crapDaoInterface.authenticateUser(username, password);
	}
	public String addDetails(Crap crap){
		return crapDaoInterface.addDetails(crap);
	}
	public String deleteDetails(Crap crap){
		return crapDaoInterface.deleteDetails(crap);
	}
	
	

}
