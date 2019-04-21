package naakcii.by.api.unitofmeasure;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface UnitOfMeasureRepository extends CrudRepository<UnitOfMeasure, Long>{

	Optional<UnitOfMeasure> findByNameIgnoreCase(String unitOfMeasureName);
}
