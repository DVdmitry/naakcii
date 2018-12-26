package naakcii.by.api.statistics;

import naakcii.by.api.config.ApiConfigConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/statistics"})
public class StatisticsController {

    @Autowired
    private StatisticsService statisticsService;

    @GetMapping(produces = ApiConfigConstants.API_V_2_0)
    public StatisticsDTO getStatistics() {
        return statisticsService.findCurrentStatistics();
    }
}
