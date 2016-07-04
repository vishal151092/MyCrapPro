package com;


import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;



@Controller
public class CrapController {
	@Autowired 
	private CrapServiceInterface crapServiceInterface;
	List<Crap> crapList = new ArrayList<Crap>();
	@RequestMapping(value="getData.do", method=RequestMethod.GET)
	public @ResponseBody List<Crap> listCrap()
	{
		System.out.println("hello ctrl");
		crapList=crapServiceInterface.getCrap();
		return crapList;
	}
	
	@RequestMapping(value="addDetails.do", method=RequestMethod.POST)
	public @ResponseBody String addDetails(HttpSession session, @RequestBody Crap crap) throws Exception{
		
		String r= crapServiceInterface.addDetails(crap);
		return r;
		
	}
	
	@RequestMapping(value="deleteDetails.do", method=RequestMethod.POST)
	public @ResponseBody String deleteDetails(HttpSession session, @RequestBody Crap crap) throws Exception{
		System.out.println("*****************in ctrl***************************");
		String r= crapServiceInterface.deleteDetails(crap);
		return r;
		
	}
	
	@RequestMapping(value ="getsession.do", method = RequestMethod.POST)
	@ResponseBody
	public String login(HttpSession session, @RequestBody String[] data) throws Exception {
		String username=data[0];
		String password=data[1];
		
		System.out.println(username);
	    String res= crapServiceInterface.authenticateUser(username, password);
	   /* if(member!=null) {
	       // session.setAttribute("MEMBER", member);
	    } else {
	        throw new Exception("Invalid username or password");
	    }
	   */ 
	    return res;
	}
	
	
	@RequestMapping(value ="fileUpload.do", method = RequestMethod.POST)
	@ResponseBody
	public String fileUpload(@ModelAttribute("uploadForm") FileUpload uploadForm,Model map) {
		MultipartFile multipartFile = uploadForm.getFile();
		String fileName = "";
		 if (multipartFile != null) {
			 fileName = multipartFile.getOriginalFilename();
		 }
		 map.addAttribute("files", fileName);
		 return "file_upload_success";





	}
	
	@RequestMapping(value="/sendEmail",method=RequestMethod.POST)
	@ResponseBody public String sendEmail(@RequestBody Crap emailDTO){
		System.out.println("inside email controller");
		String host="172.17.9.236" ;
		String port="25";
		final String userName="prime";
		final String password="platform12#";
		String fromAddress="Sender.Test@tcsdev.com";
		String toAddress="Receiver.Test@tcsdev.com";
		
		String subject="My mail";
		
        Properties properties = new Properties();
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", port);
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");
        
        Authenticator auth = new Authenticator() {
            public PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(userName, password);
            }
        };

        Session session = Session.getInstance(properties, auth);

        // creates a new e-mail message
        try{
        	MimeMessage msg = new MimeMessage(session);

       // msg.setFrom(new InternetAddress(userName));
        msg.setFrom(new InternetAddress(fromAddress));
        InternetAddress[] toAddresses = { new InternetAddress(toAddress) };
        msg.setRecipients(Message.RecipientType.TO, toAddresses);
        msg.setSubject(subject);
        msg.setSender(new InternetAddress("admin@tcsdev.com"));
       // msg.setSentDate(new Date());
        // set plain text message
        msg.setContent("<p>this is sample email</p>", "text/html");

        // sends the e-mail
        Transport.send(msg);
        return "success";
        }catch(MessagingException e)
        {
        	throw new RuntimeException(e);
        }
	}
	

	
	
	

}
