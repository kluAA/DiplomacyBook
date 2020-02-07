class User < ApplicationRecord
    validates :first_name, presence: { message: "What's your name?" }
    validates :last_name, presence: {message: "Don't be shy."}
    validates :birthday, :gender, :password_digest, :session_token, presence: true
    validates :email, :password_digest, :session_token, uniqueness: true
    validates :email, format: {with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/, message: "Please enter a valid email." }
    validates :password, length: {minimum: 6, message: "Password is too short, minimum is 6 characters."}, allow_nil: true
    has_one_attached :photo
    has_one_attached :cover
   
    has_many :friend_requests,
        foreign_key: :receiver_id,
        class_name: :Friendrequest,
        dependent: :destroy
    
    has_many :sent_requests, 
        foreign_key: :sender_id,
        class_name: :Friendrequest,
        dependent: :destroy
    
    has_many :friendships,
        foreign_key: :user_id,
        class_name: :Friendship
    
    has_many :friends,
        through: :friendships,
        source: :friend

    has_many :requesteds,
        through: :sent_requests,
        source: :receiver

    has_many :requesters,
        through: :friend_requests,
        source: :sender

    has_many :posts,
        foreign_key: :user_id,
        class_name: :Post

    has_many :authored_posts,
        foreign_key: :author_id,
        class_name: :Post

    has_many :posters,
        through: :posts,
        source: :author

    has_many :comments,
        foreign_key: :author_id,
        class_name: :Comment
    
    attr_reader :password
    after_initialize :ensure_session_token


    def ensure_photo
        unless self.photo.attached?
            errors[:photo] << "must be attached"
        end
    end

    def ensure_cover
        unless self.cover.attached?
            errors[:cover] << "must be attached"
        end
    end


    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        bcp = BCrypt::Password.new(self.password_digest)
        bcp.is_password?(password)
    end

    def reset_session_token! 
        self.update!(session_token: self.class.generate_session_token)
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end



end

# == Schema Information
#
# Table name: users
#
#  id              :integer(8)      not null, primary key
#  email           :string          not null
#  first_name      :string          not null
#  last_name       :string          not null
#  birthday        :date            not null
#  gender          :string          not null
#  password_digest :string          not null
#  session_token   :string          not null
#  created_at      :datetime        not null
#  updated_at      :datetime        not null
#

