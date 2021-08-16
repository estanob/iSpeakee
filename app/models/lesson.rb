# == Schema Information
#
# Table name: lessons
#
#  id          :bigint           not null, primary key
#  when        :datetime
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  language_id :bigint           not null
#  student_id  :bigint           not null
#  teacher_id  :bigint           not null
#
# Indexes
#
#  lesson_index  (student_id,teacher_id,when,language_id) UNIQUE
#
class Lesson < ApplicationRecord
  validates_uniqueness_of :when, scope: [ :teacher_id, :student_id, :language_id ]

  belongs_to :student,
    foreign_key: :student_id,
    class_name: :User

  belongs_to :teacher,
    foreign_key: :teacher_id,
    class_name: :User

  has_one :language,
    foreign_key: :language_id,
    class_name: :Language
end
