# DiplomacyBook

Diplomacybook is a social media web application designed to provide users a way to network and build cameraderie with people from around the world. It is a faithful, light-weight Facebook clone that implements many of it's core features with a fresh twist.

[Live Site](https://diplomacybook.herokuapp.com/)

## Technologies Used
* Ruby on Rails
* PostgreSQL
* HTML5
* CSS
* Javascript (ES6)
* React
* Redux
* Heroku
* AWS S3

## Features

### User Authentication with Error Handling
![](https://github.com/kluAA/DiplomacyBook/blob/master/DiplomacyBook/app/assets/images/readme-userauth.png)

Visiting Diplomacybook for the first time will display a splash signup page prompting you to create a new account or log into an existing account. On submit, when any of the input fields are invalid, the user will be prompted with pop up error messages that describe what the problem is. 

Inside the login page, demo accounts are provided to preview the application's features.

### Profile
![](https://github.com/kluAA/DiplomacyBook/blob/master/DiplomacyBook/app/assets/images/readme-profile.png?raw=true)

One of the main features of Diplomacybook is the profile where every user is given their own personal, customizable layout. Users are able to change their profile photo and cover photo. In addition, they are able to create and delete posts, and respond to posts via comments on their own timeline and in other users' timelines. 

### Friendship System

One of the more challenging parts of writing this application was designing the friendship system. Users are able to send a friend request to other users and on submission, the receiver will see a notification to confirm or decline the request from the navigation bar.

![](https://github.com/kluAA/DiplomacyBook/blob/master/DiplomacyBook/app/assets/images/Screen%20Shot%202020-02-07%20at%203.17.26%20PM.png)

After successful confirmation, the two users are now friends and will have their profile linked into their respective profiles. Friends will also have the option to unfriend each other.

![](https://github.com/kluAA/DiplomacyBook/blob/master/DiplomacyBook/app/assets/images/readme-friend.png)

    def destroy
        //friend_requests_controller 
        action = params[:friendrequest][:action]
        @friendrequest = Friendrequest.find(params[:id])
        if action == "decline" 
            @friendrequest.destroy
            render json: @friendrequest
        elsif action == "accept"
            sender_id = @friendrequest.sender_id
            receiver_id = @friendrequest.receiver_id
            ActiveRecord::Base.transaction do
                Friendship.create(user_id: sender_id, friend_id: receiver_id)
                Friendship.create(user_id: receiver_id, friend_id: sender_id)
                @friendrequest.destroy
            end
            render json: @friendrequest
        else
            render json: @friendrequest.errors.full_messages, status: 401
        end
    end

Designing the backend for the friendship system required both a friend requests and friendships table. Accepting or declining a friend request triggers a DELETE request towards the friend requests entry. On accept, the controller action uses an ActiveRecord::Base transaction to create both the friendship entry and inverse relationship, and then destroys the entry for the friend request.

## Possible Future Design Features

Diplomacybook's design is very flexible where a variety of future features can be implemented. Some of these possible features include:

* Messenger System (real time chat)
* Search Feature (find new friends)
* Events (use location api to host new events)
* Likes (like posts and comments)
* Abouts profile page (additional profile customization)