# == Schema Information
#
# Table name: teacher_to_students
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  student_id :integer          not null
#  teacher_id :integer          not null
#
# Indexes
#
#  index_teacher_to_students_on_student_id_and_teacher_id  (student_id,teacher_id) UNIQUE
#
class TeacherToStudent < ApplicationRecord
  validates :student_id, :teacher_id, presence: true

  belongs_to :student,
    foreign_key: :student_id,
    class_name: :User
    
  belongs_to :teacher,
    foreign_key: :teacher_id,
    class_name: :User
end
