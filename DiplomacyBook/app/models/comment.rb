class Comment < ApplicationRecord
    validates :body, :author_id, :post_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
    
    belongs_to :post,
        foreign_key: :post_id,
        class_name: :Post
    
end

# == Schema Information
#
# Table name: comments
#
#  id         :integer(8)      not null, primary key
#  body       :text            not null
#  author_id  :integer(4)      not null
#  post_id    :integer(4)      not null
#  created_at :datetime        not null
#  updated_at :datetime        not null
#

