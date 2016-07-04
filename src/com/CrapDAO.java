package com;

import java.util.List;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
//import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
@Component
public class CrapDAO implements CrapDAOInterface {
	@Autowired 
	private SessionFactory sessionFactory;
	@SuppressWarnings("unchecked")
	@Transactional
	public List<Crap> getCrapList(){
   		return this.sessionFactory.getCurrentSession().createQuery("from Crap").list();
	}
	@Transactional
	public String authenticateUser(String username, String password){
		System.out.println("******************"+username);
		String res=null;			
	    Integer r=Integer.parseInt((String) sessionFactory.getCurrentSession().createSQLQuery("select count(*) from member_table where userid like :id and password like :pass")
				.setParameter("id", username)
				.setParameter("pass",password)
				.uniqueResult().toString());
	System.out.println("******************"+r);
	if(r==0){
		res="failure";
	}
	else{
		res="success";
	}
	
	return res;
	
	}
	@Transactional
	public String addDetails(Crap crap){
		String r= "";
		try{
			/*if(crap.getId()!=0){
				System.out.println("*****************************************************");
				sessionFactory.getCurrentSession().saveOrUpdate(crap);
				 r="updated successfully";
			}else{*/
				System.out.println("########################################################");
				 sessionFactory.getCurrentSession().saveOrUpdate(crap);
				 
				 r="success";
			/*}*/
		}catch(Exception e){
			System.out.println("Transaction failed due to :: "+e);
			r="failure";
			
		}finally{
			
		}
		return r;
		}
	
	@Transactional
	public String deleteDetails(Crap crap){
		String r= "";
		try{
			System.out.println("Transaction ********************************** ");
			String query = "DELETE FROM crap_table WHERE id :id";
			
			sessionFactory.getCurrentSession().createSQLQuery(query)
			.setParameter("id", crap.getId());
			
		
			 r="successfully deleted";
		}catch(Exception e){
			System.out.println("Transaction failed due to :: "+e);
			r="failure";
			
		}finally{
			
		}
		return r;
		}
	
	

}
