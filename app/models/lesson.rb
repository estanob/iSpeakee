# == Schema Information
#
# Table name: lessons
#
#  id         :bigint           not null, primary key
#  when       :datetime
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  student_id :bigint           not null
#  teacher_id :bigint           not null
#
class Lesson < ApplicationRecord
  validates_uniqueness_of :when, scope: [ :teacher_id, :student_id ]

  belongs_to :student,
    foreign_key: :student_id,
    class_name: :User

  belongs_to :teacher,
    foreign_key: :teacher_id,
    class_name: :User
end
