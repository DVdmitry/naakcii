package naakcii.by.api.repository.model;

import java.io.Serializable;
import java.util.Calendar;

import javax.persistence.Cacheable;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "ACTION")
@org.hibernate.annotations.Immutable
@NamedQuery(name = "Action.findAllBySubcategoryId", query = "select ac from Action ac "
			+ "left join fetch ac.chain ch "
			+ "left join fetch ac.product p "
			+ "where p.subcategory.id = :subcategoryId and :currentDate between ac.startDate and ac.endDate"
)
@Cacheable
@org.hibernate.annotations.Cache(
		usage = org.hibernate.annotations.CacheConcurrencyStrategy.NONSTRICT_READ_WRITE,
		region = "naakcii.by.repository.model.cache.Action"
)
public class Action implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1525810593299011676L;

	@Embeddable
	public static class Id implements Serializable {

		/**
		 * 
		 */
		private static final long serialVersionUID = 6978249943191744201L;

		@Column(name = "PRODUCT_ID")
		private Long productId;
		
		@Column(name = "CHAIN_ID")
		private Long chainId;
		
		public Id() {
			
		}
		
		public Id(Long productId, Long chainId) {
			this.productId = productId;
			this.chainId = chainId;
		}
		
		public boolean equals(Object o) {
			if(o != null && o instanceof Id ) {
				Id that = (Id) o;
				return this.productId.equals(that.productId) && 
						this.chainId.equals(that.chainId);
			}
			return false;
		}
		
		public int hashCode() {
			return productId.hashCode() + chainId.hashCode();
		}
		
		public Long getChainId() {
			return chainId;
		}
		
	}
	
	@EmbeddedId
	private Id id = new Id();
	
	@Column(name = "ACTION_PRICE")
	private double price;
	
	@Column(name = "ACTION_DISCOUNT")
	private int discount;
	
	@Column(name = "ACTION_DISCOUNT_PRICE")
	@NotNull
	private double discountPrice;
	
	@Column(name = "ACTION_START_DATE")
	@Temporal(TemporalType.DATE)
	private Calendar startDate;
	
	@Column(name = "ACTION_END_DATE")
	@Temporal(TemporalType.DATE)
	private Calendar endDate;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(
			name = "PRODUCT_ID",
			updatable = false,
			insertable = false
	)
	private Product product;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(
			name = "CHAIN_ID",
			updatable = false,
			insertable = false
	)
	private Chain chain;
	
	public Action() {
		
	}
	
	public Action(Product product, Chain chain, double discountPrice) {
		this.product = product;
		this.chain = chain;
		this.discountPrice = discountPrice;
		this.id.productId = product.getId();
		this.id.chainId = chain.getId();
		product.getActions().add(this);
		chain.getActions().add(this);
	}

	public Id getId() {
		return id;
	}

	public void setId(Id id) {
		this.id = id;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public Chain getChain() {
		return chain;
	}

	public void setChain(Chain chain) {
		this.chain = chain;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getDiscount() {
		return discount;
	}

	public void setDiscount(int discount) {
		this.discount = discount;
	}

	public double getDiscountPrice() {
		return discountPrice;
	}

	public void setDiscountPrice(double discountPrice) {
		this.discountPrice = discountPrice;
	}

	public Calendar getEndDate() {
		return endDate;
	}

	public void setEndDate(Calendar endDate) {
		this.endDate = endDate;
	}

	public Calendar getStartDate() {
		return startDate;
	}

	public void setStartDate(Calendar startDate) {
		this.startDate = startDate;
	}
	
}
