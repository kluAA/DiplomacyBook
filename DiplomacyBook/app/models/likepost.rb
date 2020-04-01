class Likepost < ApplicationRecord
    validates :user_id, :post_id, presence: true
    validates :post_id, uniqueness: { scope: :user_id }

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :post,
        foreign_key: :post_id,
        class_name: :Post
end

# == Schema Information
#
# Table name: likeposts
#
#  id         :integer(8)      not null, primary key
#  user_id    :integer(4)      not null
#  post_id    :integer(4)      not null
#  created_at :datetime        not null
#  updated_at :datetime        not null
#

