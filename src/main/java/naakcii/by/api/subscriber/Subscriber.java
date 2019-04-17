package naakcii.by.api.subscriber;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import java.io.Serializable;

@NoArgsConstructor
@Setter
@Getter
@EqualsAndHashCode(exclude = "id")
@Entity
@Table(name = "SUBSCRIBER")
public class Subscriber implements Serializable {

    private static final long serialVersionUID = -5695859545586187219L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SUBSCRIBER_ID")
    private Long id;

    @Column(name = "SUBSCRIBER_EMAIL")
    @Email(message = "Email should be valid")
    private String email;

    public Subscriber(String email) {
        this.email = email;
    }
}
