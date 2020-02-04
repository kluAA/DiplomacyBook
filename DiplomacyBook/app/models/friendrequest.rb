class Friendrequest < ApplicationRecord
    validates :sender_id, :receiver_id, presence: true 
    validates :sender_id, uniqueness: { scope: :receiver_id }

    belongs_to :sender,
        foreign_key: :sender_id,
        class_name: :User

    belongs_to :receiver,
        foreign_key: :receiver_id,
        class_name: :User
end

# == Schema Information
#
# Table name: friendrequests
#
#  id          :integer(8)      not null, primary key
#  sender_id   :integer(4)      not null
#  receiver_id :integer(4)      not null
#  created_at  :datetime        not null
#  updated_at  :datetime        not null
#

