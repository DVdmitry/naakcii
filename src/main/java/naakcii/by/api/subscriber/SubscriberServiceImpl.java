package naakcii.by.api.subscriber;

import naakcii.by.api.util.ObjectFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubscriberServiceImpl implements SubscriberService {

    private SubscriberRepository subscriberRepository;
    private ObjectFactory objectFactory;

    @Autowired
    public SubscriberServiceImpl(SubscriberRepository subscriberRepository, ObjectFactory objectFactory) {
        this.subscriberRepository = subscriberRepository;
        this.objectFactory = objectFactory;
    }

    @Override
    public SubscriberDTO save(String email) {
        Subscriber subscriberByEmail = subscriberRepository.findByEmail(email);
        SubscriberDTO returnedSubscriberDto = new SubscriberDTO();
        if (subscriberByEmail == null) {
            Subscriber subscriber = new Subscriber(email);
            subscriber = subscriberRepository.save(subscriber);
            returnedSubscriberDto = objectFactory.getInstance(SubscriberDTO.class, subscriber);
        }
        return returnedSubscriberDto;
    }
}
