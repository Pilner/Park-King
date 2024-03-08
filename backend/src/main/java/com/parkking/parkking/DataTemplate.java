package com.parkking.parkking;

public class DataTemplate {
    private long location_id = 0;
    private String location = "";
    private boolean[] parkSlots = new boolean[12];
    private double latitude = 0;
    private double longitude = 0;

    public DataTemplate(long location_id, String location, boolean a1, boolean a2, boolean a3, boolean a4, boolean a5, boolean a6, boolean a7, boolean a8, boolean a9, boolean a10, boolean a11, boolean a12, double latitude, double longitude) {
        setLocation_id(location_id);
        setLocation(location);
        setParkSlots(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
        setLatitude(latitude);
        setLongitude(longitude);
    }
    
    public void setLocation_id(long location_id) {
        this.location_id = location_id;
    }

    public long getLocation_id() {
        return location_id;
    }
    
    public void setLocation(String location) {
        this.location = location;
    }
    public String getLocation() {
        return this.location;
    }

    public void setParkSlots(boolean a1, boolean a2, boolean a3, boolean a4, boolean a5, boolean a6, boolean a7, boolean a8, boolean a9, boolean a10, boolean a11, boolean a12) {
        this.parkSlots[0] = a1;
        this.parkSlots[1] = a2;
        this.parkSlots[2] = a3;
        this.parkSlots[3] = a4;
        this.parkSlots[4] = a5;
        this.parkSlots[5] = a6;
        this.parkSlots[6] = a7;
        this.parkSlots[7] = a8;
        this.parkSlots[8] = a9;
        this.parkSlots[9] = a10;
        this.parkSlots[10] = a11;
        this.parkSlots[11] = a12;
    }
    public boolean[] getParkSlots() {
        return this.parkSlots;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }
    public double getLatitude() {
        return this.latitude;
    }
    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }
    public double getLongitude() {
        return this.longitude;
    }
}
