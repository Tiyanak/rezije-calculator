package hr.farszky.rezije.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Igor Farszky on 23.9.2017..
 */
@Controller
public class RezijeController {

    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }

}
