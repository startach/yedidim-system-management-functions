const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();


exports.deleteUser = functions.https.onRequest((request, response) => {
    admin.auth().getUserByEmail(request.params.email)
        .then(function (userRecord) {
            admin.auth().deleteUser(userRecord.uid).then(function () {
                response.send("Successfully deleted user");
            })
                .catch(function (error) {
                    response.send("Error deleting user: " + error);
                });

        })
        .catch(function (error) {
            response.send("Error fetching user data: " + error);
        });
})


