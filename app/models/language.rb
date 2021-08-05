# == Schema Information
#
# Table name: languages
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_languages_on_name  (name) UNIQUE
#
class Language < ApplicationRecord
  validates :name, presence: true

  # has_many :classes
  
  # has_many :language_teachers

  # has_many :language_students
end
