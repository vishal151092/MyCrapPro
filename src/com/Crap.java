package com;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.SequenceGenerator;

import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="crap_table")

public class Crap {
	@Id
	 @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "etailerRaw_seq")
@SequenceGenerator(name = "etailerRaw_seq", sequenceName = "PRODUCT_ID_SEQ")
	@Column(name="id")
	int id;
	@Column(name="name")
	String name;
	@Column(name="address")
	String address;
	public String getName() {
		return name;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}

}
