package store.ggun.alarm.domain.model;

import java.io.Serializable;
import java.time.LocalDateTime;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@NoArgsConstructor
@AllArgsConstructor
@Builder
@Setter
@Getter
@Document(collection = "chats")
public class ChatModel implements Serializable {
    @Id
    private String id;
    private String roomId;
    private String senderId;
    private String senderName;
    private String receiverId;
    private String message;
    @CreatedDate
    private LocalDateTime createdAt;

}