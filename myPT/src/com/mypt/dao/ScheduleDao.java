package com.mypt.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.mypt.connection.DBConnection;
import com.mypt.dto.ScheduleDto;

public class ScheduleDao {
	private DBConnection db;

//////////dao 싱글톤 (이)
	private static ScheduleDao instance = new ScheduleDao();

	public static ScheduleDao getInstance() {
		return instance;
	}

	private ScheduleDao() {
		db = DBConnection.getInstance();
	}

	public void scheduleInsert(ScheduleDto sd) {
		Connection con = null;
		PreparedStatement ps = null;
		try {
			con = db.getConnection();
			String sql = "insert into schedule values(?,?,?)";
			ps = con.prepareStatement(sql);
			ps.setString(1, sd.getS_id());
			ps.setString(2, sd.getS_date());
			ps.setString(3, sd.getS_time());
			ps.executeUpdate();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			db.closeConnection(null, ps, con);
		}
	}

	public ScheduleDto scheduleSelect(String s_id, String s_date) {
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		ScheduleDto sd = new ScheduleDto();
		try {
			con = db.getConnection();
			String sql = "select * from schedule where s_id=? and s_date=?";
			ps = con.prepareStatement(sql);
			ps.setString(1, s_id);
			ps.setString(2, s_date);
			rs = ps.executeQuery();
			if (rs.next()) {
				sd.setS_id(s_id);
				sd.setS_date(s_date);
				sd.setS_time(rs.getString(3));
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			db.closeConnection(rs, ps, con);
		}
		return sd;
	}

	public void ScheduleUpdate(ScheduleDto sd) {
		Connection con = null;
		PreparedStatement ps = null;
		try {
			con = db.getConnection();
			String sql = "update schedule set s_time=? where s_id=?, s_date=?";
			ps = con.prepareStatement(sql);
			ps.setString(1, sd.getS_time());
			ps.setString(2, sd.getS_id());
			ps.setString(3, sd.getS_date());
			ps.executeUpdate();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			db.closeConnection(null, ps, con);
		}
	}

	public void ScheduleDelete(String s_id, String s_date) {
		Connection con = null;
		PreparedStatement ps = null;
		try {
			con = db.getConnection();
			String sql = "delete from schedule where s_id=?,s_date=?";
			ps = con.prepareStatement(sql);
			ps.setString(1, s_id);
			ps.setString(2, s_date);
			ps.executeUpdate();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			db.closeConnection(null, ps, con);
		}
	}

}
