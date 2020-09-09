package com.mypt.action.move;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mypt.controller.Action;
import com.mypt.dao.UserDao;
import com.mypt.dto.UserDto;

public class MoveSchedule implements Action {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String id=request.getParameter("id");
		UserDao dao=UserDao.getInstance();
		UserDto dto=dao.getUserById(id);
		
		request.setAttribute("user", dto);
		return "trainer/schedule";
	}

}
