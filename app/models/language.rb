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

  has_many :language_to_students,
    primary_key: :id,
    foreign_key: :language_id,
    class_name: :LanguageToStudent,
    dependent: :destroy

  # has_many :countries
end
