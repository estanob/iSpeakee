# == Schema Information
#
# Table name: language_to_students
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  language_id :integer          not null
#  student_id  :integer          not null
#
# Indexes
#
#  index_language_to_students_on_language_id_and_student_id  (language_id,student_id) UNIQUE
#
require 'test_helper'

class LanguageToStudentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
