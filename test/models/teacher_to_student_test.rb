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
require 'test_helper'

class TeacherToStudentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
