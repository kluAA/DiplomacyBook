class Post < ApplicationRecord
    validates :body, :user_id, :author_id, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

end

# == Schema Information
#
# Table name: posts
#
#  id         :integer(8)      not null, primary key
#  body       :text            not null
#  user_id    :integer(4)      not null
#  author_id  :integer(4)      not null
#  created_at :datetime        not null
#  updated_at :datetime        not null
#

