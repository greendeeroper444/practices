function getNotificationMessages(notifications) {
    //step 1: transform to messages using map
    const messages = notifications.map(notification => {
        //ternary operator
        // const status = notification.isRead ? 'read' : 'unread';

        //if else
        let status;
        if (notification.isRead) {
            status = 'read';
        } else {
            status = 'unread';
        }
        return `🔔 Notification ${notification.id}: "${notification.message}" is ${status}.`;
    });
    console.log('Messages: ', messages)

    //step 2: loop again to do some additional side logic
    let unreadCount = 0;
    let readCount = 0;
    for (let i = 0; i < notifications.length; i++) {
        //(notifications[i].isRead) and (notifications[i].isRead === true) are same condition
        //(!notifications[i].isRead) and (notifications[i].isRead === false) are same condition 
        //because if !true = false, and !false = true
        if (notifications[i].isRead === true) {
            console.log(`Notification ${notifications[i].id}`, notifications[i].isRead)
            readCount++;
        } else {
            unreadCount++;
            console.log(`Notification ${notifications[i].id}`, notifications[i].isRead)
        }
    }

    // console.log(`📌 Total unread notifications: ${unreadCount}`);
    // return messages;
    console.log("📩 Notification Messages:");
    messages.forEach(msg => console.log(msg));
    console.log(`\n📌 Total unread notifications: ${unreadCount}`);
    console.log(`\n📌 Total read notifications: ${readCount}`);
}


const notifications = [
    { id: 1, message: "Order #123 has shipped", isRead: false },
    { id: 2, message: "New comment on your post", isRead: true },
    { id: 3, message: "Weekly summary is ready", isRead: false },
    { id: 4, message: "Password changed successfully", isRead: true },
    { id: 5, message: "New login from unknown device", isRead: false }
];

getNotificationMessages(notifications)