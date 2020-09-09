package com.mypt.action.register;


import java.sql.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mypt.controller.Action;
import com.mypt.dao.UserDao;
import com.mypt.dto.UserDto;

public class AdminUserRegisterAction implements Action {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception 
	{
		
		UserDto dto= new UserDto();
		dto.setName(request.getParameter("userName"));
		dto.setGender(request.getParameter("gender"));

		dto.setBirth(request.getParameter("birthdate"));
		dto.setNick(request.getParameter("nickname"));
		dto.setEmail(request.getParameter("email"));
		dto.setPw(request.getParameter("password"));
		dto.setZipcode(request.getParameter("zipcode"));
		dto.setAddress(request.getParameter("address"));
		dto.setQr(request.getParameter("qrcode"));
		
		// null값 처리 //startdate를 String으로 바꿈.
		dto.setStartdate(request.getParameter("startdate"));
		
		
		dto.setTid(request.getParameter("trainer"));
		dto.setTel(request.getParameter("tel"));
		

		UserDao dao= UserDao.getInstance();		
		dao.insertUser(dto);
		
		return "redirect:userList.do";
	}

}
