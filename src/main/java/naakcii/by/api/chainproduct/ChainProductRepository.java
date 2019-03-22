package naakcii.by.api.chainproduct;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface ChainProductRepository extends CrudRepository<ChainProduct, ChainProduct.Id> {

    Optional<ChainProduct> findByStartDateAndEndDateAndBasePriceAndDiscountPriceAndTypeIdAndChainIdAndProductId(
            Calendar startDate,
            Calendar endDate,
            BigDecimal basePrice,
            BigDecimal discountPrice,
            Long typeId,
            Long chainId,
            Long productId
    );

    List<ChainProduct> findByProductIsActiveTrueAndProductSubcategoryIdAndStartDateLessThanEqualAndEndDateGreaterThanEqual(
            Long subcategoryId,
            Calendar startDateRestriction,
            Calendar endDateRestriction
    );

    List<ChainProduct> findByProductIsActiveTrueAndProductSubcategoryIdInAndStartDateLessThanEqualAndEndDateGreaterThanEqual(
            Set<Long> subcategoryIds,
            Calendar startDateRestriction,
            Calendar endDateRestriction
    );

    List<ChainProduct> findByProductIsActiveTrueAndProductSubcategoryIdInAndChainIdInAndStartDateLessThanEqualAndEndDateGreaterThanEqual(
            Set<Long> subcategoryIds,
            Set<Long> chainIds,
            Calendar startDateRestriction,
            Calendar endDateRestriction
    );

    List<ChainProduct> findByProductIsActiveTrueAndProductSubcategoryIdInAndChainIdInAndStartDateLessThanEqualAndEndDateGreaterThanEqual(
            Set<Long> subcategoryIds,
            Set<Long> chainIds,
            Calendar startDateRestriction,
            Calendar endDateRestriction,
            Pageable pageable
    );

    @Query("select avg(discountPercent) from ChainProduct")
    BigDecimal findAverageDiscountPercentage();

    List<ChainProduct> findAllByProductIsActiveTrueAndChainIsActiveTrueAndEndDateGreaterThanEqualOrderByChainName(LocalDate endDateRestriction);
    List<ChainProduct> findAllByStartDateGreaterThanEqual(LocalDate startDateRestriction);
    List<ChainProduct> findAllByProductNameContainingIgnoreCase(String name);
    List<ChainProduct> findAllByTypeId(Long chainProductTypeId);
}
