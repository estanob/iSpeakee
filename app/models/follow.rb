# == Schema Information
#
# Table name: follows
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  followee_id :integer          not null
#  follower_id :bigint           not null
#
# Indexes
#
#  index_follows_on_followee_id                  (followee_id) UNIQUE
#  index_follows_on_follower_id                  (follower_id) UNIQUE
#  index_follows_on_follower_id_and_followee_id  (follower_id,followee_id) UNIQUE
#
class Follow < ApplicationRecord
  validates :followee_id, uniqueness: { scope: :follower_id }

  belongs_to :followee,
    foreign_key: :followee_id,
    class_name: :User

  belongs_to :follower,
    foreign_key: :follower_id,
    class_name: :User
end
