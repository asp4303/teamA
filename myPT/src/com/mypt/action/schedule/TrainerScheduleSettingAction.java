package com.mypt.action.schedule;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mypt.controller.Action;

public class TrainerScheduleSettingAction implements Action {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String[] pt=request.getParameterValues("time");
		String[] program=request.getParameterValues("program");
		String[] proMention=request.getParameterValues("proMention");
		
		String[] date=request.getParameterValues("date");
		for(int i=0;i<5;i++) {
			System.out.println(pt[i]);
			System.out.println(program[i]);
			System.out.println(proMention[i]);
			System.out.println(date[i]);
		}
		
		return null;
	}

}
