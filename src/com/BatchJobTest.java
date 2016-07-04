package com;

import java.util.Date;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class BatchJobTest {

	
	@Scheduled(fixedDelay = 9000)

	public void demoServiceMethod()
	{
		//System.out.println("Method executed at every 9 seconds. Current time is :: "+ new Date());
	}

}
