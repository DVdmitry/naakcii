package naakcii.by.api.product;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import naakcii.by.api.country.Country;
import naakcii.by.api.subcategory.Subcategory;
import naakcii.by.api.unitofmeasure.UnitOfMeasure;
import naakcii.by.api.util.annotations.Barcode;
import naakcii.by.api.util.annotations.PureSize;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@NoArgsConstructor
@Setter
@Getter
@EqualsAndHashCode(exclude = {"id", "picture", "manufacturer", "brand", "countryOfOrigin"})
@Entity
@Table(name = "PRODUCT")
public class Product implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "PRODUCT_ID")
	private Long id;
	
	@Column(name = "PRODUCT_BARCODE")
	@NotNull(message = "Product's bar-code mustn't be null.")
	@Barcode
	private String barcode;
	
	@Column(name = "PRODUCT_NAME")
	@NotNull(message = "Product's name mustn't be null.")
    @PureSize(
    	min = 3, 
    	max = 100,
    	message = "Product's name '${validatedValue}' must be between '{min}' and '{max}' characters long."
    )
	private String name;
	
	@Column(name = "PRODUCT_PICTURE")
	@Size(
	    max = 255, 
	    message = "Path to the picture of the product '${validatedValue}' mustn't be more than '{max}' characters long."
	)
	private String picture;
	
	@ManyToOne
	@JoinColumn(name = "PRODUCT_UNIT_OF_MEASURE")
	@Valid
	@NotNull(message = "Product's unit of measure mustn't be null.")
	private UnitOfMeasure unitOfMeasure;
	
	@Column(name = "PRODUCT_MANUFACTURER")
	@Size(
	   	max = 50,
	   	message = "Product's manufacturer '${validatedValue}' mustn't be more than '{max}' characters long."
	)
	private String manufacturer;
	
	@Column(name = "PRODUCT_BRAND")
	@Size(
	   	max = 50,
	   	message = "Product's brand '${validatedValue}' mustn't be more than '{max}' characters long."
	)
	private String brand;
	
	@ManyToOne
	@JoinColumn(name = "PRODUCT_COUNTRY_OF_ORIGIN")
	@Valid
	private Country countryOfOrigin;
	
	@ManyToOne
	@JoinColumn(name = "SUBCATEGORY_ID")
	@NotNull(message = "Product must have subcategory.")
	@Valid
	private Subcategory subcategory;

//	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
//	private Set<
//						@Valid
//						@NotNull(message = "Product must have list of chainProducts without null elements.")
//								ChainProduct> chainProducts = new HashSet<ChainProduct>();
	
	@Column(name = "PRODUCT_IS_ACTIVE")
	@NotNull(message = "Product must have field 'isActive' defined.")
	private Boolean isActive;

	public Product(ProductDTO productDTO) {
		this.id = productDTO.getId();
		this.barcode = productDTO.getBarcode();
		this.name = productDTO.getName();
		this.picture = productDTO.getPicture();
		this.manufacturer = productDTO.getManufacturer();
		this.brand = productDTO.getBrand();
		this.isActive = productDTO.getIsActive();
	}
}
