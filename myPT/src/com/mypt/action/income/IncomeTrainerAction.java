package com.mypt.action.income;

import java.util.ArrayList;
import java.util.Calendar;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import com.mypt.controller.Action;
import com.mypt.dao.HistoryDao;
import com.mypt.dto.HistoryDto;

public class IncomeTrainerAction implements Action{

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub		
		request.setCharacterEncoding("utf-8");
		int year = Integer.parseInt(request.getParameter("year"));
		int month = Integer.parseInt(request.getParameter("month"));
		System.out.println(year);
		HistoryDao dao = HistoryDao.getInstance();
		ArrayList<HistoryDto> arr = dao.getTrainerIncome(year,month);		
		
		JSONArray jarr = new JSONArray();
		for(HistoryDto dto: arr) {
			JSONObject obj = new JSONObject();
			obj.put("tid", dto.getTid());
			obj.put("income", dto.getIncome());
			obj.put("tname", dto.getT_name());
			jarr.add(obj);
		}
		request.setAttribute("result", jarr);
		
		
		return "callback";
		
		
	}

}
