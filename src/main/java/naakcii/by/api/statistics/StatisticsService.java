package naakcii.by.api.statistics;

import java.util.Calendar;

public interface StatisticsService {

    StatisticsDTO getCurrentStatistics();

    StatisticsDTO updateStatistics(Integer chainQuantity,
                                   Integer discountedProducts,
                                   Integer averageDiscountPercentage,
                                   Calendar creationDate);
}
