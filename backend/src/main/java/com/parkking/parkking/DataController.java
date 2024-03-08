package com.parkking.parkking;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class DataController {
    DataTemplate data1 = new DataTemplate(
        1,
        "Polytechnic University of the Philippines (Main)",
        false, false, false, true, false, false,
        false, true , true, false, false , true,
        14.598100399596916,
        121.01091249999999
    );
    DataTemplate data2 = new DataTemplate(
        2,
        "University of the Philippines Diliman",
        true, false, true, true, true, false,
        true, false , false, false, false , true,
        14.66076725,
        121.0657185
    );
    DataTemplate data3 = new DataTemplate(
        3,
        "University of Santo Tomas (UST)",
        true, true, true, true, true, false,
        true, true , false, false, true , false,
        14.608711,
        120.988778
    );

    DataTemplate[] data = {data1, data2, data3};

    @GetMapping(value = "/data", produces = "application/json")
    public DataTemplate[] getData() {
        return data;
    }
}

