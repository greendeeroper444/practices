

// const notifications = [
//     {
//         id: 1,
//         message: 'This is notification 1',
//         isRead: false,
//     },
//     {
//         id: 2,
//         message: 'This is notification 2',
//         isRead: true
//     },
//     {
//         id: 3,
//         message: 'This is notification 3',
//         isRead: false
//     }
// ];

// // console.log(notifications);

// // const cleanedNotif = notifications.map((notif) => ({
// //     id: notif.id,
// //     message: notif.message,
// //     isRead: notif.isRead
// // }))

// // console.log('Mapped notifications:', cleanedNotif);

// for (let i = 0; i < notifications.length; i++) {
//     if (notifications[i].isRead === true) {
//         console.log(`Notification ${notifications[i].id} is read.`);
//     } else {
//         console.log(`Notification ${notifications[i].id} is unread.`);
//     }
// }


// function getUnreadAndRead(notifications) {
//     let read = [];
//     let unread = [];

//     for (let i = 0; i < notifications.length; i++) {
//         if (notifications[i].isRead === true) {
//             read.push(notifications[i]);
//         } else {
//             unread.push(notifications[i]);
//         }
//     }

//     return {
//         read,
//         unread
//     };
// }

// const notifications = [
//     {
//         id: 1,
//         message: 'This is notification 1',
//         isRead: false,
//     },
//     {
//         id: 2,
//         message: 'This is notification 2',
//         isRead: true
//     },
//     {
//         id: 3,
//         message: 'This is notification 3',
//         isRead: false
//     }
// ];

// let output = getUnreadAndRead(notifications);
// console.log(output);


// function getUnreadAndRead(notifications) {
//     for (let i = 0; i < notifications.length; i++) {
//         //ternary operator
//         // const status = notifications[i].isRead ? 'read' : 'unread';
//         // console.log(`Notification ${notifications[i].id} is ${status}.`);
//         //if else
//         if (notifications[i].isRead === true) {
//             console.log(`Notification ${notifications[i].id} is read`)
//         } else {
//             console.log(`Notification ${notifications[i].id} is unread`)
//         }
//         console.log(notifications[i].isRead)
//     }
// }


// const notifications = [
//     {
//         id: 1,
//         message: 'This is notification 1',
//         isRead: false,
//     },
//     {
//         id: 2,
//         message: 'This is notification 2',
//         isRead: true
//     },
//     {
//         id: 3,
//         message: 'This is notification 3',
//         isRead: false
//     }
// ];

//  getUnreadAndRead(notifications);
function getUnreadAndRead(notifications) {
    //step 1: map to create custom messages
    const messages = notifications.map((notification) => {
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

    //step 2: do something else in a for loop, like logging with styling
    for (let i = 0; i < messages.length; i++) {
        console.log(`🔔 ${messages[i]}`);
    }

    return messages;
}

const notifications = [
    { id: 1, message: 'This is notification 1', isRead: false },
    { id: 2, message: 'This is notification 2', isRead: true },
    { id: 3, message: 'This is notification 3', isRead: false }
];

getUnreadAndRead(notifications);
