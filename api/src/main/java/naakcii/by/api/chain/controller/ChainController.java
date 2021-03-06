package naakcii.by.api.chain.controller;

import naakcii.by.api.chain.service.ChainService;
import naakcii.by.api.chain.service.modelDTO.ChainDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping({"/chain"})
public class ChainController {

    @Autowired
    ChainService chainService;

    @GetMapping
    public List<ChainDTO> findAllStorage() {
        return chainService.findAll();
    }
}
