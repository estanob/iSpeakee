# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  creator_id :integer          not null
#
# Indexes
#
#  index_posts_on_creator_id  (creator_id)
#
# Foreign Keys
#
#  fk_rails_...  (creator_id => users.id)
#
class Post < ApplicationRecord
  validates :body, :creator_id, presence: true
  
  belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :User
end
