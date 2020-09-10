package com.mypt.dto;

import java.util.ArrayList;

public class CboardDto extends BoardDto 
{
	private int ref;
	private int depth;
	private int pos;
	private int like;
	private ArrayList<CommentDto> comments;
	
	public CboardDto(){}
	
	public CboardDto(ArrayList<CommentDto> comments)
	{
		this.comments = comments;
	}
	
	public int getRef() {
		return ref;
	}
	public void setRef(int ref) {
		this.ref = ref;
	}
	public int getDepth() {
		return depth;
	}
	public void setDepth(int depth) {
		this.depth = depth;
	}
	public int getPos() {
		return pos;
	}
	public void setPos(int pos) {
		this.pos = pos;
	}
	
	public int getLike() {
		return like;
	}
	public void setLike(int like) {
		this.like = like;
	}

	public ArrayList<CommentDto> getComments() {
		return comments;
	}

	public void setComments(ArrayList<CommentDto> comments) {
		this.comments = comments;
	}
	
	
	
	
}
