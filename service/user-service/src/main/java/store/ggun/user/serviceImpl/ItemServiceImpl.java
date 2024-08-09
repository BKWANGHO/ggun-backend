package store.ggun.user.serviceImpl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import store.ggun.user.domain.ItemModel;
import store.ggun.user.repository.ItemRepository;
import store.ggun.user.service.ItemService;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Slf4j
@RequiredArgsConstructor
@Service
public class ItemServiceImpl implements ItemService {
    private final ItemRepository re;

    @Override
    public List<ItemModel> findByVolume() {
        return re.findByOrderByVolume();
    }

    @Override
    public List<ItemModel> findAll() {
        return re.findAll();
    }

    @Override
    public List<ItemModel> findDetail(Map<String, String> search) throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        log.info("여기는 imp" + sdf);
        String a = search.get("search");
        log.info(a);
        String b = search.get("sdate");
        log.info(b);
        Date b1 = sdf.parse(b);
        log.info(String.valueOf(b1));
        String c = search.get("edate");
        Date c1 = sdf.parse(c);
        return (re.findDetail(a, b1, c1));
    }
}