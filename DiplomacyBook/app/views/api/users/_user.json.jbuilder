json.set! current_user.id do
    json.extract! current_user, :id, :email, :first_name, :last_name, :birthday, :gender
end