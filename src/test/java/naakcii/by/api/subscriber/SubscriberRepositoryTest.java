package naakcii.by.api.subscriber;

import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@TestPropertySource(locations = "classpath:application-unit-test.properties")
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class SubscriberRepositoryTest {

    @Autowired
    private SubscriberRepository subscriberRepository;

    @Autowired
    private TestEntityManager entityManager;

    @Before
    public void setUp() throws Exception {
        Subscriber firstSubscriber = new Subscriber();
        Subscriber secondSubscriber = new Subscriber();
        firstSubscriber.setEmail("firstsubscriber@gmail.com");
        secondSubscriber.setEmail("secindsubscriber@gmail.com");
        entityManager.persist(firstSubscriber);
        entityManager.persist(secondSubscriber);
        entityManager.flush();
    }

    @Test
    public void test_find_by_email() {
        Subscriber firstSubscriberByEmail = subscriberRepository.findByEmail("firstsubscriber@gmail.com");
        Subscriber secondSubscriberByEmail = subscriberRepository.findByEmail("secindsubscriber@gmail.com");
        assertThat(firstSubscriberByEmail.getEmail()).isEqualTo("firstsubscriber@gmail.com");
        assertThat(secondSubscriberByEmail.getEmail()).isEqualTo("secindsubscriber@gmail.com");
    }

    @Test
    public void test_save() {
        Subscriber subscriber = new Subscriber();
        subscriber.setEmail("subscriber@gmail.com");
        subscriberRepository.save(subscriber);
        assertThat(subscriber.getId()).isNotNull();
    }

    @Rule
    public ExpectedException thrown = ExpectedException.none();

    @Test
    public void test_incorrect_save() throws Exception {
        thrown.expect(RuntimeException.class);
        thrown.expectMessage("Email should be valid");
        Subscriber subscriber = new Subscriber();
        subscriber.setEmail("subscriber");
        subscriberRepository.save(subscriber);
    }
}