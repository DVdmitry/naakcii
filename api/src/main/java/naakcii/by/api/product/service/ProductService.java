package naakcii.by.api.product.service;

import naakcii.by.api.product.service.moddelDTO.ProductDTO;

import java.util.List;

public interface ProductService {

    public List<ProductDTO> getProductsByChainIdAndSubcategoryId(Long subcategoryId);

}
